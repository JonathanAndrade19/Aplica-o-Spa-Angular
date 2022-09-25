import { Component, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent {
  value = this._value;

  constructor(private ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      setInterval(() => this.value = this._value, 1)
    })
  }

  private get _value(): number {
    return Math.floor(Math.random() * 10)
  }
}


// export class ChangeDetectionComponent implements DoCheck {
//   value = this._value;
//   constructor() { }

//   ngDoCheck(): void {
//     throw new Error('Method not implemented.');
//   }

//   private get _value(): number {
//     return Math.floor(Math.random() * 10)
//   }
// }
