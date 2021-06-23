 import{home}from './home';
 import{menu}from './menu';
 import{contact}from './contact';

 const render= function(e){
   
    if(e.srcElement.id == "home-button"){ 
      home();
      return;
   }
    if(e.srcElement.id == "menu-button"){
      menu();
      return; 
   } 
    if(e.srcElement.id == "contact-button"){ 
      contact();
      return; 
   }
 }

 const loadHeader=function(){
   const restaurantName=function(){
      let name = document.createElement('h1');
      name.classList.add("restaurant-name")
      name.innerHTML = "<span style='color:green;'>The </span> <span style='color:red;'>Algerian </span> <span style='color:green;'>Corner</span>  ";
      return name;
   }
   const navBar= function(){
      const homeButton = function(){
         let homeButton = document.createElement("button");
         homeButton.classList.add("nav-button");
         homeButton.setAttribute("id" ,"home-button");
         homeButton.innerHTML = "HOME";
         homeButton.addEventListener('click',render);
         return homeButton;
      }
      const menuButton = function(){
         let menuButton = document.createElement("button");
         menuButton.classList.add("nav-button");
         menuButton.setAttribute("id","menu-button");
         menuButton.innerHTML = "MENU";
         menuButton.addEventListener('click',render)
         return menuButton;
      }
      const contactButton = function(){
         let contactButton = document.createElement("button");
         contactButton.classList.add("nav-button");
         contactButton.setAttribute("id","contact-button");
         contactButton.innerHTML = "CONTACT US";
         contactButton.addEventListener('click',render)
         return contactButton;
      }
   
        let navBar = document.createElement("nav");
        navBar.classList.add("nav-bar");
        navBar.appendChild(homeButton());
        navBar.appendChild(menuButton());
        navBar.appendChild(contactButton());
        return navBar;
   }

    let header = document.createElement("header");
    header.classList.add("header");
    header.appendChild(restaurantName());
    header.appendChild(navBar());
    return header;
 }
 const loadMain = function(){
   let main = document.createElement("main");
   main.classList.add("main");
   return main;
 }
 const loadFooter = function(){
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = "    <p>Copyright © Created by <a href=https://github.com/krimoelbahri> Elbahri </a>. TOP project</p>"
    return footer;
 }
    
 const loadWebsite = function(){
    let container = document.getElementById('container');
     container.appendChild(loadHeader());
     container.appendChild(loadMain());
     container.appendChild(loadFooter());
   home()
 }
 export{loadWebsite}