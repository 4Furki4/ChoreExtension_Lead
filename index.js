let myLeads = []
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")

const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocal) {
    myLeads = leadsFromLocal
    render(myLeads)
}
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {

        // listItems += "<li><a target='_blank' href='"+ myLeads[i]+"'>"+myLeads[i]+"</a>" + "</li>"
        listItems +=
        `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEL.innerHTML = listItems;
}

tabBtn.addEventListener("click", (event) => {

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", (event) => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})



inputBtn.addEventListener("click", function(){
    const inputValue= inputEl.value
    inputEl.value = ""
    myLeads.push(inputValue);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})



