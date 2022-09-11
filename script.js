const contents = document.querySelectorAll(".content");
const allStatus = document.querySelectorAll(".status")
let draggableContent= null

contents.forEach(content => {
    content.addEventListener("dragstart",dragstart)
    content.addEventListener("dragend",dragend)
    
});

function dragstart(){

    // set time is to delay the time -- dispaly none means when dragging started the content wont stays there
    setTimeout(() => {
    this.style.display="none"
    }, 0);
    draggableContent= this;
    console.log("started")
}

function dragend(){
    setTimeout(() => {
    this.style.display="block"
    }, 0);
    draggableContent=null;
    console.log("Drag End")
}

allStatus.forEach(status => {
    status.addEventListener("dragover",dragOver);
    status.addEventListener("dragenter",dragEnter);
    status.addEventListener("dragleave",dragLeave);
    status.addEventListener("drop",dragDrop);
});

function dragOver(e){
    e.preventDefault();
    console.log("dragOver")
}

function dragEnter(){
    this.style.border= "1px solid #ccc"
    console.log("dragEnter")
}

function dragLeave(){
    this.style.border= "none"
    console.log("dragLeave")
}

function dragDrop(){
    this.style.border= "none"
    this.appendChild(draggableContent)
    console.log("dragDrop")
}



/* dom Manipulation, Adding Content */

const submitContent = document.getElementById('submit-content');

submitContent.addEventListener("click",CreateContent)

function CreateContent(){
    const content_div = document.createElement('div')
    const input_val = document.getElementById('input-content').value;
    const txt = document.createTextNode(input_val)
// input
    content_div.appendChild(txt)

// adding content and dragging

    content_div.classList.add("content")
    content_div.setAttribute('draggable','true')

    //  create span
    const span = document.createElement('span')
    const span_txt = document.createTextNode('x')
    span.classList.add('close')
    span.appendChild(span_txt)

    content_div.appendChild(span)

    no_status.appendChild(content_div)

    // console.log(content_div)

    // to delete added content copied from bottom

    span.addEventListener("click",()=>{
    span.parentElement.style.display="none";
    })


    // to access draggable in addded content
    content_div.addEventListener("dragstart",dragstart)
    content_div.addEventListener("dragend",dragend)

//   user input stays there only , so to remove-->
    document.getElementById('input-content').value=""
    

    content_form.classList.remove("active");
    overlay.classList.remove("active")
}

// close button

const close_btns = document.querySelectorAll('.close');


close_btns.forEach(btn =>{
    btn.addEventListener("click",()=>{
    btn.parentElement.style.display="none";
    });
});
        























































// modal
const btns  = document.querySelectorAll("[data-target]");
const closeBtn = document.querySelectorAll(".modal-btn");
const overlay = document.querySelector('#overlay')
btns.forEach((btn)=> {
     btn.addEventListener("click", () =>{
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active")
    });
});

closeBtn.forEach((btn)=> {  
     btn.addEventListener("click", () =>{
        // document.querySelector(btn.dataset.target).classList.remove("active");
        btn.closest(".modal").classList.remove("active");
        overlay.classList.remove("active")
    });
});


window.onclick = (e) =>{
    if(e.target==overlay){
        const modals= document.querySelectorAll(".modal")
        modals.forEach((modal) => modal.classList.remove("active")) ;
        overlay.classList.remove("active")

    }
}