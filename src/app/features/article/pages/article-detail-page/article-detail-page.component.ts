import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/features/comment/models/comment.model';
import { User } from 'src/app/features/user/models/user.model';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.scss']
})
export class ArticleDetailPageComponent implements OnInit {

  user?: User;
  article?: Article;
  comment?: Comment;
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) { }



  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user');
    if(userStorage){
      this.user = JSON.parse(userStorage);
    }
    this.activatedRoute.params.subscribe((params) => {
      const article = this.articleService.getById(parseInt(params.id));
      this.article = article;
    });
  }
}
