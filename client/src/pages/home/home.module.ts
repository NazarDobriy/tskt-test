import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { TagsDropdownComponent } from './components/tags-dropdown/tags-dropdown.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, TagsDropdownComponent, SearchFilterPipe],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
