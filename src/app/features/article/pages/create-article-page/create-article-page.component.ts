import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActionDialogComponent } from 'src/app/shared/dialogs/action-dialog/action-dialog.component';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
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
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.article = this.articleService.getDefaultArticle();
    this.articleForm = this.formBuilder.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    preview: [''],
    text: ['',Validators.required],
    theme: ['', Validators.required],
    imageUrl: [''],
    });
  }

  onSubmit(){
    const formValue = this.articleForm.value;
    if(this.article){
      this.article.title = formValue.title;
      this.article.author = formValue.author;
      this.article.preview = formValue.preview;
      this.article.text = formValue.text;
      this.article.theme = formValue.theme;
      if(!formValue.imageUrl.includes('.jpg')){
        this.article.imageUrl = 'https://loja.stylebrazil.com.br/media/catalog/product/cache/1/image/b28c5f1281de4ad6561179a9715ec591/v/e/verde_1.jpg';
      }else{
        this.article.imageUrl = formValue.imageUrl;
      }
      this.articleService.createArticle(this.article);
    }
    this.dialog.open(MessageDialogComponent,{
      data: {
        message: `Artigo incluído no site com sucesso!`,
        titleMessage: "Inclusão de Artigo"
      }
    });
    this.router.navigateByUrl('/all-articles');
  }
}
