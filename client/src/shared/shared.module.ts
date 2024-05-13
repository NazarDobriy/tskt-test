import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [PostCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [
    PostCardComponent,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {}
