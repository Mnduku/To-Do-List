
let currentproject = 0
let projectindex = 0
let projectchanged = false
let projectlist = []
let pagecounter = 0
let pageind = 1
const max = 10

function getselectedproject(){
    let index = projectlist.findIndex(o => o.name === currentproject.textContent);
    let thisproject = projectlist[index]
    return thisproject
}
function getworkingtask(){
    return
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
    if(currentproject == b)return
    if(!projectlist) return
    untoggle()
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
    const info1 = document.querySelector('#tinput1').value
    const info2 = document.querySelector('#tinput2').value
    const info3 = document.querySelector('#tinput3').value
    const info4 = document.querySelector('#tinput4').value
    const info5 = document.querySelector('#tinput5').value
    let thisproject = getselectedproject()
    thisproject.tasks.push(new taskinfo(Math.random(),info2,info3,info4,info5))
    showtasks(thisproject)
    updatepages(thisproject)
    createstorage()
}

function createtask(newtask){
    let x = document.createElement('div')
    x.classList.toggle('task')
    x.textContent = newtask.name
    let a = document.createElement('div')
    a.classList.toggle("dates")
    let b = document.createElement('a')
    b.classList.toggle("added")
    let c = document.createElement('a')
    c.classList.toggle("due")
    a.appendChild(b)
    a.appendChild(c)
    x.appendChild(a)
    let d = document.createElement('button')
    d.classList.toggle("removethis")
    let e = document.createElement('button')
    e.classList.toggle("favor")
    e.addEventListener('click', favorpress(d))
    d.addEventListener('click', delpress(d))
    x.appendChild(d)
    x.appendChild(e)
    return x
}


function optionscreen(){
    let v  = document.querySelector(".optionpane")
    v.classList.toggle('active')
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
        let v = createtask(thisproject.tasks[j])
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

    for(let i = a; i < b; i++){
        if(i >= thisproject.tasks.length) break
        let v = createtask(thisproject.tasks[i])
        z.appendChild(v)
    }
    x.appendChild(z)
    let v = document.querySelector(".pageno")

    if(backone) v.textContent =  (pagecounter) + " of " + pageind
    if(!backone)v.textContent =  (pagecounter + 1) + " of " + pageind
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
    //e.classList.toggle('favorited')
    console.log("heya") //stop this from calling 100000 times
    let thisproject = getselectedproject()
    let thistask = getworkingtask()
}
function delpress(e){
    let thisproject = getselectedproject()
    let thistask = getworkingtask()
}
function taskpress(e){
    let thisproject = getselectedproject()
    let thistask = getworkingtask()
}

export{taskinfo, addproject, toggleadd, addtask, storageaval, createstorage, loadstorage, checkstorage,
optionscreen, showtasks, exppc, exppi, expcp, dosomething, bapage, fwardapage}