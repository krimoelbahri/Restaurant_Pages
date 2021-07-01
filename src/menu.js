 import couscous from './images/couscous.jpg'
 import rechta from './images/rechta.jpg'
 import tlitli from './images/tlitli.jpg'

 let menuList = [
     {
        name: 'Couscous',
        image: couscous,
        discription:"Numerous tiny, light, tender grains, ideally arranged to form a pyramid and served on a platter at the end of a meal - that is couscous, the national dish of Algeria and a must-have dish in any Algerian restaurant. "
        
     },
     {
        name:'Rechta',
        image:rechta,
        discription:"Rechta is a traditional Algerian dish consisting of thin and flat noodles and chicken sauce. The noodles are made with a combination of flour, salt, water, and ghee, while the sauce is made with chicken pieces, onions, garlic, oil, chickpeas, ras el hanout, cinnamon, turnips, potatoes, and zucchini."
        
     },
     {
        name:'Tli-Tli',
        image:tlitli,
        discription:"Tlitli is an Algerian dish made from small orzo pasta also called bird tongues. this dish can be prepared , in white sauce or red sauce. The preparation of the sauce is a very basic spicy North African recipe with tomato, onion, paprika, meat and chickpeas of course."
        
     }
 ];


const menu=function(){
    let main =document.querySelector('main');
    let menu= document.createElement('div');
    menu.classList.add('menu');
    menu.setAttribute("id" ,"menu");
    
    menuList.forEach((dish)=>{
        let dishContainer = document.createElement('div');
        dishContainer.classList.add('dishContainer');
        dishContainer.innerHTML=`
        <h2>${dish.name}</h2>
        <img src=${dish.image} alt="Chef">
        <p>${dish.discription}</p>
        `
        menu.appendChild(dishContainer);
    })

    
    main.textContent="";
    main.appendChild(menu);
}
export{menu}