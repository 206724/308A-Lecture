//menu data structure

let menulinks =[
    {text:'about',href:'/about'},
    {text:'catalog',href:'/catalog'},
    {text:'orders', href:'/orders'},
    {text:'account',href:'/account'},
];



let mainEl =document.getElementsByTagName ('main')
mainEl[0].style.backgroundColor='var(--main-bg)'
mainEl[0].innerHTML='<h1> DOM Manipulation</h1>'
mainEl[0].classList.add('flex-ctr')

//Part 2 :Creating a Menu Bar

let topMenuEl = document.querySelector("top-menu")
topMenuEl.style.height='100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

menulinks.forEach(menulinks =>{
    let newelment=document.createElement("a")
    newelment.textContent=menulinks.text;
    newelment.href=menulinks.href
    topMenuEl.appendChild(newelment)

})


