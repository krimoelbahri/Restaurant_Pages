const home=function(){
    let home= document.createElement('div');
    home.classList.add('home');
    home.setAttribute("id" ,"home");
    home.innerHTML="<h4>If you are around and you are missing the taste of the algerian's delicious food</h4>"
                    + "<h4> This is the perfect corner for you</h4>"
    let main =document.querySelector('main')
    main.textContent="";
    main.appendChild(home);
}
export{home}