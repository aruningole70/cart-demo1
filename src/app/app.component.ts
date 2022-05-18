import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ezst';
  isMenuOpen : boolean = false;
  constructor(){

  }
  openCloseMobileMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //  console.log(window.innerWidth);
  // //  this.isMenuOpen = !this.isMenuOpen;
  //  let element = document.getElementById("ifNotMobile");
  // //  element?.classList.add("display-header");
   
  // //  console.log(element?.classList.contains("display-header"));
   
  // }
}
