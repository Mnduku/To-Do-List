let storage = {
    projects: []
}

let currentproject 
let projectindex = 0
let projectchanged = false
let projectlist = []

function expcp(){
    return currentproject
}
function expstor(){
    return storage
}
function exppi(){
    return projectindex
}
function exppc(){
    return projectchanged
}

function taskinfo(a,b,c,d,e,f,g){
    this.name = a
    this.desc = b
    this.date = c
    this.due = d
    this.priority = e
    this.favorites = f
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
    b.classList.toggle("selectedtab")
    addprojectlistener(b)
    projectlist.push({
        name: b.textContent,
        link: b})
    console.log(projectlist)
    projectindex = projectindex + 1
    untoggle()
    currentproject = b
    currentproject.classList.toggle("selectedtab")
    return b.textContent
}

function addprojectlistener(b){
    b.addEventListener('click', function(e){
    console.log("dsd")
    if(currentproject == b)return
    if(!projectlist) return
    untoggle()
    currentproject = b
    b.classList.toggle("selectedtab")
    showtasks(currentproject)
})}

function untoggle(){
    console.log(projectlist)
    if(!projectlist) return
    projectlist.forEach(el => {
        el.link.classList.remove("selectedtab")
    });
}

function project(name, x){
    this.name = name
    this.index = x
    this.objtasks = []
    return this
}

function storageaval(type) {
    return true
}

function createstorage(a){
    localStorage.setItem("storage", JSON.stringify(a))
    localStorage.setItem("currentproject", JSON.stringify(currentproject))
    localStorage.setItem("projectchanged", JSON.stringify(projectchanged))
    localStorage.setItem("projectindex", JSON.stringify(projectindex))
    localStorage.setItem("projectlist", JSON.stringify(projectlist))
}
function loadstorage(){
    storage = JSON.parse(localStorage.getItem("storage"))
    currentproject = JSON.parse(localStorage.getItem("currentproject"))
    projectchanged = JSON.parse(localStorage.getItem("projectchanged"))
    projectindex = JSON.parse(localStorage.getItem("projectindex"))
    projectlist = JSON.parse(localStorage.getItem("projectlist"))
    let a =  document.querySelector(".projectlist")
    console.log(projectlist)
    
    if(!projectlist)return
    projectlist.forEach(proj => {
        let b = document.createElement("div")
        b.classList.toggle('project')
        b.textContent = proj.name
        a.appendChild(b)
        proj.link = b
        addprojectlistener(b)
    });
}
function checkstorage(){
    if(storageaval()){
        if (!localStorage.getItem("storage")) {
            createstorage();
        } 
        else{
        loadstorage()
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
    let v  = document.querySelector(".optionpane")
    v.classList.toggle('active')
}

function showtasks(currentproject){
    console.log("hey")
    let x = document.querySelector('.tasklist')
    let y = document.querySelectorAll('.task')
    y.forEach(element => {
        x.remove(element)
    });
}

export{taskinfo, addproject, toggleadd, project, addtask, storageaval, createstorage, loadstorage, checkstorage,
optionscreen, showtasks, expcp, expstor, exppi, exppc}