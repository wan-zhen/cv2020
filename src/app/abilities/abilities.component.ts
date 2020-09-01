import { chartData } from './../@core/model/chart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  options: any;
  constructor() { }

  ngOnInit(): void {
    this.options = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',

          data: [chartData],

          top: '1%',
          left: '5%',
          bottom: '5%',
          right: '5%',

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 16
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          initialTreeDepth : 5,
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    };

  }
}
