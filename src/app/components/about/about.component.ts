import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nombre:String="Juan Alberto Barria";
  titulo:String="Full Stack developer Jr"
  constructor() { }

  ngOnInit(): void {
  }

}
