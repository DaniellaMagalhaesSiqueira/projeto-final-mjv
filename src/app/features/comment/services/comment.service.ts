import { Injectable } from '@angular/core';
import { User } from '../../user/models/user.model';
import { UserService } from '../../user/services/user.service';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: Array<Comment> = [
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
  ];
  constructor(
    private userService: UserService,
  ) { }

  getComments(): Array<Comment>{
    return this.comments;
  }

  generatedNextId(): number{
    return this.comments[(this.comments.length -1)].id + 1;
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
    this.comments.push(comment);
    return this.comments;
  }


}
