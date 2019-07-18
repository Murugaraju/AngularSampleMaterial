import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatDialogModule} from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material';
@NgModule({
//   declarations: [OrderListComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    MatRadioModule
    
  ],
  exports:[MatTabsModule,MatCardModule,MatFormFieldModule,MatStepperModule,MatInputModule,MatAutocompleteModule,
    MatDatepickerModule,MatMomentDateModule,MatDialogModule,MatRadioModule],
})
export class MaterialModule { }
