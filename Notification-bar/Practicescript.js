let toastBox = document.getElementById('toastBox');
let succesMsg = "<i class='fa-solid fa-circle-check'></i> Data Sent Succesefully";
let errorMsg = "<i class='fa-solid fa-circle-xmark'></i> error in Transffering data";
let invalidMsg = "<i class='fa-solid fa-circle-exclamtion'></i> invalid data,Try again";

function showToast (msg){
    let toast = document.createElement('div');
     toast.classList.add('toast');
     toastBox.appendChild(toast);
     toast.innerHTML = msg;
     if(msg.includes('Succefully')){
        toast.classList.add('sucess');
     }

     if(msg.includes('error')){
        toast.classList.add('error');
     }

     if(msg.includes('invalid')){
        toast.classList.add('invalid');
     }

     setTimeout(()=>{
        toast.remove()
     },5000);
}