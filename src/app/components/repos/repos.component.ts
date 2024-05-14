import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
})
export class ReposComponent {
  @Input() user: any[] = [];
}
