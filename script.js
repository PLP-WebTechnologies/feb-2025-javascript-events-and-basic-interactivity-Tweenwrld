/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    // -- Event Handling Section --
  
    // Button click event: change paragraph text
    document.getElementById("clickButton").addEventListener("click", function() {
      document.getElementById("clickResult").textContent = "Button Clicked! Event handled successfully!";
    });
  
    // Hover events: update the hover area text and background color
    const hoverArea = document.getElementById("hoverArea");
    hoverArea.addEventListener("mouseover", function() {
      hoverArea.textContent = "You're hovering!";
      hoverArea.style.backgroundColor = "#d1e7dd";
    });
    hoverArea.addEventListener("mouseout", function() {
      hoverArea.textContent = "Hover over me!";
      hoverArea.style.backgroundColor = "#e0e0e0";
    });
  
    // Keypress detection: display which key was pressed
    document.addEventListener("keypress", function(event) {
      document.getElementById("keypressDisplay").textContent = `You pressed "${event.key}"`;
    });
  
    // Bonus: Secret action for double-click
    const secretDiv = document.getElementById("secretAction");
    secretDiv.addEventListener("dblclick", function() {
      alert("Secret action activated! 🎉");
    });
  
    // -- Interactive Elements Section --
  
    // Button to change text and color
    document.getElementById("changeColorButton").addEventListener("click", function() {
      const colorText = document.getElementById("colorText");
      // Toggle text and color
      if (colorText.style.color === "blue") {
        colorText.style.color = "red";
        colorText.textContent = "Watch me switch to red!";
      } else {
        colorText.style.color = "blue";
        colorText.textContent = "Now I'm blue!";
      }
    });
  
    // Image Gallery / Slideshow functionality
    const galleryImages = [
      "images/image1.jpg",
      "images/image2.jpg",
      "images/image3.jpg"
    ];
    let currentImageIndex = 0;
    const galleryImageElement = document.getElementById("galleryImage");
  
    document.getElementById("nextImage").addEventListener("click", function() {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      galleryImageElement.src = galleryImages[currentImageIndex];
    });
    document.getElementById("prevImage").addEventListener("click", function() {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      galleryImageElement.src = galleryImages[currentImageIndex];
    });
  
    // Tabs / Accordion functionality
    const tabButtons = document.querySelectorAll(".tabButton");
    tabButtons.forEach(button => {
      button.addEventListener("click", function() {
        // Hide all tab content panels
        const tabContents = document.querySelectorAll(".tabContent");
        tabContents.forEach(content => {
          content.style.display = "none";
        });
        // Show the targeted tab content
        const targetId = this.getAttribute("data-target");
        document.getElementById(targetId).style.display = "block";
      });
    });
  
    // -- Form Validation Section --
  
    const form = document.getElementById("registrationForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const formMessage = document.getElementById("formMessage");
  
    // Bonus: Real-time password validation (min 8 characters)
    passwordInput.addEventListener("input", function() {
      if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
      } else {
        passwordError.textContent = "";
      }
    });
  
    // On form submission, do validations and provide feedback
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let valid = true;
  
      // Clear previous error messages
      nameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
  
      // Validate required name field
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
      }
  
      // Validate email format
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email address.";
        valid = false;
      }
  
      // Validate password length
      if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        valid = false;
      }
  
      if (valid) {
        formMessage.textContent = "Registration successful!";
        formMessage.style.color = "green";
        form.reset();
      } else {
        formMessage.textContent = "Please correct the errors above.";
        formMessage.style.color = "red";
      }
    });
  
  });