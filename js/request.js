// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

const loaderToggle = (toggle) => {
    if(toggle) {
        overlay.classList.remove("hidden");
    } else {
        overlay.classList.add("hidden");
    }
}

// request promise

const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        request.addEventListener("readystatechange", () => {
            if(request.readyState === 4 && request.status >! 200 && request.status <! 300) { 
                loaderToggle(false)
                reject("error");
            }

            if(request.readyState < 4) loaderToggle(true);
            
            if(request.readyState === 4 && request.status === 200) {
                loaderToggle(false)
                const data = JSON.parse(request.responseText);
                resolve(data.results)
            } 
        })
        
        request.open("GET", resource)
        request.send();
    })
}

const reload = () => {
    getData(API)
    .then(data => updateUI(data))
    .catch(err => updateUI(err))
}

document.addEventListener("DOMContentLoaded", reload);