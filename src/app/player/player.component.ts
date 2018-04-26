import { Howl } from 'howler';
import { PlayerService } from './../player.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})



export class PlayerComponent implements OnInit {
  track1: Howl;
  track2: Howl;

  constructor(private playerService: PlayerService) { }

  play(id) {
    console.log('play', id);
    this.playerService.playTrackById(id);
  }

  pause(id) {
    console.log('pause', id);
    this.playerService.pauseTrackById(id);
  }

  seek(e) {
    console.log(e);
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

  }

}
