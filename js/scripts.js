window.onload = function(){
  const inputItem = document.getElementById('item');
  const addItemButton = document.getElementById('add');
  const clearButton = document.getElementById('clear');
  const shoppingList = document.getElementById('list');
  const items = document.getElementById('list');

  addItemButton.addEventListener("click", function(){
    if(inputItem.value === "")
    {
      alert("Input item");
    }
    else{
      //creating row
      let row = document.createElement("div");
      row.className = "row";
      shoppingList.appendChild(row);

      //create elements of the row (item)
      let item = document.createElement("div");
      item.className = "item";
      item.textContent = inputItem.value;
      row.appendChild(item);

      //create button change
      let buttonChange = document.createElement('button');
      buttonChange.textContent = "Change";
      buttonChange.className = "btn";
      buttonChange.type = "button";
      row.appendChild(buttonChange);

      //create button delete
      let buttonDelete = document.createElement('button');
      buttonDelete.textContent = "Delete";
      buttonDelete.className = "btn";
      buttonDelete.type ="button";
      row.appendChild(buttonDelete);

      buttonChange.onclick = function(){
        let new_input = prompt('Change the item', item.textContent);
        item.textContent = new_input;
      };

      buttonDelete.onclick = function(){
        shoppingList.removeChild(row);
      };
    }

    inputItem.value = "";
  });

  clearButton.addEventListener("click", function(){
    shoppingList.innerHTML = "";
  });
};