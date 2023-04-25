import { Component, Input } from '@angular/core';

import { IsrModel } from '../models/isr.model';

@Component({
  selector: 'app-isr-consulenza-manager',
  templateUrl: './isr-consulenza-manager.component.html',
  styleUrls: ['./isr-consulenza-manager.component.css']
})
export class IsrConsulenzaManagerComponent {
  @Input() currentIsr!: IsrModel | null
}
