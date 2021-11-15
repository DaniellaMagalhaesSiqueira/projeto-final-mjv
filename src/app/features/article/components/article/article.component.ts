import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input()
  article?:Article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const article = this.articleService.getById(parseInt(params.id));
      this.article = article;
    })
  }

}
