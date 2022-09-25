import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.scss']
})
export class MyChildComponent implements OnInit {
  @Input() value: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
