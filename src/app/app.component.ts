import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualNotesComponent } from './components/visualnotes/visualnotes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    VisualNotesComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'visualnotes';
  // read notes data from the file in public folder with http request
  data: string = '';
}
