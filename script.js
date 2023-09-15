//INIT DATA
let toDoList = []

initList()

//DISPLAY TO DO LIST
function initList(){
    if(toDoList.length === 0){
        // alert('Please enter a task or tasks')
    }else if(toDoList.length > 0){
        for(let i = 0; i <= toDoList.length; i++){
            let listItem = document.createElement('li')
            listItem.textContent = toDoList[i]
            document.querySelector('ul').appendChild(listItem)
        }
    }
}

//ADD NEW TO DO ITEM
document.querySelector('button').addEventListener('click', newToDoitem)

function newToDoitem(){
    let inputValue = document.querySelector('input').value
    if(inputValue !== ''){
        const todo = {
        uniqueID: Date.now(),
        task: inputValue
    }; 
    }
    console.log(toDoList.push(todo))
    
}

//CLEAR THE INPUT AFTER ADDING TASK TO LIST
function clearInput(){
    var getValue= document.querySelector('input');
    if (getValue.value !="") {
        getValue.value = "";
    }
}