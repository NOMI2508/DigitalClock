import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';

const MaterialComponent = [
  MatButtonToggleModule
];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent],
})
export class MaterialModule {}
