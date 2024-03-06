var task = document.getElementById("task");
var taskul = document.getElementById("task_ul");
var emptymsg = document.getElementById("emptymessage");
	function add_task(){
		if(task.value === ''){
			alert("You must write something");
		}
		else{
			var taskli = document.createElement("li");
			taskli.innerText =  task.value;
	 	    taskul.appendChild(taskli);
			let taskdel = document.createElement("span");
			taskdel.innerHTML = "\u00d7";
			taskli.appendChild(taskdel);
			var taskdate = document.createElement("h5")
			taskli.appendChild(taskdate);
			taskdate.innerText = timestamp
		}
		task.value = '';
		savetask();
	}
	
taskul.addEventListener("click" , function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		savetask();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		savetask();
    }
},false);

function savetask(){
	localStorage.setItem("data",taskul.innerHTML);
}
function showtask(){
taskul.innerHTML = localStorage.getItem("data");
}
	 showtask();





const date = new Date().getDate();
const month = new Date().getMonth()+1;
const year = new Date().getFullYear();
const timestamp =  date +'/' + month + '/' + year;


function deltasks(){
	localStorage.clear();
	showtask();
}
