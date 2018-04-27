import { Observable } from 'rxjs/Observable';
import { Howl } from 'howler';
import { PlayerService } from './../player.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})



export class PlayerComponent implements OnInit {
  original: any = {pos: 0, duration: 0};
  mastered: any = {pos: 0, duration: 0};



  constructor(private playerService: PlayerService) { }

  play(id) {
    this.playerService.playTrackById(id);
  }

  pause(id) {
    this.playerService.pauseTrackById(id);
  }

  seek(e) {
    this.playerService.seekTo(Math.random() * 31);
  }

  playall(){
    this.playerService.playAll();
  }
  pauseAll(){
    this.playerService.pauseAll();
  }

  playOriginal() {
    this.playerService.playOriginal();
  }

  playMastered() {
    this.playerService.playMastered();
  }

  ngOnInit() {
    this.playerService.getInfos(0).subscribe( (h: any) => {
      this.original.pos = h.position;
      this.original.duration = h.duration;
      this.original.state = h.state;
    });

    this.playerService.getInfos(1).subscribe( (h: any) => {
      this.mastered.pos = h.position;
      this.mastered.duration = h.duration;
      this.mastered.state = h.state;
    });
  }

}
