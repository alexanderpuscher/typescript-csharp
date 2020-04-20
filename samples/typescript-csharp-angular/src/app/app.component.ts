import { Component } from '@angular/core';
import { Guid } from 'typescript-csharp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'typescript-csharp-angular';
  guid = Guid.newGuid();
}
