import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleModule } from '../article/article.module';



@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    CommentComponent,
  ]
})
export class CommentModule { }
