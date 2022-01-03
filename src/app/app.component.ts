import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  active = 'preview';
  myControl = new FormControl();
  options: string[] = ["Raghav's Template", 'Two', 'Three'];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  copyToClipboard() {
    this.playAnimation();
  }

  playAnimation() {
    var copyButton = document.getElementById(`copy-button-id`);
    var copyAnimation = document.getElementById(`copy-animation-id`);

    copyButton?.classList.add('jello-horizontal');
    copyAnimation?.classList.add('copied-animation');
    setTimeout(() => copyButton?.classList.remove('jello-horizontal'), 1000);
    setTimeout(() => copyAnimation?.classList.remove('copied-animation'), 1900);
  }
}
