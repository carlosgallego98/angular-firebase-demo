import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HeroIconName } from 'ng-heroicon';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  faSpinner = faSpinner;


  @Input() mode: 'filled' | 'outlined' | 'raised' = "filled";
  @Input() color: 'success' | 'brand' | 'danger' | 'black' = "brand";
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon!: HeroIconName;
  @Input() iconType: 'solid' | 'outline' = 'outline';
  @HostBinding('class.b-block')
  @Input() block: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
