import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GrowComponent } from './grow/grow.component';
import { HomeComponent } from './home/home.component';
import { ProjectcupidComponent } from './projectcupid/projectcupid.component';
import { PuzzlingpotionsComponent } from './puzzlingpotions/puzzlingpotions.component';
import { StardewjournalComponent } from './stardewjournal/stardewjournal.component';
import { Surviving2020Component } from './surviving2020/surviving2020.component';
import { WarhawkComponent } from './warhawk/warhawk.component';
import { PollinateComponent } from './pollinate/pollinate.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { NewworldComponent } from './newworld/newworld.component';
import { CatgameComponent } from './catgame/catgame.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'grow', component: GrowComponent },
  { path: 'surviving2020', component: Surviving2020Component },
  { path: 'project-cupid', component: ProjectcupidComponent },
  { path: 'stardew-journal', component: StardewjournalComponent },
  { path: 'puzzling-potions', component: PuzzlingpotionsComponent },
  { path: 'warhawk-redesign', component: WarhawkComponent },
  { path: 'pollinate', component: PollinateComponent },
  { path: 'web-design', component: WebDesignComponent },
  { path: 'new-world', component: NewworldComponent },
  { path: 'catching-shrooms', component: CatgameComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes, {anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
