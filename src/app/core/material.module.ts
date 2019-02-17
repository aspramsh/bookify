import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule,
    MatSidenavModule, 
    MatListModule,
    MatInputModule
  ],
  exports: [
    CommonModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatInputModule
  ],
})
export class PartialMaterialModule { }
