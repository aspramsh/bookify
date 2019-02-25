import { NgModule } from "@angular/core";

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';

@NgModule({
  imports: [
    CardModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    PanelModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    PanelModule
  ],
})
export class PartialPrimeNgModule { }
