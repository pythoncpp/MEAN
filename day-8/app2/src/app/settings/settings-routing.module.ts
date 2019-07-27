import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './components/settings.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class SettingsRoutingModule { }
