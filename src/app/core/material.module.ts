import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatCardModule, MatGridListModule, MatPaginatorModule} from '@angular/material';
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
    MatGridListModule,
    MatPaginatorModule
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
    MatGridListModule,
    MatPaginatorModule
  ],
})
export class PartialMaterialModule { }
