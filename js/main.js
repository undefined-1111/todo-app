let listArr
async function add() {
    let value = document.getElementById("adding").value
    let tasks = document.getElementById("tasks")
    let ls = localStorage.getItem("todo")
    if(ls == undefined) {
        listArr = []
    } if(!(ls == undefined)) {
        listArr = JSON.parse(ls)
    }
    listArr.push(value)
    tasks.innerHTML += `<div class="task w-full p-3 bg-gray-600 text-white mt-3 rounded-lg" onclick="del(${listArr.length -= 1})">${value}</div>`
    localStorage.setItem("todo", JSON.stringify(listArr))
}

async function show() {
    let ls = localStorage.getItem("todo")
    console.log(ls)
    if(!ls) {
        listArr = []
        return
    } else if(ls) {
        listArr = JSON.parse(ls)
        listArr.forEach((el,index) => {
            tasks.innerHTML += `<div class="task w-full block p-3 bg-gray-600 text-white mt-3 rounded-lg" onclick="del(${index})">${el}</div>`
        });
    }
}

async function del(index) {
    let ls = localStorage.getItem("todo")
    listArr = JSON.parse(ls)
    listArr.splice(index, 1)
    localStorage.setItem("todo", JSON.stringify(listArr))
    window.location.reload(); 
}

show()