
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        document.getElementById("showName").textContent = name;
        document.getElementById("showEmail").textContent = email;
        document.getElementById("showMessage").textContent = message;

        document.getElementById("output").style.display = "block";

        form.reset();
    });

