import { NgModule } from '@angular/core';
import { DatePipe } from './date.pipe';
import { VoteAveragePipe } from './vote-average.pipe';

@NgModule({
  declarations: [DatePipe, VoteAveragePipe],
  exports: [DatePipe, VoteAveragePipe],
})
export class PipesModule {}
