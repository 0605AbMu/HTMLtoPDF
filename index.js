const {BrowserWindow, app, dialog, ipcMain} = require("electron")
const child = require("child_process")
const path = require("path");
const fs = require("fs")
const ipc = ipcMain;
const pdf = require("pdf-creator-node");

const createWindow = ()=>{
let windows = new BrowserWindow({
width: 850,
height: 650,
minHeight: 650,
minWidth: 850,
darkTheme: true,
 zoomToPageWidth: false,
 backgroundColor: "#222",
 autoHideMenuBar: true,
 titleBarStyle: "hidden" ,
title: "HTML to PDF demo",
icon: "ico.png",

 webPreferences:{
   nodeIntegration:true,
   contextIsolation: false,
   enableRemoteModule: true,
   v8CacheOptions:"code",

    
  }


})

windows.removeMenu()

windows.loadFile("views/index.html")


}


app.whenReady().then(() => {
    createWindow()
  })
let currFile;
  ipc.on("openFile", (event,data)=>{
    event.reply("prg", "show"); 
dialog.showOpenDialog({ properties: [ "openFile"], title:"HTML to PDF", filters: [ {name:"HTML fayl", extensions:["html", "htm"] }]


}).then(x=>{
  
if(!x.canceled ){

  fs.readFile(x.filePaths[0], {encoding: "utf8"}, (err, data)=>{

if (err){ dialog.showErrorBox("Xatolik!", "Bu faylni o`qib bo`lmadi");event.reply("prg", "hide"); currFile = undefined; return;}
event.reply("hand", data);
currFile = x.filePaths[0] 
event.reply("prg", "hide");

  })
} else{ 

  
}

})

  })




  ipc.on("publish", (event, data)=>{

    event.reply("prg", "show");

    dialog.showSaveDialog({buttonLabel:"saqlash", title:"HTML to PDF", filters:[{extensions:["pdf"], name:"PDF"} ]}).then((x)=>{
      
      if (!x.canceled){

pdf.create({html:data, data:{users:{}}, path:x.filePath+".pdf"}, {format:"A4"})
.then(x=>{
dialog.showMessageBox({title:"Muvoffaqiyatli", type:"info", detail: x.filename})
event.reply("prg", "hide");
})

.catch(err=>{
dialog.showErrorBox("Xatolik", err)
event.reply("prg", "hide");
})


       } else event.reply("prg", "hide");
    })
    
    
  })