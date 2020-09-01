import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu = ['Start', 'About Me', 'Skill Tree', 'Github'];
  nowIndex: number;
  nowPage: number;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.nowPage = this.getPage();
  }
  constructor() { }

  ngOnInit(): void {
    this.nowPage = this.getPage();
  }

  enter(index) {
    this.nowIndex = index;
  }

  out() {
    this.nowIndex = null;
  }

  getPage() {
    return Math.floor(scrollY / window.innerHeight);
  }

  toPage(i) {
    window.scrollTo({
      top: window.innerHeight * i,
      behavior: 'smooth'
    });
  }
}