
let currentproject 
let projectindex = 0
let projectchanged = false
let projectlist = []

function expcp(){
    return currentproject
}
function exppi(){
    return projectindex
}
function exppc(){
    return projectchanged
}

function taskinfo(a,b,c,d,e){
    this.name = a
    this.desc = b
    this.date = c
    this.due = d
    this.priority = e
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
        link: b,
        tasks: [],
        taskpages: [],
        pagecount: 1,
        taskindex: 0,
        currentpage: 1,
    })
    console.log(projectlist)
    projectindex = projectindex + 1
    untoggle()
    currentproject = b
    currentproject.classList.toggle("selectedtab")
    showtasks(currentproject)
    createstorage()
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
function storageaval(type) {
    return true
}
function dosomething(){
    addproject()
}

function createstorage(){
    localStorage.setItem("currentproject", JSON.stringify(currentproject))
    localStorage.setItem("projectchanged", JSON.stringify(projectchanged))
    localStorage.setItem("projectindex", JSON.stringify(projectindex))
    localStorage.setItem("projectlist", JSON.stringify(projectlist))
}
function loadstorage(){
    currentproject = JSON.parse(localStorage.getItem("currentproject"))
    projectchanged = JSON.parse(localStorage.getItem("projectchanged"))
    projectindex = JSON.parse(localStorage.getItem("projectindex"))
    projectlist = JSON.parse(localStorage.getItem("projectlist"))
    console.log(projectlist)
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
        if (!localStorage.getItem("projectlist")) {
            createstorage();
            console.log("loading new")
        } 
        else{
        loadstorage()
        console.timeLog("loading old")
        }
    }
}
function addtask(){
    const form = document.querySelector('.taskform')
    const info1 = document.querySelector('#tinput1').value
    const info2 = document.querySelector('#tinput2').value
    const info3 = document.querySelector('#tinput3').value
    const info4 = document.querySelector('#tinput4').value
    const info5 = document.querySelector('#tinput5').value
    let newtask = new taskinfo(info1,info2,info3,info4,info5)
    let index = projectlist.findIndex(o => o.name === currentproject.textContent);
    projectlist[index].tasks.push(newtask)
    projectlist[index].taskindex = projectlist[index].taskindex + 1
    let x = document.createElement('div')
    x.classList.toggle('task')
    x.textContent = newtask.name
    let y = document.querySelector('.tasklist')

    if(projectlist[index].taskindex >= 8){
        projectlist[index].taskpages.push(y)
        y = generatenewpage(projectlist[index])
        y.append(x)
        let main = document.querySelector(".right")
        main.appendChild(y)
    }
    else{
        y.appendChild(x)
    }
    createstorage()
}

function optionscreen(){
    let v  = document.querySelector(".optionpane")
    v.classList.toggle('active')
}

function showtasks(currentproject){
    console.log("hey")
    let x = document.querySelector('.right')
    let y = document.querySelectorAll('.task')
    let z = document.createElement("ul")
    let w = document.querySelector(".tasklist")
    x.removeChild(w)
    z.classList.toggle("tasklist")
    let index = projectlist.findIndex(o => o.name === currentproject.textContent);
    let counter = 0
    let pagecount = 1
    projectlist[index].tasks.forEach(element => {
        let a = document.createElement('div')
        a.classList.toggle('task')
        a.textContent = element.name
        z.appendChild(a)
        counter = counter + 1
    });
    x.appendChild(z)
}

function generatenewpage(project){
    console.log("or here")
    project.pagecount = project.pagecount + 1
    let w = document.querySelector(".tasklist")
    project.taskpages.push(w)
    project.taskindex = 0
    w = document.createElement("ul")
    w.classList.toggle("tasklist")
    let main = document.querySelector(".right")
    main.removeChild(project.taskpages[project.currentpage-1])
    project.currentpage = project.currentpage + 1
    return w
}

function bapage(){
return

}
function fwardapage(){

}

export{taskinfo, addproject, toggleadd, addtask, storageaval, createstorage, loadstorage, checkstorage,
optionscreen, showtasks, exppc, exppi, expcp, dosomething, bapage, fwardapage}