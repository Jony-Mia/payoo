function validate(e){
    let phone = document.getElementById('phone').value;
    let pin = document.getElementById('pin').value;

    if(!(phone=== '' && pin==='')){
         if(phone==='01770522886' && pin ==='1122'){
         console.log('correct');
         window.open('http://127.0.0.1:5500','_self')

     }
     else{
        
          alert('Wrong Password, Try again')
      }
    }else{
        console.log('empty');
        
    }


//   let state=   phone === '01770522886' && pin ==='1122' ? 'Correct' :'Wrong Password, Try again';
//     console.log(state);
    

}