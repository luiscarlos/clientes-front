import { Component, OnInit } from '@angular/core';
import {Cliente } from '../cliente'
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit{

  cliente: any;

  constructor(private service: ClientesService){
    this.cliente = new Cliente();
  }

  ngOnInit(): void {

  }


  onSubmit() {
    this.service
      .salvar(this.cliente)
      .subscribe(response =>{
        console.log(response);
      })
    }
}
