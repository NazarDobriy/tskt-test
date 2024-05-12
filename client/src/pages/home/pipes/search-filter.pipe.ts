import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: string[], searchTitle: string): string[] {
    if (!value || !searchTitle) {
      return value;
    }
    return value.filter((item: string) => {
      return item.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase());
    });
  }
}
