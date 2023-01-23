import { Component, OnInit } from '@angular/core';
import {
  ButtonsConfig, ButtonsStrategy, AdvancedLayout, GalleryService, Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE,
   KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, ButtonEvent,  ButtonType, PlainGalleryConfig,
   PlainGalleryStrategy,} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public GalleryImage: Image[] = [
    new Image(
      1,
      { //modal
        img: '../../assets/images/media/8.jpg',
        title: '',
      }
    ),
    new Image(
      2,
      { //modal
        img: '../../assets/images/media/10.jpg',
        title: '',
      }
    ),
    new Image(
      3,
      { //modal
        img: '../../assets/images/media/11.jpg',
        title: '',
      }
    ),
    new Image(
      4,
      { //modal
        img: '../../assets/images/media/12.jpg',
        title: '',
      }
    ),
    new Image(
      5,
      { //modal
        img: '../../assets/images/media/13.jpg',
        title: '',
      }
    ),
    new Image(
      6,
      { //modal
        img: '../../assets/images/media/14.jpg',
        title: '',
      }
    ) ,
    new Image(
      7,
      { //modal
        img: '../../assets/images/media/14.jpg',
        title: '',
      }
    ),
    new Image(
      8,
      { //modal
        img: '../../assets/images/media/16.jpg',
        title: '',
      }
    ),
    new Image(
      9,
      { //modal
        img: '../../assets/images/media/17.jpg',
        title: '',
      }
    ),
    new Image(
      10,
      { //modal
        img: '../../assets/images/media/18.jpg',
        title: '',
      }
    ),
    new Image(
      11,
      { //modal
        img: '../../assets/images/media/19.jpg',
        title: '',
      }
    ),
    new Image(
      12,
      { //modal
        img: '../../assets/images/media/20.jpg',
        title: '',
      }
    ) ,
  ]

  profile:any;
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  
  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  }

  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };

  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };

  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };
  
  buttonsConfigCustom: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      KS_DEFAULT_BTN_FULL_SCREEN,
      KS_DEFAULT_BTN_DELETE,
      KS_DEFAULT_BTN_EXTURL,
      KS_DEFAULT_BTN_DOWNLOAD,
      KS_DEFAULT_BTN_CLOSE
    ]
  };

  
  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }
  }

  addRandomImage() {
    const imageToCopy: Image = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage: Image = new Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.GalleryImage = [...this.GalleryImage, newImage];
  }

}
