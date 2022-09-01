import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `<div class="sample">
    User component from source<strong>Shaikh</strong>
  </div>`,
  styles: [
    `
      .sample {
        background-color: yellow;
      }
    `,
    `
      strong {
        background-color: blue;
        color:red;
      }
    `,
  ],
})
export class SampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
