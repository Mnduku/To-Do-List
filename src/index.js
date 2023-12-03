import './format.css'
import './style.css'
import {taskinfo, toggleadd, project, addtask, addproject, storageaval, createstorage,
loadstorage, checkstorage
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
    toggleadd()
    storage.projects.push(new project(addproject()))
    createstorage(storage.projects)
})

})

