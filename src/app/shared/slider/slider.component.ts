import { Component, OnInit } from '@angular/core';
import {SliderService} from '../../services/slider.service';
import {Slider} from '../../models/slider';
import { CommonModule, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  imports: [
    CommonModule, NgFor, NgStyle
  ],
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders!: Slider[]|null;

  error!: string;

  constructor(public sliderService: SliderService) {

   }

  ngOnInit() {

    this.sliderService.getSliders().subscribe(
      (res:any) => this.sliders = res.sliders.data,
      error => this.error = error
      );

  }

}
