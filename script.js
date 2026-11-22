// 1

const input = document.getElementById("bookmarkInput")
const addBtn = document.getElementById("addBookmarkBtn")
const list = document.getElementById("bookmarkList")

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || []

let editIndex = null

function save() {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
}

function render() {
    list.innerHTML = ""

    bookmarks.forEach((link, index) => {
        const li = document.createElement("li")
        const a = document.createElement("a")
        const btn = document.createElement("button")
        const editBtn = document.createElement("button")

        a.textContent = link
        a.href = link
        a.target = "_blank"

        btn.textContent = "X"
        btn.classList.add("delete")

        editBtn.textContent = "Редагувати"

        btn.addEventListener("click", () => {
            bookmarks.splice(index, 1)
            save()
            render()
        })

        editBtn.addEventListener("click", () => {
            input.value = link
            editIndex = index
            addBtn.textContent = "Зберегти"
        })

        li.append(a, editBtn, btn)
        list.append(li)
    })
}

addBtn.addEventListener("click", () => {
    const value = input.value.trim()

    if (!value) {
        return
    }

    if (editIndex !== null) {
        bookmarks[editIndex] = value
        editIndex = null
        addBtn.textContent = "Додати"
    } else {
        bookmarks.push(value)
    }

    save()
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