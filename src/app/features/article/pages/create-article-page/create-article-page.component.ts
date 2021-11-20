import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  templateUrl: './create-article-page.component.html',
  styleUrls: ['./create-article-page.component.scss']
})
export class CreateArticlePageComponent implements OnInit {

  
  article?: Article;
  articleForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    preview: [''],
    text: ['',Validators.required],
    theme: ['', Validators.required],
    imageUrl: ['', Validators.required],
    });
  }
}
