import { Injectable } from '@angular/core';
import {Howl, Howler} from 'howler';
/*
  use those 2 sources for the data visualisation
  https://s3.amazonaws.com/mixgenius.testing/howler-test/visualization-original-1000.json

  https://s3.amazonaws.com/mixgenius.testing/howler-test/visualization-rawmaster-1000.json
*/
@Injectable()
export class PlayerService {
  currentSource = 0;
  sources = [];
  howls: Howl[] = [];
  mastered = this.addTrack(['https://s3.amazonaws.com/mixgenius.testing/howler-test/LANDR-30s_quickWorking.wav']);
  original = this.addTrack(['https://s3.amazonaws.com/mixgenius.testing/howler-test/30s_quickWorking.wav']);

  addTrack(sources: string[]): Howl {
    const track = new Howl({
      src: sources,
      preload: true,
      autoplay: false,
    });
    this.howls.push(track);
    console.log(track);
    return track;
  }

  playTrackById(id){
    this.howls[id].play();
  }

  pauseTrackById(id) {
    this.howls[id].pause();
  }

  playAll() {
    this.original.play();
    this.mastered.play();
  }

  pauseAll() {
    this.original.pause();
    this.mastered.pause();
  }

  playOriginal() {
   // this.playAll();
    this.original.mute(false);
    this.mastered.mute(true);
  }


  playMastered() {
    this.mastered.mute(false);
    this.original.mute(true);
    // this.playAll();
  }

  seekTo(sec){
    this.howls.map(howl => howl.seek(sec));
  }




  constructor() { }

}
