const contact=function(){
    let contact= document.createElement('div');
    contact.classList.add('contact');
    contact.setAttribute("id" ,"contact");
    contact.innerHTML="<h3>if you want to contact us </h3>";
    let main =document.querySelector('main');
    main.textContent="";
    main.appendChild(contact);
}
export{contact}