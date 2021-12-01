import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/features/comment/models/comment.model';
import { CommentService } from 'src/app/features/comment/services/comment.service';
import { User } from 'src/app/features/user/models/user.model';
import { UserService } from 'src/app/features/user/services/user.service';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.scss']
})
export class ArticleDetailPageComponent implements OnInit {

  user?: User | null;
  article?: Article;
  comment: Comment = this.commentService.getDefaultComment();
  comments?: Array<Comment>;
  commentForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private commentService: CommentService,
    private dialog: MatDialog,
    private router: Router,
    private userService: UserService,
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      const article = this.articleService.getById(parseInt(params.id));
      this.article = article;
    });
    this.comments = this.commentService.getComments().filter((c)=> c.article === this.article!.id);
    this.commentService.getCommentStream().subscribe((comments) =>{
      this.comments = comments.filter((c)=> c.article === this.article!.id);
    });

  }



  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment: [''],
    })
    if(this.userService.getLoggedUser()){
      this.user = this.userService.getLoggedUser();
    }
   

  }

  onSubmit(){
    const formValue = this.commentForm.value;
    this.comment.user = this.user!.name;
    this.comment.article = this.article!.id;
    this.comment.comment = formValue.comment;
    this.commentService.createComment(this.comment);
    this.dialog.open(MessageDialogComponent, {
      data: {
        message: "O presente site não se responsabiliza por atos ilícitos de terceiros como injúria, calúnia ou difamação",
        titleMessage: "Atenção!"
      }
    });
    this.commentForm.reset();
    this.router.navigateByUrl(`article-detail/${this.article!.id}`);
    // this.router.navigateByUrl('all-articles');

  }
}
