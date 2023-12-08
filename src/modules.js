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
    return b.textContent
}

function project(name, x){
    this.name = name
    this.index = x
    this.objtasks = [{name:"deiije"}
    ]
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
    let v  = document.querySelector(".optionpane")
    v.classList.toggle('active')
}

function showtasks(cp){
    console.log("hey")
    let x = document.querySelector('.tasklist')
    let y = document.querySelectorAll('.task')
    y.forEach(element => {
        x.remove(element)
    });
    for(el in cp.objtasks){
            let e = document.createElement('div')
            e.classList.toggle('task')
            let f = document.getElementsByClassName('tasklist')
            e.textContent = cp.name
            f.appendChild(e)
    }
}

export{taskinfo, addproject, toggleadd, project, addtask, storageaval, createstorage, loadstorage, checkstorage,
optionscreen, showtasks}