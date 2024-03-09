 let input = document.querySelector("input")
const ul = document.querySelector("ul")

 const todo = []

 function todorender(){
    ul.innerHTML= ''
    for (let index = 0; index < todo.length; index++) {
        ul.innerHTML += `<li> ${todo[index]} <button id="del" class ="butt" onclick="deleteTodo(${index})"><i class="fa-solid fa-xmark"></i></button>
        <button id="edit" class ="butt" onclick ="todoEdit(${index})" ><i class="fa-solid fa-pen"></i></button></li>`
        
    }
 }

function pushtodo() {
    todo.push(input.value);
    input.value = ''
   todorender()

    
}
 
function deleteTodo(i){
   
    todo.splice(i, 1)
    console.log(todo[i])
    todorender()

}

function todoEdit(t) {
    const newval = prompt("enter updated task!!" , todo[t])
    todo.splice(t,1,newval)
    todorender()
    
}




// delete walla function for all 
function resettodo(){
todo.splice(0,todo.length)
todorender()
}