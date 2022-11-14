import { Component, Input } from '@angular/core';

import { ButtonSize, ButtonStyle, ButtonType } from './button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public type: ButtonType | string = '';
  @Input() public style = ButtonStyle.PRIMARY;
  @Input() public size = ButtonSize.MEDIUM;

  @Input() public text = '';
  @Input() public disabled = false
}
