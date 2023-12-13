
let currentproject = 0
let projectindex = 0
let projectchanged = false
let projectlist = []
let pagecounter = 0
let pageind = 1
let currentoption = 0
let alltaskslist  = []
const max = 9
let ignoreprojectsettings = true

function tasklistarrow(){
    let n = document.querySelector('body')
    n.addEventListener('keydown', function(event) {
        let key = event.key;
        if(key == "ArrowLeft"){
            bapage()
        }
        if(key == "ArrowRight"){
            fwardapage()
        }
    });
}

function getselectedproject(){
    let index = projectlist.findIndex(o => o.name === currentproject.textContent);
    let thisproject = projectlist[index]
    return thisproject
}
function getworkingtask(task){
    let info = task.textContent
    let thisproject = getselectedproject()
    let tasklist = thisproject.tasks
    let index = tasklist.findIndex(o =>  info.includes(o.name));
    tasklist.forEach(element => {
    });
    return index
}

function gettaskproject(){

}

function expcp(){
    return currentproject
}
function exppi(){
    return projectindex
}
function exppc(){
    return projectchanged
}

function taskinfo(a,b,c,d){
    this.name = a
    this.desc = b
    this.date = c
    this.due = d
    this.priority = false
    return this
}

function toggleadd(){
    let b1 =  document.querySelector(".addproj")
    let cname =  document.querySelector(".cname")
    b1.classList.toggle("invisible")
    cname.classList.toggle("visible")
}

function addproject(){
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
        pagecount: 1,
        currentpage: 1,
    })
    projectindex = projectindex + 1
    untoggle()
    currentproject = b
    currentproject.classList.toggle("selectedtab")
    let thisproject = getselectedproject()
    showtasks(thisproject)
    createstorage()
    return b.textContent
}

function addprojectlistener(b){
    b.addEventListener('click', function(e){
    if(currentproject == b){
        b.classList.toggle("selectedtab")
        switch(currentoption){
            case 0: alltasks()
            case 1:
            case 2:
            case 3:
        }
        ignoreprojectsettings = true
        return
    }
    if(!projectlist) return
    untoggle()
    ignoreprojectsettings = false
    currentproject = b
    b.classList.toggle("selectedtab")
    let thisproject = getselectedproject()
    showtasks(thisproject)
    updatepages(thisproject)
})}

function updatepages(t){
    let v = document.querySelector(".pageno")
    pagecounter = 0
    pageind = Math.ceil(t.tasks.length / max)
    if(pageind == 0) pageind == 1
    v.textContent =  (pagecounter + 1) + " of " + pageind
}

function updatepages2(t){
    let v = document.querySelector(".pageno")
    pagecounter = 0
    pageind = Math.ceil(t.length / max)
    if(pageind == 0) pageind == 1
    v.textContent =  (pagecounter + 1) + " of " + pageind
}

function untoggle(){
    if(!projectlist) return
    projectlist.forEach(el => {
        el.link.classList.remove("selectedtab")
    });
}
function storageaval(type) {
    return true
}
function dosomething(){
    let c = document.querySelector('#projname')
    let cname = c.value
    for(let i = 0; i < projectlist.length; i++){
        if(projectlist[i].name == cname){
            return false
        }
    }
    addproject()
    return true
}

function createstorage(){
    localStorage.setItem("alltasks", JSON.stringify(alltaskslist))
    localStorage.setItem("currentproject", JSON.stringify(currentproject))
    localStorage.setItem("projectchanged", JSON.stringify(projectchanged))
    localStorage.setItem("projectindex", JSON.stringify(projectindex))
    localStorage.setItem("projectlist", JSON.stringify(projectlist))
}
function loadstorage(){
    alltaskslist = JSON.parse(localStorage.getItem("alltasks"))
    currentproject = JSON.parse(localStorage.getItem("currentproject"))
    projectchanged = JSON.parse(localStorage.getItem("projectchanged"))
    projectindex = JSON.parse(localStorage.getItem("projectindex"))
    projectlist = JSON.parse(localStorage.getItem("projectlist"))
    let a =  document.querySelector(".projectlist")
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
function maker(){
    let j = document.createElement('ul')
    j.classList.toggle('tasklist')
    return j
}
function checkstorage(){
    if(storageaval()){
        if (!localStorage.getItem("projectlist")) {
            createstorage();
            console.log("loading new")
        } 
        else{
        loadstorage()
        console.log("loading old")
        }
    }
}
function addtask(){
    const form = document.querySelector('.taskform')
    let info1 = document.querySelector('#tinput1').value
    const info2 = document.querySelector('#tinput2').value
    const info3 = document.querySelector('#tinput3').value
    const info4 = document.querySelector('#tinput4').value
    let thisproject = getselectedproject()
    info1 = Math.random()  //RANDOM INPUT GENERATOR
    thisproject.tasks.push(new taskinfo(info1,info2,info3,info4))
    alltaskslist.push(new taskinfo(info1,info2,info3,info4))
    createstorage()
    showtasks(thisproject)
    updatepages(thisproject)
}

function createtask(newtask){
    let x = document.createElement('div')
    x.classList.toggle('task')
    x.addEventListener('click', function(e){taskpress(e)})
    x.textContent = newtask.name
    let a = document.createElement('div')
    a.classList.toggle("dates2")
    let b = document.createElement('a')
    b.classList.toggle("added")
    let c = document.createElement('a')
    c.classList.toggle("due")
    b.textContent = "Added: " + newtask.date
    c.textContent = "Deadline: "+ newtask.due
    a.appendChild(b)
    a.appendChild(c)
    x.appendChild(a)
    let d = document.createElement('button')
    d.classList.toggle("removethis")
    let e = document.createElement('button')
    e.classList.toggle("favor")
    console.log(newtask.priority)
    if(newtask.priority == true){e.classList.toggle('favorited')}
    e.addEventListener('click', function(){ favorpress(e)})
    d.addEventListener('click', function(){delpress(d)})
    x.appendChild(d)
    x.appendChild(e)
    return x
}


function optionscreen(){
    let v  = document.querySelector(".optionpane")
    v.classList.toggle('active')
    let c = document.querySelector("#tinput3")
    let now = new Date();
    let month = (now.getMonth() + 1);               
    let day = now.getDate();
    if (month < 10) 
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;
    let today = now.getFullYear() + '-' + month + '-' + day;
    console.log(today)
    c.value = today
}

function showtasks(thisproject){
    let x = document.querySelector('.right')
    let y = document.querySelectorAll('.task')
    let z = document.querySelector(".tasklist")
    z.innerHTML = ""

    let j = 0
    if(thisproject.tasks === undefined) return
    for(let i = 0; i < max;  i++){
        if(j >= (thisproject.tasks.length)) return
        let v = createtask(thisproject.tasks[thisproject.tasks.length - (j+1)])
        j = j + 1
        z.appendChild(v)
    }
    x.appendChild(z)
}

function showtasks2(a,b, backone){
    let thisproject = getselectedproject()
    let x = document.querySelector('.right')
    let y = document.querySelectorAll('.task')
    let z = document.querySelector(".tasklist")
    z.innerHTML = ""

    if(ignoreprojectsettings){
        for(let i = a; i < b; i++){
            if(i >= alltaskslist.length) break
            let v = createtask(alltaskslist[alltaskslist.length  - (i + 1)])
            z.appendChild(v)
        }
    }
    else{
        for(let i = a; i < b; i++){
            if(i >= thisproject.tasks.length) break
            let v = createtask(thisproject.tasks[thisproject.tasks.length  - (i + 1)])
            z.appendChild(v)
        }
    }
    x.appendChild(z)
    let v = document.querySelector(".pageno")
    if(backone) v.textContent =  (pagecounter) + " of " + pageind
    if(!backone)v.textContent =  (pagecounter + 1) + " of " + pageind
}

function showtasks3(chosen){
    let x = document.querySelector('.right')
    let y = document.querySelectorAll('.task')
    let z = document.querySelector(".tasklist")
    z.innerHTML = ""
    let j = 0
    if(chosen == undefined) return
    for(let i = 0; i < max;  i++){
        if(j >= (chosen.length)) return
        let v = createtask(chosen[chosen.length - (j+1)])
        j = j + 1
        z.appendChild(v)
    }
    x.appendChild(z)

}
function generatenewpage(project){
}

function bapage(){
   if(pagecounter == 0 ) return
   showtasks2((max*(pagecounter - 1)), (max*pagecounter),true)
   pagecounter = pagecounter - 1
}
function fwardapage(){
    if(pagecounter >= pageind -1) return
    pagecounter = pagecounter + 1
    showtasks2((max*pagecounter), (max* (pagecounter + 1)),false)
}

function favorpress(e){
    console.log("NIGGGSSSSSSSSS")
    e.classList.toggle('favorited')
    let thisproject = getselectedproject()
    let thistask = getworkingtask(e.parentNode)
    thisproject.tasks[thistask].priority = true
    console.log(thisproject.tasks)
    let index = alltaskslist.findIndex(o => o.name == thisproject.tasks[thistask].name);
    alltaskslist[index] = thisproject.tasks[thistask]
    createstorage()
}

function delpress(e){
    let thisproject = getselectedproject()
    let thistask = getworkingtask(e.parentNode)
    e.parentNode.parentNode.removeChild(e.parentNode)
    thisproject.tasks.splice(thistask,1)
    createstorage()
    showtasks(thisproject)
    updatepages(thisproject)
}

function alltasks(){
    if(alltaskslist == undefined) return
     showtasks3(alltaskslist)
     updatepages2(alltaskslist)
}

function favtasks(){
    let favlist = []
    alltaskslist.forEach(element => {
        if(element.priority == true){
            favlist.push(element)}
    });
    showtasks3(favlist)
    updatepages2(favlist) 
}

function taskpress(e){
    console.log("taskpress")
    let thisproject = getselectedproject()
    let thistask = getworkingtask(e.parentNode)
    thistask = thisproject.tasks[thistask]
    let x = document.createElement('div')
    x.classList.toggle("expand")
    thistask.appendChild(x)
}


//to do

//add seperation from project functionality to menu functionality
//add no task page
//make project page scrollable
//add description on click
//intro page maybe?

export{taskinfo, addproject, toggleadd, addtask, storageaval, createstorage, loadstorage, checkstorage,
optionscreen, showtasks, exppc, exppi, expcp, dosomething, bapage, fwardapage, alltasks,
favtasks, tasklistarrow}