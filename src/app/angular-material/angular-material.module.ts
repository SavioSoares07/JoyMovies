import { NgModule } from '@angular/core';

//Components Angular
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatIconModule],
  exports: [MatButtonModule, MatIconModule],
})
export class AngularMaterialModule {}
