import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from '../post/post.component';
import { SharedModule } from 'src/shared/shared.module';

const routes: Routes = [{ path: '', component: PostComponent }];

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PostModule {}
