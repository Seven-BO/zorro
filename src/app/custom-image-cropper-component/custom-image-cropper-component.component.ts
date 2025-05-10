import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ImageCroppedEvent,
  ImageCropperComponent,
  LoadedImage,
} from 'ngx-image-cropper';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-custom-image-cropper',
  templateUrl: './custom-image-cropper-component.component.html',
  styleUrls: ['./custom-image-cropper-component.component.scss'],
})
export class CustomImageCropperComponent implements OnInit {
  @ViewChild(ImageCropperComponent) imageCropper!: ImageCropperComponent;

  @Output() croppedImage = new EventEmitter<string>();

  imageChangedEvent: any = '';
  croppedImageResult: any = '';
  showCropper = false;
  isVisible = false;
  loading = false;
  rotateValue = 0;
  scaleValue = 1;
  flipHValue = 1;
  flipVValue = 1;

  fileList: NzUploadFile[] = [];

  constructor(private message: NzMessageService) {}

  ngOnInit(): void {}

  beforeUpload = (file: NzUploadFile): boolean => {
    const isImage = file.type ? file.type.startsWith('image/') : false;
    if (!isImage) {
      this.message.error('Solo se permiten cargar imágenes');
      return false;
    }

    const isLt2M = file.size ? file.size / 1024 / 1024 < 2 : false;
    if (!isLt2M) {
      this.message.error('La imagen debe ser menor a 2MB');
      return false;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.fileList = [file];
      this.fileChangeEvent({ target: { files: [file] } });
      this.isVisible = true;
    };
    reader.readAsDataURL(file as any);

    return false;
  };

  fileChangeEvent(event: any): void {
    this.loading = true;
    setTimeout(() => {
      this.imageChangedEvent = event;
    }, 100);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImageResult = event.base64;
  }

  imageLoaded(image: LoadedImage) {
    this.showCropper = true;
    this.loading = false;
  }

  cropperReady() {
  }

  loadImageFailed() {
    this.message.error('Error al cargar la imagen');
    this.loading = false;
  }

  rotateLeft() {
    this.rotateValue -= 90;
  }

  rotateRight() {
    this.rotateValue += 90;
  }

  flipHorizontal() {
    this.flipHValue *= -1;
  }

  flipVertical() {
    this.flipVValue *= -1;
  }

  resetImage() {
    this.rotateValue = 0;
    this.scaleValue = 1;
    this.flipHValue = 1;
    this.flipVValue = 1;
  }

  handleOk(): void {
    this.croppedImage.emit(this.croppedImageResult);
    this.handleCancel();
  }

  handleCancel(): void {
    this.isVisible = false;
    this.imageChangedEvent = null;
    this.croppedImageResult = '';
    this.fileList = [];
    this.rotateValue = 0;
    this.scaleValue = 1;
    this.flipHValue = 1;
    this.flipVValue = 1;
  }

  onScaleChange(value: number): void {
    this.scaleValue = value;
  }
  get currentTransform() {
    return {
      scale: this.scaleValue,
      rotate: this.rotateValue,
      flipH: this.flipHValue === -1,
      flipV: this.flipVValue === -1,
    };
  }
}
