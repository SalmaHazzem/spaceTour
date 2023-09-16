let planets=document.querySelectorAll('.opt');
let planetname=document.querySelector('.planetName');
let distance =document.querySelector('.price');
let month =document.querySelector('.month');
let planetimg=document.querySelector('#planetimg');
let planetNum=document.querySelector('.planetNum');



planets.forEach(e => {
    e.addEventListener('click',function(){
        planetname.innerHTML=e.innerHTML;
        switch(e.innerHTML){
            case 'moon':
           distance.innerHTML='700 MIL.KM';
            month.innerHTML='7 month';
            planetimg.setAttribute('src','imgs\/mining-moon-nasa.jpeg');   
            planetNum.innerHTML='01';
            break;
           case 'mars':
            distance.innerHTML='225 MIL.KM';
            month.innerHTML='10 month';
            planetimg.setAttribute('src','imgs\/marsPlanet.jpg');   
            planetNum.innerHTML='02';
            break;
           case 'europa':
            distance.innerHTML='500 MIL.KM';
            month.innerHTML='11 month';
            planetimg.setAttribute('src','imgs\/europa.jpg');   
            planetNum.innerHTML='03';
            break;
           case 'titan':
            distance.innerHTML='100 MIL.KM';
            month.innerHTML='9 month';
            planetimg.setAttribute('src','imgs\/titan.jpg');   
            planetNum.innerHTML='04';
            break;    
        }
    })
})