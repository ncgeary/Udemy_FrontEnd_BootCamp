var add = document.getElementById('add');
var removeAll = document.getElementById('removeAll');
var list = document.getElementById('list');

//Remove all button

removeAll.onclick = function removeAll(){
  list.innerHTML = ' ';
}

//Adding a new list element

add.onclick=function() {
  addTask(list);
  document.getElementById('userInput').value = '';
  document.getElementById('userInput').focus();
}


function addTask(targetUl) {
  var inputText = document.getElementById('userInput').value;
  var li = document.createElement('li');
  var textNode = document.createTextNode(inputText + ' ');
  var removeButton = document.createElement('button');

  if (inputText != '') {
    removeButton.className = 'btn btn-xs btn-danger';
    removeButton.innerHTML = '&times';
    removeButton.setAttribute('onclick', 'removeMe(this)');
    li.appendChild(textNode);
    li.appendChild(removeButton);
    targetUl.appendChild(li);
  }else{
    alert("Please enter a task");
  }
}

//Using enter to add to list

onkeyup = function(event) {
  if (event.keyCode === 13) {
      document.getElementById("add").click();
    }
};

function removeMe(item) {
  var p = item.parentElement;
  p.parentElement.removeChild(p);
}
