import { Injectable } from '@angular/core';
import { CatsService } from '../services/cats.service';
import { Cat } from '../interfaces/cats';

@Injectable({
  providedIn: 'root',
})
export class CatModel {
  cats: Cat[] = [];
  filteredCats: Cat[] = [];
  currentPage: number = 1;
  pageSize: number = 12;

  constructor(private catService: CatsService) {}

  loadCats() {
    this.catService.getCats(this.currentPage, this.pageSize).subscribe((data) => {
      this.cats = data;
      this.filteredCats = data;
    });
  }

  loadMoreCats() {
    this.currentPage++;
    this.catService.getCats(this.currentPage, this.pageSize).subscribe((data) => {
      this.cats = this.cats.concat(data);
      this.filteredCats = this.cats.concat(data);
    });
  }

  searchCats(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCats = this.cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchTerm);
    });
  }


}