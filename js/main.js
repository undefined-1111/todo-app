let listArr
async function add() {
    let value = document.getElementById("adding").value
    let tasks = document.getElementById("tasks")
    let ls = localStorage.getItem("todo")
    if(!ls || ls == undefined || ls == null) {
        listArr = []
        console.log('suka')
    } if(ls != undefined || ls != null) {
        listArr = JSON.parse(ls)
        console.log("namas")
    }
    listArr.push(value)
    localStorage.setItem("todo", JSON.stringify(listArr))
    tasks.innerHTML += `<div class="task w-full p-3 bg-gray-600 text-white mt-3 rounded-lg" onclick="del(${listArr.length -= 1})">${value}</div>`
}

async function show() {
    let ls = localStorage.getItem("todo")
    let testlistarr = JSON.parse(ls)
    if(!testlistarr) {
        listArr = []
        return
    } else {
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