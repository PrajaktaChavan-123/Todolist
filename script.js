let button = document.getElementById('addbutton');
let newitem = document.getElementById('newitem');
let itemlist = document.querySelector('.list');
let clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    todolist = [];
    localStorage.setItem('todoitems',JSON.stringify(todolist));
    additem();
})
if(localStorage.getItem('todoitems')==null){
    todolist = [];
}else{
    todolist =JSON.parse(localStorage.getItem('todoitems'));
}
additem();
button.addEventListener('click',()=>{
    let newitemvalue = newitem.value;
    todolist.push(newitemvalue);
    localStorage.setItem('todoitems',JSON.stringify(todolist));
    additem();
    newitem.value = "";
})
function additem(){
    todolist =JSON.parse(localStorage.getItem('todoitems'));
    let newelement = "";
    todolist.forEach((element,index) => {
        newelement+=`<li><input type="checkbox" name="" id="">${element}<i id="${index}" onclick="deleteitem(this.id)" class="fa-solid fa-trash-can"></i></li>`
    });
    itemlist.innerHTML = newelement;
}
function deleteitem(index){
    todolist.splice(index,1);
    localStorage.setItem('todoitems',JSON.stringify(todolist));
    additem();
}
