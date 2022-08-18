




document.getElementById('login_btn').addEventListener('click', function(){

const email_obj=document.getElementById('email')
const pass_obj=document.getElementById('password')

const email_data=email_obj.value
const pass_data=pass_obj.value
console.log(email_data,pass_data)

if(email_data==='hasan@gmail.com' && pass_data==='secret'){
    window.location.href='Bank_page.html'
}




})