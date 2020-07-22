const name  = document.getElementById('name')
const password =  document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages = []
    if(name.value === '' || name.value == null) {
        messages.push('name is required')
    }
    if(password.value === '' || password.value == null) {
        messages.push('password is required')
    }
    if(password.value.length <= 6 && password.value != '') {
        messages.push('password must be longer than 6 charackter')
    }
    if(password.value.length >= 20) {
        messages.push('password must be longer than 20 charackter')
    }
    if(password.value === 'password') {
        messages.push('password can not me password')
    }
    if(messages.length > 0 ) {
        e.preventDefault()
        errorElement.innerText = messages.join('  /  ')
    }
})