import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [MatSliderModule,
              MatFormFieldModule,
              MatInputModule,
              FormsModule,
              MatIconModule,
              MatButtonModule],
    exports: [MatSliderModule,
              MatFormFieldModule,
              MatInputModule,
              FormsModule,
              MatIconModule,
              MatButtonModule]
})
export class MaterialModule { }
