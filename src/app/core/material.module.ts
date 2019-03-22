import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatNativeDateModule, 
  MatIconModule, 
  MatSidenavModule, 
  MatListModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatGridListModule, 
  MatPaginatorModule, 
  MatAutocompleteModule
} from '@angular/material';
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
    MatPaginatorModule,
    MatAutocompleteModule
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
    MatPaginatorModule,
    MatAutocompleteModule
  ],
})
export class PartialMaterialModule { }
