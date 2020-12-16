
const generateManagerCard = array => {
  return `
    ${array.map(({name, id, email, number}) => {
      return`
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."> 
    <div class="card-body">  
      <h5 class="card-title">${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">Office Number: ${number}</li>
    </ul>
  </div>
  `;
  })
  .join('')}
  `;
};

const generateEngineerCards = array => {
  return `
    ${array.map(({name, id, email, username}) => {
      return`
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."> 
    <div class="card-body">  
      <h5 class="card-title">${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">GitHub Username: ${username}</li>
    </ul>
  </div>
  `;
  })
  .join('')}
  `;
};

const generateInternCards = array => {
  return `
    ${array.map(({name, id, email, school}) => {
      return`
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."> 
    <div class="card-body">  
      <h5 class="card-title">${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">Office Number: ${school}</li>
    </ul>
  </div>
  `;
  })
  .join('')}
  `;
};

module.exports = (managerArr, engineerArr, internArr) => {
    return `
    <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    ${generateManagerCard(managerArr)}
    ${generateEngineerCards(engineerArr)}
    ${generateInternCards(internArr)}

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
  </body>
</html>`;
};
