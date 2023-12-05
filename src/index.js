import './format.css'
import './style.css'
import './images/1.png'
import './images/4.png'
import './images/7.png'
import './images/8.png'
import {taskinfo, toggleadd, project, addtask, addproject, storageaval, createstorage,
loadstorage, checkstorage, optionscreen
} from './modules'

const storage = {
    projects: []
}

checkstorage(storage)

window.addEventListener("load", (event) => {

let b1 =  document.querySelector(".addproj")
b1.addEventListener('click', function(e){
    toggleadd()
})

let b2 =  document.querySelector(".submit")
b2.addEventListener('click', function(e){
    if(document.querySelector("#projname").value == "" || document.querySelector("#projname").value == " ") return
    toggleadd()
    storage.projects.push(new project(addproject()))
    createstorage(storage.projects)
})

let b3 = document.querySelectorAll(".option")
let currenttab = document.querySelector('.start')
b3.forEach(element => { element.addEventListener('click', function(e){
    if(element == currenttab) return
    if(element != currenttab){
        element.classList.toggle("selectedtab")
        currenttab.classList.toggle("selectedtab")
        currenttab = element
    }
})})

let b4 = document.querySelectorAll(".project")
let currentproject 
let projectchanged = false
b4.forEach(element => { element.addEventListener('click', function(e){
    if(projectchanged == false){
        projectchanged = true
        currentproject = element
        element.classList.toggle("selectedtab")
    }
    else if(currentproject == element){
        return
    }
    else{
        currentproject.classList.toggle("selectedtab")
        currentproject = element
        element.classList.toggle("selectedtab")
    }
    

let b5 = document.querySelector(".addtask")
b5.addEventListener('click', function(e){
    optionscreen();
})

})});
})

