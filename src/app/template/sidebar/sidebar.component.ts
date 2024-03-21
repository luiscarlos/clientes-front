import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';


 import jQuery from 'jquery'



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {}



