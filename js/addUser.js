 
let emailExists = async (email)=>{
    let uri = 'https://mybrand-backend-production-309f.up.railway.app/api/users?email='
    uri += `${email}`
    const res = await fetch(uri)
    const user = await res.json();
    console.log(res)
    console.log(user)
 
    if(user.length === 0){
        return false
    }
    return true
}

 
const form = document.getElementById('create_user');
const createUser = async (e) => {
    e.preventDefault();
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(form.email.value.match(validRegex)){
        let emExists = await emailExists(form.email.value)
        console.log( 'Hey', emExists)
        if (emExists){
            
            error_message.innerText = 'Email already exists, log in'
        }else{
            const doc = {
                
                email: form.email.value,
                password: form.password.value,
                
            }
            await fetch('https://mybrand-backend-production-309f.up.railway.app/api/users/create', {
                method: 'POST',
                body: JSON.stringify(doc),
                headers: { 'Content-Type': 'application/json' }
            });
            // user_details = {name: form.name.value,email: form.email.value, password: form.password.value, role: 'user'}
            user_details = {email: form.email.value, password: form.password.value}

            localStorage.setItem('user',JSON.stringify(user_details))
            window.location.replace('dashboard.html');
        
        }
    }else{
        alert("invalid email")
        // text.style.marginBottom = '0.5rem'
        // error_message.innerText = 'Invalid Email'
    }
}
form.addEventListener('submit', createUser);
 
