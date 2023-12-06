import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <canvas #qrcode width="280" height="280"></canvas>
      <br>
      <textarea [(ngModel)]="text" cols="30" rows="10"></textarea>
      <br>
      <button (click)="renderQRCode()">render QRCode</button>
    </div>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit{
  title = 'QR-code-angular';
  text = 'https://www.baidu.com';

  @ViewChild('qrcode') qrcode!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    this.renderQRCode();
  }

  renderQRCode() {
    QRCode.toCanvas(this.qrcode.nativeElement, this.text, { errorCorrectionLevel: 'high'});
  }
}
