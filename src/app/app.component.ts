import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RaghavTemplateService } from 'src/services/raghav-template.service';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';

function copyToClip(str: any) {
  function listener(e: any) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  active = '';
  myControl = new FormControl();
  options: string[] = ["Raghav's Template", 'Two', 'Three'];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  @ViewChild('screen', { static: true }) screen: any;

  constructor(
    public raghavTemplateService: RaghavTemplateService,
    public captureService: NgxCaptureService
  ) {}

  ngOnInit(): void {
    this.raghavTemplateService.nextEmployees([
      {
        id: 1,
        name: 'Andres Arizala',
        imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
        message: `First Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Enim deleniti voluptates excepturi accusamus, recusandae eaque eligendi corrupti consequuntur nam
        minima odio quam commodi ex maiores architecto, impedit praesentium tempore consequatur!`,
      },
      {
        id: 2,
        name: 'Scott Allen',
        imgUrl: 'https://randomuser.me/api/portraits/men/31.jpg',
        message: `Second Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Enim deleniti voluptates excepturi accusamus, recusandae eaque eligendi corrupti consequuntur nam
        minima odio quam commodi ex maiores architecto, impedit praesentium tempore consequatur!`,
      },
    ]);
  }

  copyToClipboard() {
    this.playAnimation();
    const str: any = document.getElementById('foo')?.innerHTML;


    // this.captureService
    //   .getImage(this.screen.nativeElement, true)
    //   .pipe(
    //     tap((img) => {
    //       // console.log(img);
    //      const str1  =  `<img src="${img}" alt="" width=1220 height=1340 >`;
    //       copyToClip(str1);
    //     })
    //   )
    //   .subscribe();

    copyToClip(str);
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
