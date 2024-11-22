import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyRevPipe } from './my-rev.pipe';
import { FormsModule } from '@angular/forms';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyRevPipe,FormsModule,MyAddPipe,MyMultPipe,MarvellousChkPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment9Pipe';

  inputValue: string = '';
}
