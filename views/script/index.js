const {ipcRenderer} = require("electron")
const block = document.getElementById("block")

document.getElementById("open").onclick = ()=>{

    ipcRenderer.send("openFile", "Hello World!")
 
}

ipcRenderer.on("hand", (event, args)=>{
    document.getElementById("code").value = args;
    document.getElementById("view").srcdoc  = args;
    
})

ipcRenderer.on("prg", (event, args)=>{
    if (args=="show"){
        block.style.zIndex="450"
    } else{
        block.style.zIndex="-1"
    }
})

document.getElementById("publish").onclick = ()=>{
ipcRenderer.send("publish",document.getElementById("view").srcdoc );

}



let change  = function(){
document.getElementById("view").srcdoc = document.getElementById("code").value
    } 
    