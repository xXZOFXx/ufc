import { Component, OnInit, HostBinding } from '@angular/core';

import { Form } from '../models/Form';

import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @HostBinding('class') classes = 'formulario';

  form: Form  = {

 id_comentarios: 0,
    nombre:'',
    edad:'',
    cat_doc:'',
    cat_pais:'',
    cat_estado:'',
    cat_prefe_pago:'',
    escuela:'',
    cat_tipo:'',
    correo:'',
    create_at: new Date()

  };
  //form: Form  = {

  //  id_comentarios: 0,
  //  nombre:'',
  //  telefono:'',
  //  correo:'',
  //  comentarios:'',
  //  create_at: new Date()

  //};



  constructor(private formularioService: FormularioService) { }




  ngOnInit() {
  }


  salvarNuevoForm(){
      delete this.form.create_at;
      delete this.form.id_comentarios;

    this.formularioService.salvarForm(this.form)
      .subscribe(
        res => {

          console.log(res);
          alert("Formulario Enviado, \n Nuestro equipo se pondra en contacto en breve");
          window.location.replace("https://theroofempresarial.com.mx/");
        },

        err => console.error(err)

      )
  }


}
