import { Component, OnInit } from '@angular/core';
import {TimelineService} from '../../../services/timeline.service';
import {Timeline} from '../../../models/timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timelines: Timeline;

  error: string;
  youtube: string;
  facebook: string;
  p: Number = 1;
  count: Number = 4;

  constructor(public timelineService: TimelineService) {
    
   }

  ngOnInit() {

    this.timelineService.getTimelines().subscribe(
      (data: Timeline) => this.timelines = data,
      error => this.error = error
    );

  }


}
