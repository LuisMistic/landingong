import { Component, OnInit } from '@angular/core';
import { ModalImgService } from 'src/app/landing/modal-img.service';



@Component({
  selector: 'app-img-quienes',
  templateUrl: './img-quienes.component.html',
  styleUrls: ['./img-quienes.component.css']
})
export class ImgQuienesComponent implements OnInit {

  active: boolean = false;

  constructor(private modalImgService: ModalImgService) { }

  ngOnInit(): void {
    this.modalImgService.getEvent().subscribe(() => {
      this.active = true;
    });
  };

  close(): void {
    this.active = false;
  }

}