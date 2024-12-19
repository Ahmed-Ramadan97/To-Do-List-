// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");


// function addTask(){
//     if (inputBox.value === ''){
//         alert("You must write something!");
//     } else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = `<i class="fa-solid fa-trash-can fa-fade" style="color: #974444;"></i>`;
//         li.appendChild(span);

//            // إضافة مُستمع حدث مُباشر على span
//            span.addEventListener("click", function(event) {
//             event.stopPropagation(); 
//             this.parentElement.remove(); 
//             saveData();
//         });    
//     }
//     inputBox.value = "";
//     saveData();
// }
// listContainer.addEventListener("click", function(e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("cheked");
//         saveData();
//     }
// }, false );


// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showData(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showData();















const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-trash fa-bounce" style="color: #974444;"></i>`;
        li.appendChild(span);

        addDeleteEvent(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("cheked");
        let sound = document.getElementById("chekedSound");
        sound.play();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");

    const spans = listContainer.querySelectorAll("span");
    spans.forEach(addDeleteEvent);
}

function addDeleteEvent(span) {
    span.addEventListener("click", function(event) {
        event.stopPropagation(); 
        this.parentElement.remove();
        saveData();
    });
}

showData();
