import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
imports:[MatFormFieldModule,MatInputModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatButtonModule],
exports:[MatFormFieldModule,MatInputModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatButtonModule],
})
export class MaterialModule{}