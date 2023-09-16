let techs=document.querySelectorAll('.ss');
let techName=document.querySelector('.crewTech');
let techImage =document.querySelector('#tech');
let crewNum =document.querySelector('.crewNum');

for(let i=0;i<techs.length;i++){
    techs[i].addEventListener('click',function(){
 
         switch(i){
             case 0:
                 techs.forEach(e=>{
                     e.style.backgroundColor='transparent';
                     e.style.color='white';
                 })
                 techs[i].style.backgroundColor='white';
                 techs[i].style.color='black';
                 techName.innerHTML='lanch vechicle';
                 crewNum.innerHTML='01';
                 techImage.setAttribute('src','imgs\/tech1.jpg');
                 break;
             case 1:
                 techs.forEach(e=>{
                     e.style.backgroundColor='transparent';
                     e.style.color='white';
                 })
                 techs[i].style.backgroundColor='white';
                 techs[i].style.color='black';
                 techName.innerHTML='space search';
                 crewNum.innerHTML='02';
                 techImage.setAttribute('src','imgs\/space-pic.jpg');
                 break;
             case 2:
                 techs.forEach(e=>{
                     e.style.backgroundColor='transparent';
                     e.style.color='white';
                 })
                 techs[i].style.backgroundColor='white';
                 techs [i].style.color='black';
                 techName.innerHTML='planets explore';
                 crewNum.innerHTML='03';
                 techImage.setAttribute('src','imgs\/titan.jpg');
                 break;    
             case 3:
                 techs.forEach(e=>{
                     e.style.backgroundColor='transparent';
                     e.style.color='white';
                 })
                 techs[i].style.backgroundColor='white';
                 techs[i].style.color='black';
                 techName.innerHTML='moon search';
                 crewNum.innerHTML='04';
                 techImage.setAttribute('src','imgs\/mining-moon-nasa.jpeg');
                 break;        
          }
     })
 }