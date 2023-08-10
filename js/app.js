const form = document.getElementById('form')
const formButton = document.getElementById('form__button')
const user = document.getElementById('user')
const deleteBtn = document.getElementById('delete__btn')
const clearBtn = document.getElementById('clear__button')

// Update users
formButton.addEventListener("click", e => {
    clearBtn.classList.remove("hidden")
    reload();
})

// Clear user
clearBtn.addEventListener("click", e => {
    user.innerHTML = '';
    clearBtn.classList.add("hidden")
})

// Search user
form["form__input"].addEventListener("input", () => {
    const inputVal = form["form__input"].value.trim().toLowerCase();
    const userNames = document.querySelectorAll(".user__name");
    
    userNames.forEach(name => {
        const have = name.lastElementChild.textContent.toLocaleLowerCase().includes(inputVal);
        if(have) {
            name.parentNode.classList.remove("hidden")
        } else {
            name.parentNode.classList.add("hidden")
        }
    })
})

const updateUI = data => {
    user.innerHTML = '';

    data.forEach((item, index) => {
        const { gender, name, picture, dob, location } = item;

        const userItem = `<li class="user__item">
            <button id="delete__btn" class="user__delete--btn" data-index="${index}">
            <i class="fas fa-trash"></i>
            </button>
            <img
            class="user__img"
            alt="User photo"
            src="${picture?.large}"
            width="100"
            height="100"
            />
            <div class="user__name">
            <span class="material-symbols-outlined">badge</span>
            <span>- ${name?.title} ${name?.first} ${name?.last} </span>
            </div>
            <div class="user__year">
            <span class="material-symbols-outlined">cake</span>
            <span>- ${dob?.age} years old.</span>
            </div>
            <div class="user__location">
            <span class="material-symbols-outlined">person_pin_circle</span>
            <span>- ${location?.city}, ${location?.country}</span>
            </div>
            <div class="user__gender">
            <span class="material-symbols-outlined">man</span>
            <span>- ${gender}</span>
            </div>
        </li>`;

        user.innerHTML += userItem;
    })
}

// delete user
document.addEventListener("click", (e) => {
    if(e.target.classList[0] === "user__delete--btn") {
        e.target.parentElement.remove();
        
        if(!user.children.length) {
            clearBtn.classList.add("hidden")
        }
        console.log(user.children.length);
    }

})