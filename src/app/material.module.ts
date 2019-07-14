import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
//   declarations: [OrderListComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule
  ],
  exports:[MatTabsModule,MatCardModule],
})
export class MaterialModule { }
