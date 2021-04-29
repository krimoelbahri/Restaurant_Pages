 
 const restaurantName=function(){
    let name = document.createElement('h1');
    name.classList.add("restaurant-name")
    name.innerHTML = "MOM's Cooking";
    return name;
 }
 const homeButton = function(){
    let homeButton = document.createElement("button");
    homeButton.classList.add("nav-button");
    homeButton.innerHTML = "HOME";
    return homeButton;
 }
 const menuButton = function(){
    let menuButton = document.createElement("button");
    menuButton.classList.add("nav-button");
    menuButton.innerHTML = "MENU";
    return menuButton;
 }
 const contactButton = function(){
    let contactButton = document.createElement("button");
    contactButton.classList.add("nav-button");
    contactButton.innerHTML = "CONTACT US";
    return contactButton;
 }
 const navBar= function(){
     let navBar = document.createElement("nav");
     navBar.classList.add("nav-bar");
     navBar.appendChild(homeButton());
     navBar.appendChild(menuButton());
     navBar.appendChild(contactButton());
     return navBar;
 }
 const createHeader=function(){
    let header = document.createElement("header");
    header.classList.add("header");
    header.appendChild(restaurantName());
    header.appendChild(navBar());
    return header;
 }
 const createMain = function(){
    let main = document.createElement("main");
    main.classList.add("main");
    return main;
 }
 const createFooter = function(){
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = "<p>Created By <a href=https://github.com/krimoelbahri> Elbahri </a></p>"
    return footer;
 }
    
 const initializeWebsite = function(){
    let container = document.getElementById('container');

     container.appendChild(createHeader());
     container.appendChild(createMain());
     container.appendChild(createFooter());
     
 }
 export{initializeWebsite}