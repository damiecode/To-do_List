var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u2718");
    span.className = "close";
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

function close() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
close();

// to check items
var list = document.getElementById("my_list");
list.addEventListener("click", function (ev) {
    if (ev.target.tagName == "LI") {
        ev.target.classList.toggle('checked');
    }
}, false);

// to add new items
function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("my_input");
    var inputValue = inputValue.value;
    localStorage.setItem(inputValue, inputValue);
    var lists = localStorage.getItem(inputValue);
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u2718");
    span.className = "close";
    span.appendChild(text);
    var t = document.createTextNode(lists);
    li.appendChild(t);
    li.appendChild(span);
    if (lists === '') {
        alert("You must write something");
    } else {
        document.getElementById("my_list").appendChild(li);
        close();
    }
}

document.getElementById("my_input").value = "";


