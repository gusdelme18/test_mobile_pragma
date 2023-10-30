import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'cat-list',
    loadChildren: () => import('./views/cat-list/cat-list.module').then( m => m.CatListPageModule)
  },
  {
    path: '',
    redirectTo: 'cat-list',
    pathMatch: 'full'
  },
  {
    path: 'cat-details',
    loadChildren: () => import('./views/cat-details/cat-details.module').then( m => m.CatDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
