document.addEventListener("DOMContentLoaded", function () {
  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.createElement("button");
  saveBtn.innerHTML = "Salvează";
  saveBtn.classList.add("edit-btn");
  saveBtn.style.display = "none";
  editBtn.parentNode.appendChild(saveBtn);

  const name = document.getElementById("person");

  const nameText = document.getElementById("name-text");
  const nameInput = document.getElementById("name-input");

  const dobText = document.getElementById("dob-text");
  const dobInput = document.getElementById("dob-input");

  const emailText = document.getElementById("email-text");
  const emailInput = document.getElementById("email-input");

  const phoneText = document.getElementById("phone-text");
  const phoneInput = document.getElementById("phone-input");

  const editContactBtn = document.getElementById("editContactBtn");
  const saveContactBtn = document.createElement("button");
  saveContactBtn.innerHTML = "Salvează";
  saveContactBtn.classList.add("edit-btn");
  saveContactBtn.style.display = "none";
  editContactBtn.parentNode.appendChild(saveContactBtn);

  editBtn.addEventListener("click", () => {
    toggleEditMode(true);
  });

  saveBtn.addEventListener("click", () => {
    toggleEditMode(false);
  });

  editContactBtn.addEventListener("click", () => {
    toggleEditMode(true, true);
  });

  saveContactBtn.addEventListener("click", () => {
    toggleEditMode(false, true);
  });

  function toggleEditMode(isEdit, isContact = false) {
    if (isEdit) {
      if (!isContact) {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";

        nameText.style.display = "none";
        nameInput.style.display = "inline";
        nameInput.value = nameText.textContent.trim();

        dobText.style.display = "none";
        dobInput.style.display = "inline";
        dobInput.value = dobText.textContent.trim();
      } else {
        editContactBtn.style.display = "none";
        saveContactBtn.style.display = "inline";

        emailText.style.display = "none";
        emailInput.style.display = "inline";
        emailInput.value = emailText.textContent.trim();

        phoneText.style.display = "none";
        phoneInput.style.display = "inline";
        phoneInput.value = phoneText.textContent.trim();
        phoneInput.closest(".info-person").classList.add("edit-mode");
      }
    } else {
      if (!isContact) {
        editBtn.style.display = "inline";
        saveBtn.style.display = "none";

        nameText.textContent = nameInput.value;
        nameText.style.display = "inline";
        nameInput.style.display = "none";
        name.textContent = nameInput.value;

        dobText.textContent = dobInput.value;
        dobText.style.display = "inline";
        dobInput.style.display = "none";
      } else {
        editContactBtn.style.display = "inline";
        saveContactBtn.style.display = "none";

        emailText.textContent = emailInput.value;
        emailText.style.display = "inline";
        emailInput.style.display = "none";

        phoneText.textContent = phoneInput.value;
        phoneText.style.display = "inline";
        phoneInput.style.display = "none";
        phoneInput.closest(".info-person").classList.remove("edit-mode");
      }
    }
  }

  $(dobInput).datepicker({
    format: "dd.mm.yyyy",
    autoclose: true,
  });

  // Initialize intlTelInput for phone input with mask
  const iti = intlTelInput(phoneInput, {
    initialCountry: "md", // Start with Moldova as the default country
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  // Tab functionality
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.tab;
      tabContents.forEach((content) => {
        if (content.id === target) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });
    });
  });
});
