import './format.css'
import './style.css'
import './images/1.png'
import './images/4.png'
import './images/7.png'
import './images/8.png'
import './images/10.png'
import './images/11.png'
import './images/del.png'
import './images/favor.png'
import './images/favorited.png'
import './images/nothing.png'
import { toggleadd, addtask,checkstorage, optionscreen, 
    alltasks, expcp, exppi, exppc,
     dosomething, bapage, fwardapage,
    tasklistarrow, favtasks, 
} from './modules'

let currentproject = expcp()
let projectindex = exppi()
let projectchanged = exppc()

checkstorage()
window.addEventListener("load", (event) => {
tasklistarrow()
alltasks()

let b1 =  document.querySelector(".addproj")
b1.addEventListener('click', function(e){
    toggleadd()
})

let b2 =  document.querySelector(".submit")
b2.addEventListener('click', function(e){
    if(document.querySelector("#projname").value == "" || document.querySelector("#projname").value == " ") return
    if(!dosomething()) return
    else toggleadd()
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

var form = document.querySelector(".taskform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
let at = document.querySelector('.addtasker')
at.addEventListener('click', function(e){
    console.log('hola')
    if(form.checkValidity() == false) return
    optionscreen()
    for(let i = 0; i < 10; i++)addtask()
})
})

let b7 = document.querySelector(".pageback")
b7.addEventListener('click', function(e){
    bapage()
})
let b8 = document.querySelector(".pageforward")
b8.addEventListener('click', function(e){
    fwardapage()
})

let b9 = document.querySelector("#alltasks")
b9.addEventListener('click', function(e){
    alltasks()
})
let b12 = document.querySelector("#star")
b12.addEventListener('click', function(e){
    favtasks()
})