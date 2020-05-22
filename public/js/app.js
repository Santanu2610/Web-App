const weatherForm = document.querySelector('form')
const address = document.querySelector('input')
const messageone = document.querySelector('#msg-1')
const messagetwo = document.querySelector('#msg-2')



weatherForm.addEventListener('submit',(e)=>{
    
    console.log('testing')
    e.preventDefault()
    const location = address.value
    messageone.textContent ='loading ..'
    messagetwo.textContent =''
    
    fetch('/weather?address='+location).then((response)=> {
    response.json().then((data)=>{ 
    
      if(data.error)
      {
        messageone.textContent =data.error
          console.log(data.error)
       }
       else
        {
            messageone.textContent=data.location
            messagetwo.textContent=data.forecast 
           
          console.log(data.location)
         console.log(data.forecast)
        }
    })
})
})
