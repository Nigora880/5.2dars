// rest API => fetchh, axios
// methodlar => get, post, put, delete
// params, body, pathVariable, headers



// users part
let elUsersList = document.querySelector(".users-list")
let elPostsList = document.querySelector(".posts-list")
let elCommentsList = document.querySelector(".comments-list")

const getUsers = (url) => {
    elUsersList.innerHTML = `
    <li>
       <img class="absolute scale-[1] top-0 bottom-0 left-0 right-0 m-auto" src="./img/loading.png" alt="loading " width="100" height="100">
    </li>
`
  fetch(url).then(res => res.json()).then(data => renderUsers(data, elUsersList))
 
}
    

function renderUsers(usersList,saveList){
    saveList.innerHTML = null
    usersList.forEach(item => {
        let elItem = document.createElement("li")
         elItem.className = "flex bg-slate-200 cursor-pointer rounded-md p-3 items-center justify-between"
        elItem.innerHTML = `
     <div class="flex items-center gap-[20px]">
        <img class="rounded-full w-[100px] h-[100px] rounded-full" src="./img/phone-img-removebg-preview.png" alt="user img" width="100" height="100">
     <div>
        <h2 class="text-[20px] font-semibold> ${item.name} ${item.username}</h2>
        <p class="text-[18px]" >${item.email}</p>
    </div>
    </div>
    <button class="">
        <img src="./img/dots.svg" alt="dots" width="30" height="30">
    </button>
        `
        saveList.appendChild(elItem)

        elItem.addEventListener("click", () =>{
             getPostById(item.id)
             
            })
    })
}
getUsers("https://jsonplaceholder.typicode.com/users")

// posts
function getPostById(id){
    fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json()).then(data => {}).catch(err => {

    }).finally()
}
