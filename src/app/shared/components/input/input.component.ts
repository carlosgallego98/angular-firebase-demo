import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: 'text' | 'number' | 'password' | 'email' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'url' | 'search' | 'tel' | 'color' = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() name: string = 'input';
  @Input() parent!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
