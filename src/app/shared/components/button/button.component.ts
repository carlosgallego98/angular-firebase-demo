import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title: string = "Button";
  @Input() mode: 'filled' | 'outlined' | 'raised' = "filled";
  @Input() color: string = "brand";
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() block: boolean = false;
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
