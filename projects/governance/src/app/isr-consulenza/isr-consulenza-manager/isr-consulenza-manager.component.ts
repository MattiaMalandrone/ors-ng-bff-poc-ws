import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-isr-consulenza-manager',
  templateUrl: './isr-consulenza-manager.component.html',
  styleUrls: ['./isr-consulenza-manager.component.css']
})
export class IsrConsulenzaManagerComponent {
  @Input() activeIsrId!: number | null
}
