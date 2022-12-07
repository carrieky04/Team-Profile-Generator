const generateHTML = (teamMembers) => {
  console.log(teamMembers);

  const html = [];

  const generateManager = (manager) => {
    return `<div class="card" style="width: 18rem;">
        <div class="card-header">${manager.getRole()}</div>
          <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <p class="card-text">ID: ${manager.getId()}</p>
          <p class="card-text">EMAIL:<span id="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></span></p>
          <p class="card-text">OFFICE#: ${manager.officeNumber}</p>
        </div>
        </div>
      </div>`
      
  }
  
  const generateEngineer = (engineer) => {
    return `<div class="card" style="width: 18rem;">
        <div class="card-header">${engineer.getRole()}</div>
          <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <p class="card-text">ID: ${engineer.getId()}</p>
          <p class="card-text">EMAIL: <span id="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></p>
          <p class="card-text">GITHUB: ${engineer.getGithub()}</p>
        </div>
      </div>
      </div>`
      
  }
  
  const generateIntern = (intern) => {
    return `<div class="card" style="width: 18rem;">
      <div class="card-header">${intern.getRole()}</div>
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <p class="card-text">ID: ${intern.getId()}</p>
          <p class="card-text">EMAIL: <span id="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span></p>
          <p class="card-text">SCHOOL: ${intern.getSchool()}</p>
        </div>
      </div>
      </div>`
      
  }
  
  

  for (let i = 0; i < teamMembers.length; i++) {
    const employee = teamMembers[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);
      html.push(managerCard)
    } else if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      html.push(engineerCard)
    } else if (role === "Intern") {
      const internCard = generateIntern(employee);
      html.push(internCard)
    }
  }



  return html.join('')
}

module.exports = (teamMembers) => {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <header>
      <h1>My Team</h1>
      <header>
      
          <main>${generateHTML(teamMembers)} </main>
        
    </body>
  </html>`
}
  





  
