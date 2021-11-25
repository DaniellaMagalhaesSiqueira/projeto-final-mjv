import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MessageDialogComponent } from "src/app/shared/dialogs/message-dialog/message-dialog.component";
import { Article } from "../../article/models/article.model";
import { User } from "../../user/models/user.model";
import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  article?: Article;
  user?: User;
  comment: Comment = this.commentService.getDefaultComment();
  commentForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private commentService: CommentService,
    private dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user');
    if(userStorage) this.user = JSON.parse(userStorage);
    this.commentForm = this.formBuilder.group({
      comment: [''],
    })

  }

  onSubmit(){
    const formValue = this.commentForm.value;
    this.comment.user = this.user!.name;
    this.comment.article = this.article!.id;
    this.comment.comment = formValue.comment.value;
    this.commentService.createComment(this.comment);
    // this.router.navigateByUrl(`article-detail/${this.article!.id}`);
    this.dialog.open(MessageDialogComponent, {
      data: {
        message: "O presente site não se responsabiliza por atos ilícitos de terceiros como injúria, calúnia ou difamação",
        titleMessage: "Atenção!"
      }
    });

  }

}
