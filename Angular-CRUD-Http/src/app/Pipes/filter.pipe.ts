import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, titleSearch: string) {
    return value.filter(function (search: { title: string }) {
      return search.title.toLowerCase().indexOf(titleSearch.toLowerCase()) > -1;
    });
  }
}
