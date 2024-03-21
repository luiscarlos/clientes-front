import { Component, OnInit } from '@angular/core';
import {Cliente } from '../cliente'
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit{


  cliente: Cliente;



  constructor(private service: ClientesService){
    this.cliente = service.getCliente();
  }


  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.cliente);
    }
}
