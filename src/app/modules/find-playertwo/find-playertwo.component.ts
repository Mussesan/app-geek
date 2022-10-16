import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-playertwo',
  templateUrl: './find-playertwo.component.html',
  styleUrls: ['./find-playertwo.component.css']
})
export class FindPlayertwoComponent implements OnInit {

  constructor() {}


  ngOnInit(): void {
  }



  onLoad(){
    var menuButton = document.getElementById("open-menu");
    return menuButton
  }
}
