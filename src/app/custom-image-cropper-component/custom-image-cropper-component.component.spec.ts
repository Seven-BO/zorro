import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomImageCropperComponentComponent } from './custom-image-cropper-component.component';

describe('CustomImageCropperComponentComponent', () => {
  let component: CustomImageCropperComponentComponent;
  let fixture: ComponentFixture<CustomImageCropperComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomImageCropperComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomImageCropperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
