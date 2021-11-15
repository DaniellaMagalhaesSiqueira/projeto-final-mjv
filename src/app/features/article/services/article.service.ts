import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Array<Article> = [
    {
      id: 1,
      title: 'Personalidade do Signo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'Entenda a personalidade dos Signos do Zodíaco',
      imageUrl: 'https://veja.abril.com.br/wp-content/uploads/2019/09/astrologia-aplicativo-celular-166.jpg.jpg',
    },
    {
      id: 2,
      title: 'Personalidade do Signo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'Entenda a personalidade dos Signos do Zodíaco',
      imageUrl: 'https://muralcientifico.files.wordpress.com/2020/03/astrologia.jpg',
    },
    {
      id: 3,
      title: 'Personalidade do Signo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'Entenda a personalidade dos Signos do Zodíaco',
      imageUrl: 'https://www.portalr10.com/images/noticias/77877/fdb7402fb9dad51663e5583f22963de4.jpg',
    },
    {
      id: 4,
      title: 'Personalidade do Signo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'Entenda a personalidade dos Signos do Zodíaco',
      imageUrl: 'https://cdn.universoracionalista.org/wp-content/uploads/2013/02/astrology-with-Marilyn2.jpg',
    },
    {
      id: 5,
      title: 'Personalidade do Signo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'Entenda a personalidade dos Signos do Zodíaco',
      imageUrl: 'https://media-manager.noticiasaominuto.com/1920/naom_606a3713a9e25.jpg',
    },
  ]
  constructor() { }

  geterateNextId(): number{
    return this.articles[(this.articles.length - 1)].id + 1;
  }

  getArticles(){
    return this.articles;
  }

  getById(id: number){
    return this.articles.find((article) => article.id === id);
  }

  getDefaultArticle(): Article{
    return {
      id: this.geterateNextId(),
      title: '',
      preview: '',
      text: '',
      imageUrl: '',
    }
  }
  createArticle(article: Article){
    this.articles.push(article);
    return this.articles;
  }

  removeArticleById(id: number){
    const findedArticle = this.articles.findIndex((article) => article.id === id);
    if(findedArticle) this.articles.splice(findedArticle, 1);
  }
  getByIndex(index: number){
    return this.articles[index];
  }
}