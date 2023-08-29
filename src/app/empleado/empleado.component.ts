import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  nombre = 'Febe Martinez';
  apellido='Perez';
  edad:number = 15;
  empresa = 'Bac';
  documento = 'Otro';
  telefono = 'Otro';
  color = 'Rojo';
  genero = 'Femenino';
  estatura:number = 10;
  carrera='Ingenieria';
  correo='febemina@gmail.com'

  seleccion ="";


color_boton_property = "background-color: blue; color: white;";
mensaje='';

lanzar_mensaje(){
 // this.mensaje='Hola a todos';
  //alert(this.mensaje)
  if(this.color_boton_property=="background-color: blue; color: white;")
  {
  this.color_boton_property="background-color: red; color: white;";
  }else{
    this.color_boton_property="background-color: blue; color: white;";
  } 
}


estado_checkbox: boolean = true;

habilitar_input_property = true;
  usuario_registrado_porperty = false;
  habilitar_color_property= true;
  habilitar_estatura_property=true;
  habilitar_genero_property= true;
  texto_registro = 'No hay nadie registrado';
  
  genero_registrado_porperty = false;
  genero_registrado = 'Femenino';

  texto_input_u = 'Inhabilitado';
  texto_input_d = 'Inhabilitado';
  texto_input_t = 'Inhabilitado';



getEdad(){
  return this.edad;
}

cambiar_registro(){
  this.usuario_registrado_porperty=!this.usuario_registrado_porperty;
}

set_habilitar_input_color(){
  this.texto_input_u = 'Habilitado';
  this.habilitar_color_property= false;
}
set_habilitar_input_estatura(){
this.texto_input_d = 'Habilitado';
this.habilitar_estatura_property=false;
}

set_habilitar_input_genero(){
this.texto_input_t = 'Habilitado';
this.habilitar_genero_property= false;
}
set_usuario_registrado(event:Event){
  //this.texto_registro = 'El usuario se acaba de registrar';
  //this.habilitar_input_property = false;
  //console.log(event.target);
  if((<HTMLInputElement>event.target).value=='si'){
  this.texto_registro = 'El usuario se acaba de registrar';
}else{
  this.texto_registro = 'No hay nadie registrado';
  }
}

set_genero_registrado(event:Event){
  //this.texto_registro = 'El usuario se acaba de registrar';
  //this.habilitar_input_property = false;
  //console.log(event.target);
  if((<HTMLInputElement>event.target).value=='si'){
  this.genero_registrado = 'Femenino';
}else{
  this.genero_registrado = 'Masculino';
  }
}

cambiar_empresa(event:Event){
this.empresa=(<HTMLInputElement>event.target).value;
}



set_empresa(event:Event){
  this.empresa=(<HTMLInputElement>event.target).value;
}



}




