import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent {

  personName = "bill gates"
  currentNumber = ''

  changeName() {
    this.personName = "Steve Jobs"
  }

  onKeyup(myEventObject) {
    // console.log('onKeyup()')
    // console.log(myEventObject)
    this.personName = myEventObject.target.value
  }

  showAlert() {
    alert('hello user!!!')
  }

  onButtonClick(number) {
    this.currentNumber += number
  }

}
