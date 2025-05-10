import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';


import { 
  UploadOutline, 
  LoadingOutline, 
  RotateLeftOutline,
  RotateRightOutline, 
  SwapOutline, 
  ReloadOutline
} from '@ant-design/icons-angular/icons';

import { AppComponent } from './app.component';
import { CustomImageCropperComponent } from './custom-image-cropper-component/custom-image-cropper-component.component';

const icons = [
  UploadOutline, 
  LoadingOutline, 
  RotateLeftOutline,
  RotateRightOutline, 
  SwapOutline, 
  ReloadOutline
];

@NgModule({
  declarations: [
    AppComponent,
    CustomImageCropperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ImageCropperModule,
    NzButtonModule,
    NzUploadModule,
    NzModalModule,
    NzMessageModule,
    NzSliderModule,
    NzCardModule,
    NzIconModule.forRoot(icons),
    NzSpinModule,
    NzDividerModule,
    NzGridModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }