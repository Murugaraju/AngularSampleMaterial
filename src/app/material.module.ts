import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
//   declarations: [OrderListComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatAutocompleteModule
    
  ],
  exports:[MatTabsModule,MatCardModule,MatFormFieldModule,MatStepperModule,MatInputModule,MatAutocompleteModule],
})
export class MaterialModule { }
