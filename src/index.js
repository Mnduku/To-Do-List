import './format.css'
import './style.css'
import './images/1.png'
import './images/4.png'
import './images/7.png'
import './images/8.png'
import {taskinfo, toggleadd, project, addtask, addproject, storageaval, createstorage,
loadstorage, checkstorage, optionscreen, showtasks, expcp, expstor, exppi, exppc
} from './modules'

let currentproject = expcp()
let storage = expstor()
let projectindex = exppi()
let projectchanged = exppc()
checkstorage()

window.addEventListener("load", (event) => {

let b1 =  document.querySelector(".addproj")
b1.addEventListener('click', function(e){
    toggleadd()
})

let b2 =  document.querySelector(".submit")
b2.addEventListener('click', function(e){
    if(document.querySelector("#projname").value == "" || document.querySelector("#projname").value == " ") return
    toggleadd()
    storage.projects.push(new project(addproject(),  projectindex))
    projectindex = projectindex +  1
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

let b5 = document.querySelector(".addtask")
b5.addEventListener('click', function(e){
    optionscreen()
})

let b6 = document.querySelector(".back")
b6.addEventListener('click', function(e){
    optionscreen()
})

let b7 = document.querySelector(".addtasker")
b7.addEventListener('click', function(e){
    optionscreen()
    addtask(currentproject)
})})
