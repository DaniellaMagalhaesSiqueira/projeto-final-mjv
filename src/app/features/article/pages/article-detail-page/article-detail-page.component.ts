import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.scss']
})
export class ArticleDetailPageComponent implements OnInit {

  article?: Article;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const article = this.articleService.getById(parseInt(params.id));
      this.article = article;
    });
  }
}
