const eventRegistrationForm = document.getElementById("eventRegistrationForm");

eventRegistrationForm.addEventListener("submit", function () {
  event.preventDefault();

  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const eventType = document.querySelector(
    "input[name='eventType']:checked"
  ).value;

  const dietaryRestrictions = document.querySelectorAll(
    "input[name='food']:checked"
  );
  const selectedDietaryRestrictions = [];
  for (let i = 0; i < dietaryRestrictions.length; i++) {
    selectedDietaryRestrictions.push(dietaryRestrictions[i].value);
  }

  const tshirtSize = document.getElementById("selectTshirtSize").value;

  const registrationData = `
  <h2>Registration Details:</h2>
  <p><strong>Name:</strong> ${userName}</p>
  <p><strong>Email:</strong> ${userEmail}</p>
  <p><strong>Event Type:</strong> ${eventType}</p>
  <p>
    <strong>Dietary Restrictions:</strong> ${selectedDietaryRestrictions.join(
      ", "
    )}</p>
  <p><strong>T-shirt Size:</strong> ${tshirtSize}</p>
  `;

  const formResult = document.getElementById("formResult");
  formResult.innerHTML = registrationData;
});
