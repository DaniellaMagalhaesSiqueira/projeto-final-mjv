import { Article } from './../../../article/models/article.model';

import { ArticleService } from 'src/app/features/article/services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  article?: Article;
  slides: Array<Article> = [];
  constructor(
    private articleService: ArticleService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.slides = this.articleService.getArticles();
    
  }

  navigate(index: number){
    this.article = this.slides[index];
    this.router.navigateByUrl(`article-detail/${this.article.id}`);
    console.log(index);
  }

}
