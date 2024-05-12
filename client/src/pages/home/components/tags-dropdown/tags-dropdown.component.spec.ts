import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDropdownComponent } from './tags-dropdown.component';

describe('TagsDropdownComponent', () => {
  let component: TagsDropdownComponent;
  let fixture: ComponentFixture<TagsDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsDropdownComponent]
    });
    fixture = TestBed.createComponent(TagsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
