const input = document.getElementById("chat-input")

const messages = document.getElementById("chat-messages")

const API_KEY = "YOUR_OPENAI_API_KEY"

input.addEventListener("keydown", async function(e){

if(e.key==="Enter"){

let text=input.value

messages.innerHTML += "<div>> "+text+"</div>"

const response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{

"Content-Type":"application/json",

"Authorization":"Bearer "+API_KEY

},

body:JSON.stringify({

model:"gpt-4.1-mini",

messages:[{role:"user",content:text}]

})

})

const data = await response.json()

let reply = data.choices[0].message.content

messages.innerHTML += "<div>"+reply+"</div>"

input.value=""

}

})