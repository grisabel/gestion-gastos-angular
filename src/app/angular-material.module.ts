import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
    imports: [MatSliderModule,
              MatFormFieldModule,
              MatInputModule,
              FormsModule,
              MatIconModule,
              MatButtonModule,
              ReactiveFormsModule,
              MatDialogModule,
              MatSelectModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatMenuModule],
    exports: [MatSliderModule,
              MatFormFieldModule,
              MatInputModule,
              FormsModule,
              MatIconModule,
              MatButtonModule,
              ReactiveFormsModule,
              MatDialogModule,
              MatSelectModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatMenuModule]
})
export class MaterialModule { }
