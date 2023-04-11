import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {
  TabStyle1 = 1;
  constructor() { }

  ngOnInit(): void {
  }
  public confirmAdd(){

    Swal.fire({
      icon: "success",
      title: "Proceso de cita exitoso",
      showConfirmButton: false,
      timer: 1500,
});

}
}
