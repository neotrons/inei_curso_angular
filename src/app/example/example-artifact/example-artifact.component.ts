import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-example-artifact',
  templateUrl: './example-artifact.component.html',
  styleUrls: ['./example-artifact.component.scss']
})
export class ExampleArtifactComponent implements OnChanges, OnInit, OnDestroy {

  title = 'example';
  isValid = true;
  directives = ['ngIf', 'ngFor', 'ngSwitch', 'ng-template'];
  languages = [
    {
      name: "JavaScript"
    },
    {
      name: "Python"
    }
  ];

  constructor() {
    console.log(`life cycle: 1 constructor`);
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log(`life cycle: 2 (listen) ngOnChanges ${change}`);
  }

  ngOnInit(): void {
    console.log(`life cycle: 3 ngOnInit`);
    setTimeout(() => {
      this.isValid = false;
    }, 5000)
  }

  ngOnDestroy(): void {
    console.log(`life cycle: 4 ngOnDestroy`);
  }
}
