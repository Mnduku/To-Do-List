function taskinfo(a,b,c,d,e,f,g){
    this.name = a
    this.desc = b
    this.date = c
    this.due = d
    this.priority = e
    this.goals = f
    this.completion =  g
    console.log("sinjfjnf")
    return this
}
function toggleadd(){
    let b1 =  document.querySelector(".addproj")
    let cname =  document.querySelector(".cname")
    b1.classList.toggle("invisible")
    cname.classList.toggle("visible")
}
function addproject(){
    console.log("checking")
    let a =  document.querySelector(".projectlist")
    let b = document.createElement("div")
    let c = document.querySelector('#projname')
    b.classList.toggle('project')
    b.textContent = c.value
    c.value = ""
    a.appendChild(b)
    return b.textContent
}

function project(name){
    this.name = name
    return this
}

function storageaval(type) {
    return true
}

function createstorage(a){
    localStorage.setItem("storage", JSON.stringify(a))
}

function loadstorage(){
    let oldsave = JSON.parse(localStorage.getItem("storage"))
    let a =  document.querySelector(".projectlist")
    for(let i = 0; i < oldsave.length; i++){
        console.log(oldsave.length)
        let b = document.createElement("div")
        b.classList.toggle('project')
        b.textContent = oldsave[i].name
        a.appendChild(b)
    }
    return oldsave

}
function checkstorage(storage){
    if(storageaval()){
        if (!localStorage.getItem("storage")) {
            createstorage(storage.projects);
        } 
        else{
        storage.projects = loadstorage()
        }
    }
}

function addtask(){
    let x = document.createElement('div')
    x.classList.toggle('task')
    let y = document.getElementsByClassName('tasklist')
    y.appendChild(x)
}

function optionscreen(){
    addtask()
}
/*
functionloadr(){
    let div = document.querySelector(".right")
}
functionloadp(){
    let div = document.querySelector(".right")
    
}
functionloads(){
    let div = document.querySelector(".right")
    
}
functionloada(){
    let div = document.querySelector(".right")
    
}
*/

export{taskinfo, addproject, toggleadd, project, addtask, storageaval, createstorage, loadstorage, checkstorage,
optionscreen}