import { Component,  } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage  {
  articles;
  constructor(
    private apiService: ApiService
  ) { }

  ionViewDidEnter(){

    setTimeout(() => {
      this.apiService.getNews().subscribe((data)=>{
        console.log(data);
        this.articles = data['articles'];
      });
    }, 2000);

    
  }

}
