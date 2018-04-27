import { Injectable } from '@angular/core';
import {Howl, Howler} from 'howler';
import { Observable } from 'rxjs/Observable';
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
    return track;
  }

  getInfos(id) {
    return new Observable( o => {
      setInterval(() => {
        this.howls.map(h => console.log(h.seek()));
        const h: Howl = this.howls[id];
        o.next(
            {
              'position': h.seek(),
              'duration': h.duration(),
              'state': h.state(),
              'muted': h.mute(),
            }
          );
      }, 300);
    });
  }

  getDuration(id){
    this.howls[id].duration();
  }

  playTrackById(id){
    this.howls[id].play();
  }

  pauseTrackById(id) {
    this.howls[id].pause();
  }

  playAll() {
    this.howls.map( h => h.playing() ? null : h.play());
  }

  pauseAll() {
    this.howls.map( h => h.pause() );
  }


  playOriginal() {
    this.playAll();
    this.original.mute(false);
    this.mastered.mute(true);
  }


  playMastered() {
    this.playAll();
    this.mastered.mute(false);
    this.original.mute(true);
  }

  seekTo(sec){
    this.howls.map(howl => howl.seek(sec));
  }

  constructor() { }

}
