var addButton = document.getElementsByClassName("addItem")[0];
var clearList = document.getElementsByClassName("clearList")[0];
var input = document.getElementsByClassName("text")[0];
var list = document.querySelector("ul");

function createListElement(){
    var div = document.createElement("div");
    var li = document.createElement("li");
    var delButton = document.createElement("Button");
    delButton.appendChild(document.createTextNode("X"));
    delButton.setAttribute("class","btn");
    delButton.setAttribute("style","margin: 0 0 0 auto;padding: 3px 6px;text-align: center; background-color: #595959; color: ghostwhite");
    delButton.addEventListener("click",function(){
        delButton.parentElement.remove();
    });
    li.setAttribute("class","listElement");
    li.appendChild(document.createTextNode(input.value));
    li.setAttribute("style","font-size: 2rem;display: flex; justify-content: center;width: 100%;background-color: #666666; list-style: none; padding-left: 15px; border-radius: 12px; border: 5px solid #595959; box-shadow: 10px 5px 15px #595959; margin-top: 10px;");
    li.appendChild(delButton);
    // div.appendChild(li);
    list.appendChild(li);
    input.value="";
}

function inputLength(){
        return input.value.length;
}

function addOnClick(){
    if(inputLength()>0){
        createListElement();
    } else{
        alert("Cannot add empty item.")
    }
}

function addOnPress(keyboardEvent){
    console.log("KeyPress");
    if(keyboardEvent.key === "Enter" && inputLength()>0){
        createListElement()
    }else if(keyboardEvent.key==="Enter" && inputLength() === 0 ) {
        alert("Cannot add Empty item.")
    }
}

function clearOnClick(){
    var i = document.querySelectorAll(".listElement");
    if(i.length===0){
        return alert("The list is already empty");
    }else{
        for(var j =0; j<i.length;j++){
            i[j].remove();
            console.log("delete 1 element "+j+" "+i);
        }
    }
    return alert("List will be cleared");
}

addButton.addEventListener("click", addOnClick);
input.addEventListener("keypress",addOnPress);
clearList.addEventListener("click",clearOnClick);