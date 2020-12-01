// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const exitnote = document.querySelector('.exitbutton1');
const enternote = document.querySelector('.notebook');
const enterphone = document.querySelector('.bro');
const exitphone = document.querySelector('.exitbutton2');
const clock = document.querySelector('.clocktext');
const heart0= document.querySelector('.heart0');
const heart1= document.querySelector('.heart1');
const heart2= document.querySelector('.heart2');
const layer1 = document.querySelector('.layer1');
const layer2 = document.querySelector('.layer2');
const layer3 = document.querySelector('.layer3');
const layer5 = document.querySelector('.layer5');
var heartnum = 0;
var flag=false;
const startButton = document.querySelector('.startbutton');
const broRun = document.querySelector('.brorun');
const happybro = document.querySelector('.happybro');
const broruninverse = document.querySelector('.brorun-inverse');
const meizi = document.querySelector('.meizi');
const p1 = document.querySelector('.phonetext');
const p2 = document.querySelector('.igaccount');
// phonetexts
var meiziIg=['chip_rikoo','milia_eyectelevision','fangmena','iosbabe','may8572fit','mera_caii','ggshacylin','ijk_0211','homei0416','yuen_nnnnnn','ee4646ee','dodoyuhan','ninila1223','zhang_99711','qoo.kimmy','sandy.nw.1127','tsaiyoyo0728','tzu0612','yuu0707_','hanaliao0118','minagram____','tangtangjulia','janice.koh','ms0260237','eli_o528','eateat0228','pockydic_akb48teamtp','dolphne_chien','_ning1223___'];
var trashtalks=['讚的啦','ㄏ康的','分享給你辣','殼以嗎','這個不錯ㄅ','喜歡ㄇ','你有沒有追蹤這個?','你是不是喜歡這種?']
//event listener
loadLocalHeart()
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
todoList.addEventListener('click',heartAppear);
/*todoList.addEventListener('click',showBro);*/
exitnote.addEventListener('click',exitNote);
enternote.addEventListener('click',enterNote);
enterphone.addEventListener('click',enterPhone);
enterphone.addEventListener('click',heartDisppear);
exitphone.addEventListener('click',exitPhone);
exitphone.addEventListener('click',goBro);
startButton.addEventListener('click',Start);
startButton.addEventListener('click',heartAppear);
startButton.addEventListener('click',showRunbro);
enterphone.addEventListener('click',meiZi);
exitnote.addEventListener('click',showRunbro);
//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // CreateLI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // add todo to localstorage
    saveLocalTodos(todoInput.value);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv)
    //clear todo input value
    todoInput.value = "";
};

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
    if(item.classList[0]=== "complete-btn"){
        const todo = item.parentElement;
        todo.classList.add('completed');
        heartnum = heartnum + 1;
        saveLocalHeart(heartnum);    
    }
        
}


function showBro(){
    broRun.style['display']="none"
    enterphone.style['display']="inline-block"
}

function meiZi(){
    var imgnumber = Math.floor(Math.random()*30); 
    var meiziString = "<img src='./meizi/" + imgnumber + ".png'>";
    var trashtalknum = Math.floor(Math.random()*8);
    meizi.innerHTML=meiziString;
    p1.innerHTML=trashtalks[trashtalknum];
    p2.innerHTML="@"+meiziIg[imgnumber];
}

function showRunbro(){
    if(heartnum>=3 && flag==false){
        flag=true
        broRun.style['display']="inline-block";
        setTimeout(showBro,2750);
    }else if (heartnum>=3 && flag==true){
        
    }else if (heartnum<3 && flag==false){
        enterphone.style['display']="none";
    }
}


function runOutBro(){
    happybro.style['display']="none";
    broruninverse.style['display']="inline-block";
    setTimeout(disapeearbro,1500);
}

function disapeearbro(){
    broruninverse.style['display']="none";
}

function Start(){
    layer5.style['display']="none";
    layer2.style['display']="inline-block";
}

function heartAppear(){
    
    if(heartnum==1)
    {
     heart0.style['display']="inline-block";
        
    }
    else if(heartnum==2)
    {
     heart0.style['display']="inline-block";
     heart1.style['display']="inline-block";
        
    }
    else if(heartnum>=3)
    {
     heart0.style['display']="inline-block";
     heart1.style['display']="inline-block";   
     heart2.style['display']="inline-block";

    }
 }

 function heartDisppear(){
 
     heart0.style['display']="none";
     heart1.style['display']="none";
     heart2.style['display']="none";
    
 }

/*function showBro(){
    if(heartnum==3){
        enterphone.style['display']="inline-block";
    }
}
*/

function goBro(){
        enterphone.style['display']="none";
        happybro.style['display']="inline-block";
        setTimeout(runOutBro,2000);
}


function saveLocalTodos(todo){
//check--do i already have things there
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}


function getTodos(){
    //check--do i alrady have things in there
    let todos;
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
            //Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        // CreateLI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class= "fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //append to list
        todoList.appendChild(todoDiv)
    });        
}
function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));

}
function exitNote(){
    layer1.style['display']='none';
    layer2.style['display']='inline-block';
};

function enterNote(){
    layer1.style['display']='inline-block';
    layer2.style['display']='none';

};

function enterPhone(){ 
    layer3.style['display']='inline-block';
    layer2.style['display']='none';
};

function exitPhone(){
    layer2.style['display']='inline-block';
    layer3.style['display']='none';
    heartnum=0;
    flag=false;
    saveLocalHeart(heartnum);
};

function hideBro(){
    enterphone.style['display']='none';
}


function getTime() {
    function pad(number) {
      if (number < 10) {
        return "0" + number;
      } else {
        return number;
      }
    }
  
    const now = new Date();
  
    const hh = pad(now.getHours());
    const mm = pad(now.getMinutes());
  
    return `${hh}:${mm}`;
  }

function tickClock() {
    clock.textContent = getTime();
}
tickClock();
setInterval(tickClock,30000);

function loadLocalHeart(){
    if(localStorage.getItem('hearts')===null){
        heartnum = 0;
    }else{
        heartnum = parseInt(localStorage.getItem('hearts'));
    }

}



function saveLocalHeart(heartnum){
    localStorage.removeItem("hearts");
    localStorage.setItem("hearts",heartnum);
}