import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatCardModule, MatGridListModule} from '@angular/material';
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
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    CommonModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ],
})
export class PartialMaterialModule { }
