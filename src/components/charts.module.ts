import { NgModule } from '@angular/core';
import { BaseChartDirective } from './charts';

@NgModule({
  declarations: [BaseChartDirective],
  exports: [BaseChartDirective],
  imports: []
})
export class ChartsModule {
}
