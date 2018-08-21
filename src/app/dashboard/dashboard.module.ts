import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingSearchingComponent } from './setting-searching/setting-searching.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, SettingSearchingComponent, BodyComponent]
})
export class DashboardModule { }
