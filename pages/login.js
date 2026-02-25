let phone = document.getElementById('number');
let pin = document.getElementById('pin')
// let submit = document.getElementById('submit')
//  localStorage.setItem('phone','01770522886');
 localStorage.setItem('pin',1122)
let localPhone = localStorage.getItem('phone');
let localPin = localStorage.getItem('pin');
submit.onclick=(e)=>{
    e.preventDefault()

 localStorage.setItem('phone',phone);
 localStorage.setItem('pin',Number(pin))
}

console.log(localPhone, localPin);
if ((localPhone ==='01770522886' && localPin==='1122')) {
    // window.open('http://127.0.0.1:5500','_self')
}