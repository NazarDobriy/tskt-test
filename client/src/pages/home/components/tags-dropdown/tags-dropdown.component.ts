import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-tags-dropdown',
  templateUrl: './tags-dropdown.component.html',
  styleUrls: ['./tags-dropdown.component.css'],
})
export class TagsDropdownComponent {
  @Input() allTags: string[] = [];
  @Output() tagsSelect = new EventEmitter<string[]>();
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  searchTag = '';
  tags: string[] = [];
  tagCtrl = new FormControl('');

  remove(tag: string): void {
    this.allTags.push(tag);
    this.allTags.sort();
    this.tags = this.tags.filter((item) => item !== tag);
    this.tagsSelect.emit(this.tags);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;

    this.tags.push(value);
    this.allTags = this.allTags.filter((tag) => tag !== value);
    this.tagsSelect.emit(this.tags);
    this.clearInput();
  }

  private clearInput(): void {
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue('');
  }
}
