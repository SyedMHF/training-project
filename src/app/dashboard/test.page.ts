import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

  @Component({
  selector:'test',
  templateUrl: './test.page.html',
  })
  export class TestPage implements OnChanges, OnInit, DoCheck, OnDestroy{
    ngOnChanges(changes: SimpleChanges): void {
    }

    ngOnInit(): void {
    }

    ngDoCheck(): void {
    }

    ngOnDestroy(): void {
    }

    constructor(){
  }
}
