import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatModel } from '../../models/cat'
import { Cat } from '../../interfaces/cats';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.page.html',
  styleUrls: ['./cat-list.page.scss'],
})
export class CatListPage implements OnInit {
  filteredCats: Cat[] = [];
  constructor(
    private router: Router, 
    public catModel: CatModel) { }

    ngOnInit() {
    this.catModel.loadCats();
  }
  detailsCats(cat: Cat){
    this.router.navigate(['/cat-details'], { queryParams: { datos: JSON.stringify(cat) } });
  }
  loadMore(event: any) {
    setTimeout(() => {
      this.catModel.loadMoreCats();
      event.target.complete();
    }, 2000);
  }

  searchCats(event: any) {
    this.catModel.searchCats(event);
  }
}
