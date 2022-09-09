let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    const inputValue= inputEl.value
    inputEl.value = ""
    myLeads.push(inputValue);
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

