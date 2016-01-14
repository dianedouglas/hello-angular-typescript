import {Component, View} from 'angular2/angular2';
@Component({
  selector: 'people'
})
@View({
  template: '<h1>hi</h1>'
})
export class ShowPeople {
  myName: string;
  constructor() {
    this.myName = "Alice";
  }
}
