import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HomeComponent } from "./home/home.component";
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { ClientesService } from './clientes.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, SidebarComponent, HomeComponent, ClientesFormComponent]
})
export class AppComponent {
  title = 'clientes-front';



}


