const inputItem = document.querySelector('input.item');
const addItemButton = document.querySelector('button.add_item');
const clearButton = document.querySelector('button.clear');
const tableOfItems = document.querySelector("table");

addItemButton.addEventListener('click', () => {
  if(inputItem.value === "")
  {
    alert("Input item");
  }
  else{
    //creating row in the table
    let row = document.createElement('tr');
    row.className = "row_class";
    tableOfItems.appendChild(row);

    //create elements for the first column = item name
    let rowEl = document.createElement('td');
    rowEl.className = "row_element";
    rowEl.textContent = inputItem.value;
    row.appendChild(rowEl);

    //create second column = button change
    let rowElBtnChange = document.createElement('td');
    rowElBtnChange.className = "row_element";
    row.appendChild(rowElBtnChange);

    let buttonChange = document.createElement('button');
    buttonChange.textContent = "Change";
    buttonChange.className = "list_button";
    rowElBtnChange.appendChild(buttonChange);

    /*let edit_icon = document.createElement("i");
    i.class = "fas fa-pen";
    rowElBtnChange.appendChild(edit_icon);*/

    //create third column = button delete
    let rowElBtnDelete = document.createElement('td');
    rowElBtnDelete.className = "row_element";
    row.appendChild(rowElBtnDelete);

    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = "Delete";
    buttonDelete.className = "list_button";
    rowElBtnDelete.appendChild(buttonDelete);

    buttonChange.onclick = function(){
      let new_input = prompt('Input new item', rowEl.textContent);
      rowEl.textContent = new_input;
    };

    buttonDelete.onclick = function(){
      tableOfItems.removeChild(row);
    };
  }

  inputItem.value = "";
});

clearButton.addEventListener('click', () => {
  tableOfItems.innerHTML = "";
})
