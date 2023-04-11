import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.scss']
})
export class AdopcionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public confirmAdd(){

      Swal.fire({
        icon: "success",
        title: "Su proceso de adopción fue exitoso, espere indicaciones!",
        showConfirmButton: false,
        timer: 1500,
  });

  }
}
