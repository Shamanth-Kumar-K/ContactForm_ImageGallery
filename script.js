document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return;
  }

 
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address");
    return;
  }

  alert("Form submitted successfully!");
});


function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  
  let span = document.createElement("span");
  span.textContent = taskValue;
  li.appendChild(span);
 
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "btn complete";
  completeBtn.onclick = function() {
    span.style.textDecoration = "line-through";
    span.style.color = "green";
  };
  li.appendChild(completeBtn);
  
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn edit";
  editBtn.onclick = function() {
    let newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
      span.style.textDecoration = "none"; // reset if was completed
      span.style.color = "black";
    }
  };
  li.appendChild(editBtn);

  
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn delete";
  deleteBtn.onclick = function() {
    li.remove();
  };
  li.appendChild(deleteBtn);
  
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}


function addImage() {
  let imgUrl = document.getElementById("imgUrl").value.trim();
  if (imgUrl === "") {
    alert("Please enter an image URL!");
    return;
  }

  let img = document.createElement("img");
  img.src = imgUrl;

  let container = document.getElementById("galleryContainer");
  container.appendChild(img);

  document.getElementById("imgUrl").value = "";
}
