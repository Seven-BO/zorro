import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Editor de Imágenes con Ng-Zorro';
  croppedImage: string = '';

  constructor(private message: NzMessageService) {}

  onCroppedImage(image: string): void {
    this.croppedImage = image;
  }
}