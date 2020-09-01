import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-btn',
  templateUrl: './arrow-btn.component.html',
  styleUrls: ['./arrow-btn.component.scss']
})
export class ArrowBtnComponent implements OnInit {
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    window.scrollTo({
      top: window.innerHeight * this.index,
      behavior: 'smooth'
    });
  }
}
