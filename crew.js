let mypoints=document.querySelectorAll('.point');
let crewName=document.querySelector('.crewName');
let crewImage =document.querySelector('#staff');
let crewNum =document.querySelector('.crewNum');


for(let i=0;i<mypoints.length;i++){
   mypoints[i].addEventListener('click',function(){

        switch(i){
            case 0:
                mypoints.forEach(e=>{
                    e.style.backgroundColor='transparent';
                    e.style.color='white';
                })
                mypoints[i].style.backgroundColor='white';
                mypoints[i].style.color='black';
                crewName.innerHTML='Ahmed mohammed';
                crewNum.innerHTML='01';
                crewImage.setAttribute('src','imgs\/crew1.jpg');
                break;
            case 1:
                mypoints.forEach(e=>{
                    e.style.backgroundColor='transparent';
                    e.style.color='white';
                })
                mypoints[i].style.backgroundColor='white';
                mypoints[i].style.color='black';
                crewName.innerHTML='mohammed mahmoud';
                crewNum.innerHTML='02';
                crewImage.setAttribute('src','imgs\/crew2.jpg');
                break;
            case 2:
                mypoints.forEach(e=>{
                    e.style.backgroundColor='transparent';
                    e.style.color='white';
                })
                mypoints[i].style.backgroundColor='white';
                mypoints[i].style.color='black';
                crewName.innerHTML='abdalla ahmed';
                crewNum.innerHTML='03';
                crewImage.setAttribute('src','imgs\/crew3.jpg');
                break;    
            case 3:
                mypoints.forEach(e=>{
                    e.style.backgroundColor='transparent';
                    e.style.color='white';
                })
                mypoints[i].style.backgroundColor='white';
                mypoints[i].style.color='black';
                crewName.innerHTML='nour mahmoud';
                crewNum.innerHTML='04';
                crewImage.setAttribute('src','imgs\/crew4.jpg');
                break;        
         }
    })
}