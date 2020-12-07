import { Component, OnInit } from '@angular/core';

declare var Hls: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vdostream';

  ngOnInit(): void {
    const hls = new Hls();
    hls.loadSource("http://192.168.10.168/0.m3u8");
    hls.attachMedia(document.getElementById("video"));
  }
}
