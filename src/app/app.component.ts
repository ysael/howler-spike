import { PlayerService } from './player.service';
import { Component, NgModule } from '@angular/core';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
  ],
  providers: [PlayerService]
})
export class AppComponent {
  title = 'app';
}
