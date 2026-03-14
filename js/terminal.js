const input=document.getElementById("input")
const output=document.getElementById("output")

const commands={

help:"about projects contact clear",

about:"Cyberpunk portfolio",

projects:"AI App Cyber Tool",

contact:"email: you@email.com"

}

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let cmd=input.value

if(cmd==="clear"){

output.innerHTML=""

}

else if(commands[cmd]){

output.innerHTML+="<br>> "+cmd+"<br>"+commands[cmd]

}

else{

output.innerHTML+="<br>command not found"

}

input.value=""

}

})