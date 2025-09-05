document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault()
    const phoneNumber = document.getElementById('phone-value').value;
    console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-value').value;
    console.log(pinNumber);
})