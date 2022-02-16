import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() mode: 'filled' | 'outlined' | 'raised' = "filled";
  @Input() color: 'success' | 'brand' | 'danger' | 'black' = "brand";
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon!: string;
  @HostBinding('class.b-block')
  @Input() block: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
