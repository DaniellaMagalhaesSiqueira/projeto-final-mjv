import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments = new BehaviorSubject<Comment[]> ([
    {
      id:1,
      user: "Joana",
      userId: 3,
      article: 5,
      comment: "Comentário da Maria ao artigo 5",
    },
    {
      id:2,
      user: "Vera Lúcia",
      userId: 2,
      article: 5,
      comment: "Comentário da Vera Lúcia ao artigo 5",
    },
    {
      id:3,
      user: "Ionne",
      userId: 1,
      article: 5,
      comment: "Comentário da Ionne ao artigo 5",
    },
  ]);
  constructor(
  ) { }

  getComments(){
    return this.comments.getValue();
  }

  getCommentStream(){
    return this.comments.asObservable();
  }

  generatedNextId(): number{
    return this.getComments()[(this.getComments().length -1)].id + 1;
  }
  getDefaultComment():Comment{
    return {
      id: this.generatedNextId(),
      user: '',
      userId: 0,
      article: 0,
      comment: '',
    };
  }

  createComment(comment: Comment){
    this.getComments().push(comment);
    this.comments.next(this.getComments());
  }


}
