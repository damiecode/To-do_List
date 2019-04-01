


function getTodoItems() {
    
    }











var html = '<ul class="list">';
for (var i = 0; i < todos.length; i++) {
    var list_element = "<li id=item'" + i + "'>";
    html += list_element + todos[i] + '<button class="remove" id="' + i + '">Delete</button>  <button class="edit" id="edit' + i + '">Edit</button></li>';
};
html += '</ul>';

 var button_edit = document.getElementsByClassName('edit');

 for (var i = 0; i < button_delete.length; i++) {
     button_edit[i].addEventListener('click', edit);
 };

