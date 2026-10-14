const input = document.getElementById("input");
const list = document.getElementById("list");
const count=document.getElementById("update");

function addTask() {
  const text = input.value.trim();
  
  if (text == "") { 
    alert("Enter a task!!");
    return;
  }

  let li = document.createElement("li");
  const span = document.createElement('span');
  span.textContent = text; 

  li.onclick=function(){
    li.classList.toggle('completed')};

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "del";

  deleteBtn.onclick=function(){
    li.remove();
    updateCount();
  }
  li.appendChild(deleteBtn);
  li.appendChild(span);
  list.appendChild(li);

  list.value = "";
  updateCount();
  
}
function changeColor(){
    
}

function updateCount(){
    let list=document.getElementById("list");
    document.getElementById("update").textContent = list.children.length;
}