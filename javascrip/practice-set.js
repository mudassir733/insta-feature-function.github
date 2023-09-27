       let love = document.querySelector('#love');
       let like = document.querySelector('#liked');
       let box = document.querySelector('#box');
       let hrt = document.querySelector('#heart');
     
       if(love){
        love.addEventListener('click', function(){
        love.style.color = 'red'
        like.style.display = 'block'
       })
        
       }

       box.addEventListener('dblclick', function(){
        hrt.style.transform = 'translate(-50%, -50%) scale(1.5)'
        hrt.style.opacity = 0.8
        love.style.color = 'red'
        setTimeout(() => {
            like.style.display = 'block'
        }, 400);
     
        
        setTimeout(() => {
            hrt.style.opacity = 0
        }, 2000);
        setTimeout(() => {
            hrt.style.transform = 'translate(-50%, -50%) scale(0)'
        }, 3000);

       })