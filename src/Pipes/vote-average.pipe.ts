import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voteAverage',
})
export class VoteAveragePipe implements PipeTransform {
  transform(voteAvg: string): string {
    return parseFloat(voteAvg).toFixed(1);
  }
}
