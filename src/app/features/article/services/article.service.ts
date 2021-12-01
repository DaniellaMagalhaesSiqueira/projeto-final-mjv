
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles = new BehaviorSubject<Article[]>([
    {
      id: 1,
      author: "Vera Lúcia",
      title: 'Marte nas Casas Astrológicas',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'O posicionamento de Marte nas casas astrológicas',
      theme: "Astrologia",
      imageUrl: 'https://veja.abril.com.br/wp-content/uploads/2019/09/astrologia-aplicativo-celular-166.jpg.jpg',
    },
    {
      id: 2,
      title: 'Previsões para 2022',
      author: "Cíntia",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'As previsões mais importantes para 2022',
      theme: "Astrologia",
      imageUrl: 'https://muralcientifico.files.wordpress.com/2020/03/astrologia.jpg',
    },
    {
      id: 3,
      title: 'Morte e Herança',
      author: "Ionne",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'Casa 8 e seu significado',
      theme: "Astrologia",
      imageUrl: 'https://www.portalr10.com/images/noticias/77877/fdb7402fb9dad51663e5583f22963de4.jpg',
    },
    {
      id: 4,
      title: 'Celebridades com posicionamentos em Libra',
      author: "Mônica Martins",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'Empatia, diversificação e facilidade com relações interpessoais',
      theme: "Astrologia",
      imageUrl: 'https://cdn.universoracionalista.org/wp-content/uploads/2013/02/astrology-with-Marilyn2.jpg',
    },
    {
      id: 5,
      title: 'O siginificado do Ascendente no Mapa Natal',
      author: "Cíntia",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat purus mi, at feugiat magna varius sed. Etiam placerat, ex a sodales interdum, eros tortor volutpat lorem, vitae facilisis lectus odio sit amet felis. Vestibulum blandit blandit hendrerit. Vivamus hendrerit neque at magna consequat, ut fringilla orci facilisis. Pellentesque vitae augue a erat pulvinar pharetra. Ut pulvinar dui non fermentum imperdiet. Nullam hendrerit in nulla in ultricies. Quisque quis dictum risus. Etiam quis ipsum blandit, luctus magna scelerisque, feugiat lacus. Ut rutrum volutpat augue, quis semper quam hendrerit quis. Ut a hendrerit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elementum ex, ac sollicitudin orci.',
      preview: 'Você também é o que demonstra ser',
      theme: "Astrologia",
      imageUrl: 'https://media-manager.noticiasaominuto.com/1920/naom_606a3713a9e25.jpg',
    },
  ]);
  constructor() { }

  geterateNextId(): number{
    return this.getArticles()[(this.getArticles().length - 1)].id + 1;
  }

  getArticles(){
    return this.articles.getValue();
  }

  getArticlesStream(): Observable<Article[]>{
    return this.articles.asObservable();
  }

  getById(id: number){
    return this.getArticles().find((article) => article.id === id);
  }

  getDefaultArticle(): Article{
    return {
      id: this.geterateNextId(),
      author: '',
      title: '',
      preview: '',
      text: '',
      theme: '',
      imageUrl: '',
    }
  }
  createArticle(article: Article){
    this.getArticles().push(article);
    return this.getArticles();
  }

  removeArticleById(id: number){
    const findedArticle = this.getArticles().findIndex((article) => article.id === id);
    if(findedArticle) this.getArticles().splice(findedArticle, 1);
  }
  getByIndex(index: number){
    return this.getArticles()[index];
  }
}