// rest API => fetchh, axios
// methodlar => get, post, put, delete
// params, body, pathVariable, headers



// users part
let elUsersList = document.querySelector(".users-list")
const getUsers = (url) => fetch(url).then(res => res.json()).then(data => renderUsers(data, elUsersList))
 
function renderUsers(usersList,saveList){
    saveList.innerHTML = null
    usersList.forEach(item => {
        let elItem = document.createElement("li")
        elItem.innerHTML = `
         <li class="flex bg-slate-300 rounded-md p-3 items-center justify-between ">    
     <div class="flex items-center gap-[20px]">
        <img class="rounded-full w-[100px] h-[100px] rounded-full" src="./img/phone-img-removebg-preview.png" alt="user img" width="100" height="100">
     <div>
        <h2 class="text-[20px] font-semibold> ${item.name} ${item.username}</h2>
        <p class="text-[18px]" >${item.email}</p>
    </div>
    </div>
    <button>
        <img src="./img/dots.svg" alt="dots" width="30" height="30">
    </button>
     </li>
        `
        saveList.appendChild(elItem)
    })
}
getUsers("https://jsonplaceholder.typicode.com/users")
