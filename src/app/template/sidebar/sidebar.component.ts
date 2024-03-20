import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
 import jQuery from 'jquery'
import path from 'path';
 declare var $: any;




@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    $('#layoutSidenav_nav .sb-sidenav a.nav-link').each((index:any, element:any) => {
      if ($(element).attr('href') === path) {
          $(element).addClass("active");
      }
  });

  $("#sidebarToggle").on("click", function (event: { preventDefault: () => void; }) {
      $("body").toggleClass("sb-sidenav-toggled");
  });
  }

}
