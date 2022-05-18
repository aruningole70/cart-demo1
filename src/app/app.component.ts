import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ezst';
  isMenuOpen : boolean = false;
  // banner1:any={}
  constructor(){

  }
  openCloseMobileMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  banner1= [
    {image:'assets/bottle1.png', name:'Acne Cream', details:'All Natural Ingredients', price:24.99},
    {image:'assets/bottle2.png', name:'Vitiligio Solution', details:'All Natural Ingredients', price:24.99},
    {image:'assets/bottle3.png', name:'Ezcema Cream', details:'All Natural Ingredients', price:24.99},
    {image:'assets/bottle.png', name:'Sunburn Ointment', details:'All Natural Ingredients', price:24.99}];
 banner2= [
      {image:'assets/bottle.png', name:'Psoriasis Cream', details:'All Natural Ingredients', price:24.99},
      {image:'assets/bottle3.png', name:'Ezcema Cream', details:'All Natural Ingredients', price:24.99},
      {image:'assets/bottle4.png', name:'Sunburn Ointment', details:'All Natural Ingredients', price:24.99},
      {image:'assets/Balm.png', name:'Vitiligio Balm', details:'All Natural Ingredients', price:24.99},
      {image:'assets/bottle2.png', name:'Vitiligio Solution', details:'All Natural Ingredients', price:24.99},
      {image:'assets/bottle1.png', name:'Acne Cream', details:'All Natural Ingredients', price:24.99},
      {image:'assets/cream.png', name:'Acne Cream', details:'All Natural Ingredients', price:24.99},
      {image:'assets/dropper.png', name:'Ezcema Oil', details:'All Natural Ingredients', price:24.99}];
   banner3= [
        {image:'assets/bottle.png', name:'Acne Cream', details:'All Natural Ingredients', price:24.99},
        {image:'assets/bottle3.png', name:'Vitiligio Solution', details:'All Natural Ingredients', price:24.99},
        {image:'assets/two-bottls.png', name:'Ezcema Cream', details:'All Natural Ingredients', price:24.99},
        {image:'assets/pink-cream.png', name:'Sunburn Ointment', details:'All Natural Ingredients', price:24.99}];
    
};
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //  console.log(window.innerWidth);
  // //  this.isMenuOpen = !this.isMenuOpen;
  //  let element = document.getElementById("ifNotMobile");
  // //  element?.classList.add("display-header");
   
  // //  console.log(element?.classList.contains("display-header"));
   
  // }

