let myLeads = []
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")

const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocal) {
    myLeads = leadsFromLocal
    renderLeads()
}

deleteBtn.addEventListener("dblclick", (event) => {
    localStorage.clear()
    myLeads = []
    renderLeads()
})



inputBtn.addEventListener("click", function(){
    const inputValue= inputEl.value
    inputEl.value = ""
    myLeads.push(inputValue);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {

        // listItems += "<li><a target='_blank' href='"+ myLeads[i]+"'>"+myLeads[i]+"</a>" + "</li>"
        listItems +=
        `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEL.innerHTML = listItems;
}

