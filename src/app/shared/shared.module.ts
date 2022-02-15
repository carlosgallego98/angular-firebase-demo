import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    InputComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    InputComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
