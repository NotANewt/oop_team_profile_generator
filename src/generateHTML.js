/*
 generateManager
  generates what will go in the Manager Card
    * takes in manager-related answers from new ManagerObj
    * uses a template literal for the layout of the Manager Card part of the HTML file with the supplied answers added into the template
    * returns the template literal
*/
function generateManager(managerName, managerId, managerEmail, managerOfficeNumber, managerRole) {
  let managerCard = "";
  if (managerName !== "") {
    managerCard = `<div class="card">

<div class="card_top">
    <p class="name">${managerName}</p>
    <p class="employeeType"><i class="fa-solid fa-mug-hot"></i> ${managerRole}</p>
</div>

<div class="card_info">
    <p class="card_id">ID: ${managerId}</p>
    <p class="card_email">Email: <a href="mailto:${managerEmail}">${managerEmail}</a>
    </p>
    <p class="card_officeNumber">Office Number: ${managerOfficeNumber}</p>
</div>
</div>
`;
  }
  return managerCard;
}

/*
 generateEngineer
  generates what will go in the Engineer Card(s)
    * takes in engineer-related answers from looped newEngineerObj
    * uses a template literal for the layout of Engineer Card part of the HTML file with the supplied answers added into the template
    * returns the template literal
*/
function generateEngineer(engineerName, engineerId, engineerEmail, engineerGithub, engineerRole) {
  let engineerCard = "";
  if (engineerName !== "") {
    engineerCard = `<div class="card">

<div class="card_top">
    <p class="name">${engineerName}</p>
    <p class="employeeType"><i class="fa-solid fa-laptop-code"></i> ${engineerRole}</p>
</div>

<div class="card_info">
    <p class="card_id">ID: ${engineerId}</p>
    <p class="card_email">Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a>
    </p>
    <p class="card_github">GitHub: <a href="https://www.github.com/${engineerGithub}" target="_blank">${engineerGithub}</a></p>
</div>
</div>`;
  }
  return engineerCard;
}

/*
 generateIntern
  generates what will go in the Intern Card(s)
    * takes in intern-related answers from looped newInternObj
    * uses a template literal for the layout of Intern Card part of the HTML file with the supplied answers added into the template
    * returns the template literal
*/
function generateIntern(internName, internId, internEmail, internSchool, internRole) {
  let internCard = "";
  if (internName !== "") {
    internCard = `<div class="card">

<div class="card_top">
    <p class="name">${internName}</p>
    <p class="employeeType"><i class="fa-solid fa-laptop-code"></i> ${internRole}</p>
</div>

<div class="card_info">
    <p class="card_id">ID: ${internId}</p>
    <p class="card_email">Email: <a href="mailto:${internEmail}">${internEmail}</a>
    </p>
    <p class="card_github">School: ${internSchool}</p>
</div>
</div>`;
  }
  return internCard;
}

/*
 generateHTMLText
  generates the template literal for the HTML file
    * takes in previously-generated managerCard, engineerCardString, and internCardString
    * adds cards into the template literal layout of the HTML document
    * returns the template literal
*/
function generateHTMLText(managerCard, engineerCardString, internCardString) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/49aab69f62.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <!-- header -->
    <header>
        <h1>My Team</h1>
    </header>

    <div class="container">

        <!-- Managercard -->
        ${managerCard}

        <!-- Engineer sample card -->
        ${engineerCardString}

        <!-- Intern Card(s) -->
       ${internCardString}

    </div>

    <!-- footer -->
    <footer class="">
        <p class="">Made with &#9825; and OOP by <a class="no-text-decor" href="https://github.com/NotANewt"
                target="_blank">Meegan</a></p>
    </footer>
</body>

</html>`;
}

// modules to export
module.exports = {
  generateManager,
  generateEngineer,
  generateIntern,
  generateHTMLText,
};
