// 1

const input = document.getElementById("bookmarkInput")
const addBtn = document.getElementById("addBookmarkBtn")
const list = document.getElementById("bookmarkList")

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || []

function save() {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
}

function render() {
    list.innerHTML = ""
    bookmarks.forEach((link, index) => {
        const li = document.createElement("li")
        const a = document.createElement("a")
        const btn = document.createElement("button")
        btn.classList.add("delete")
        btn.textContent = "X"
        a.textContent = link
        a.href = link

        btn.addEventListener("click", ()=>{
            bookmarks.splice(index, 1)
            save()
            render()
        })

        li.append(a)
        li.append(btn)
        list.append(li)
    });
}

addBtn.addEventListener("click", () => {
    const value = input.value.trim()
    if (!value) {
        return
    }
    bookmarks.push(value)
    save(value)
    render()
    input.value = ""
})

render()

// localStorage.clear()




// 2

const container = document.getElementById("formApp")
const username = document.getElementById("username")
const password = document.getElementById("password")
const saveBtn = document.getElementById("saveBtn")

username.value = localStorage.getItem("username") || ""
password.value = localStorage.getItem("password") || ""

saveBtn.addEventListener("click", ()=>{
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value)
})