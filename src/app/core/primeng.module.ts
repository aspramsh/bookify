import { NgModule } from "@angular/core";

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CardModule,
    ButtonModule
  ],
  exports: [
    CardModule,
    ButtonModule
  ],
})
export class PartialPrimeNgModule { }
