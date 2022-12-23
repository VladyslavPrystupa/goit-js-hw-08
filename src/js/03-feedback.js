const throttle = require('lodash.throttle');

// console.log(throttle)
const form = document.querySelector('.feedback-form')
const btn = document.querySelector('button')
const KEY = "feedback-form-state"
let data = {
    email: '',
    message: ''
}

const input = document.querySelector('.js-input')
const textarea = document.querySelector('.js-textarea')

const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
}

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    }   catch (error) {
    console.error("Get state error: ", error.message);
    }
}


form.addEventListener('input', onInput)

function onInput(evt) {
    evt.preventDefault();
    
    data = {
        email: evt.currentTarget.elements.email.value,
        message: evt.currentTarget.elements.message.value,
    }

    save(KEY, data)

}

if (!load(KEY)) {
    input.value = '',
    textarea.value = ''
} else {
    input.value = load(KEY).email
    textarea.value = load(KEY).message
}


form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    console.log(data)
    form.reset()
    localStorage.clear()
    
}





  


//  const resultData = localStorage.getItem(KEY)
//     const parseResult = JSON.parse(resultData)

//     if (!localStorage   ) {
//         return
//     } data.email  = parseResult.email
    
    
    // console.log(!localStorage.getItem(KEY))

// const resultData = localStorage.getItem(KEY)

// const parseResult = JSON.parse(resultData)
    
// console.log(parseResult.message)

