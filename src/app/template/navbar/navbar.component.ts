import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';


import jQuery from 'jquery';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    (function($) {
      "use strict";

      // Add active state to sidbar nav links
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this instanceof HTMLAnchorElement && this.href === path) {
              $(this).addClass("active");
         }
          });

      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);

}}
