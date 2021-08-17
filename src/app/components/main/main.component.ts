import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  coverFlag: boolean = false;
  @ViewChild('audio') audioPlayerRef!: ElementRef<HTMLAudioElement>;
  btn_pause = 'bi bi-pause-circle';
  btn_play = 'bi bi-play-circle';


  songs = [{ title: "Astronaut In The Ocean", genre: "Pop", singer: "Masked Wolf", cover:"../../../assets/astronaut.jpg", path: "../../../assets/astronaut.mp3", coverFlag: true, rating: 4, isPlaying: false },
  { title: "Despacito", genre: "Latin Pop", singer: "Louis Fonsi/ Yankee", cover: "../../../assets/despacito.jpeg", path: "../../../assets/despacito.mp3", coverFlag: true, rating: 4, isPlaying: false },
  { title: "Memba for Aisha", genre: "EDM", singer: "Evan Giia", cover: "../../../assets/memba.jpeg" , path: "../../../assets/memba.mp3", coverFlag: true, rating: 4, isPlaying: false },
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  changeState(s: any, audio: any){
    if(s.isPlaying){
      audio.pause();
    }
    else{
      audio.play();
    }
    s.isPlaying = !s.isPlaying;
    console.log()
  }


}
