function appendToList(){
    let input = document.getElementById("textInput").value;
    let list = document.getElementById("Liste");
    
    let li = document.createElement("li");
    li.textContent = input;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    
    list.appendChild(li);
    li.appendChild(deleteBtn);

    document.getElementById("textInput").value="";
}