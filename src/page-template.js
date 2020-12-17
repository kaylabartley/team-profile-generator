const generateCards = array => {
  console.log(array);
  return `
    ${array
      .filter(({ role }) => role === 'Manager')
      .map(({name, id, email, number}) => {
      return`
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="./Manager.png" class="card-img-top" alt="Manager"> 
          <div class="card-body">  
            <h5 class="card-title">${name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${email}" target="_blank" rel="noopener noreferrer">${email}</a></li>
            <li class="list-group-item">Office Number: ${number}</li>
          </ul>
        </div>
      </div>
      `;
      }).join('')}

    ${array
      .filter(({role}) => role === 'Engineer')
      .map(({name, id, email, username}) => {
      return`
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="./Engineer.png" class="card-img-top" alt="Engineer"> 
          <div class="card-body">  
            <h5 class="card-title">${name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${email}" target="_blank" rel="noopener noreferrer">${email}</a></li>
            <li class="list-group-item">GitHub Username: <a href = "http://github.com/${username}">${username}</a></li>
          </ul>
        </div>
      </div>
      `;
      }).join('')}
    ${array
      .filter(({role}) => role === 'Intern')
      .map(({name, id, email, school}) => {
      return`
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="./Intern.png" class="card-img-top" alt="Intern"> 
          <div class="card-body">  
            <h5 class="card-title">${name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${email}" target="_blank" rel="noopener noreferrer">${email}</a></li>
            <li class="list-group-item">Schol: ${school}</li>
          </ul>
        </div>
      </div>
      `;
      }).join('')}
    `;
};



module.exports = (employeeArr) => {
  console.log("in page-template" + employeeArr);
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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
      <div class="container-fluid d-flex justify-content-center">
        <a class="navbar-brand fs-2" href="./">My Team</a>
      </div>
    </nav>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    ${generateCards(employeeArr)}
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
  </body>
</html>`;
};
