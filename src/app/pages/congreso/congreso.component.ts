import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-congreso',
  templateUrl: './congreso.component.html',
  styleUrls: ['./congreso.component.css'],
  providers: [NgbCarouselConfig]
})
export class CongresoComponent implements OnInit {


  showNavigationArrows = false;
  showNavigationIndicators = false;
  paused = true;
  
  //slider
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1920/800`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree

    //config.interval = 10000;
    
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
    
   }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
