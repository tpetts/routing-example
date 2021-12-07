import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KittyComponent } from './kitty/kitty.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {
    path: ''
    , component: WorldComponent
  }
  , {
    path: 'world'
    , component: WorldComponent
  }
  , {
    path: 'kitty'
    , component: KittyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
