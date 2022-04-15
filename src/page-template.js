const getManager= manager=>{
  console.log("******",manager)
  return`
  <div class="card emp-card">
    <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <section class="card-body">
        <ul class="list-group">
            <li class="list-item">ID: ${manager.getId()}</li>
            <li class="list-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-item">Office number: ${manager.getOfficeNum()}</li>
        </ul>
    </section>
  </div>
  `
}


function getEngineers(engine){
  if(engine.length===0){
    return`
    <div class="card emp-card"> No Engineers in the office</div>
    `
  }else{
    return`
      ${engine
        .map(eng=>{return`
          <div class="card emp-card">
            <div class="card-header">
              <h2 class="card-title">${eng.getName()}</h2>
              <h3 class="card-title">${eng.getRole()} ${eng.getId()}</h3>
            </div>
            <section class="card-body">
                <ul class="list-group">
                    <li class="list-item">ID: ${eng.getId()}</li>
                    <li class="list-item">Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></li>
                    <li class="list-item">Github: <a href="https://www.github.com/${eng.getGithub()}">${eng.getGithub()}</a></li></li>
                </ul>
            </section
          </div>`
          }).join('')
      }`

    }
}


function  getInterns(intern){
    console.log("-----------",intern)
    if(intern.length===0){
      return`
      <div class="card emp-card"> No Interns in the office</div>
      `
    }else{
      return `${intern.map(({name,id,email,school,role})=>{
      
      return`
      <div class="card emp-card ">
        <div class="card-header">
          <h2 class="card-title">${name}</h2>
          <h3 class="card-title">${role} ${id}</h3>
        </div>
        <section class="card-body">
            <ul class="list-group">
                <li class="list-item">ID: ${id}</li>
                <li class="list-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-item">School:${school}</li>
            </ul>
        </section>
      </div>
      `}).join('')
      }`;
  }
}

  

function office(management,engineers,interns){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Office ${management.getOfficeNum()}</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
    <center>
      <header>
        <h1>Office ${management.getOfficeNum()}</h1
      </header>
    </center>

      <main class="team">
        ${getManager(management)}
        ${getEngineers(engineers)}
        ${getInterns(interns)}
      </main>
    </body>
    </html>`
};
  
module.exports = office; 
