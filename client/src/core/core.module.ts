import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostApiService } from './providers/post-api.service';

@NgModule({
  imports: [CommonModule],
  providers: [PostApiService],
})
export class CoreModule {}
