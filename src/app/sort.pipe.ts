import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from './interface/scores';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list: Array<Scores>, selectedSort: string): Array<Scores>{
    

    list.sort((a,b) => {return b.score - a.score})

    let newList: Scores[] = [];

    list.map((record) => {
      if (newList.length < 10) {
        newList.push(record)
      }
    })

    if (selectedSort === 'ascending') {
      newList.sort((first, last) => { return first.score - last.score })
      return newList;
    }

    if (selectedSort === 'descending') {
      newList.sort((first, last) => { return last.score - first.score })
      return newList;
    }

    return newList;
  }

}
