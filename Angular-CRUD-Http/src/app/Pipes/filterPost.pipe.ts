import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterPost',
})
export class PostPipe implements PipeTransform {
  transform(value: any, postSearch: string) {
    // return value.filter(function (search: { categoryName: string }) {
    //   search.categoryName.toLowerCase().indexOf(postSearch.toLowerCase()) > -1;
    // });
    if (value.length === 0 || postSearch === '') {
      return value;
    }
    const posts = [];
    for (const post of value) {
      if (post['categoryName'] === postSearch) {
        posts.push(post);
      }
    }
    return posts;
  }
}
