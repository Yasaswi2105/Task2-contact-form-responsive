document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Form submitted successfully!");
    // Optionally, clear the form
    document.getElementById("contactForm").reset();
});
function addTask() {
    let task = document.getElementById("taskInput").value.trim();
    if (task === "") return alert("Enter a task");

    let li = document.createElement("li");
    li.textContent = task;

    // Add delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}
