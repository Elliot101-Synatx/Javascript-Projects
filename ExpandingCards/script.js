const panel = document.querySelectorAll('.panel');

panel.forEach(panels => {
   panels.addEventListener('click',()=>{
      removeActiveClasslist();
    panels.classList.add('active');
   })
});

function  removeActiveClasslist(){
    panel.forEach(panels =>{
        panels.classList.remove('active')
    })
}