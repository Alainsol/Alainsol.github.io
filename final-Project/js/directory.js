const requestURL   = 'https://alainsol.github.io/final-Project/data/data.json';
const templelist = document.querySelector('.templelist');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  
    const temples = jsonObject;

    for (let i=0; i < temples.length; i++ ) {

      let temple = document.createElement('div');
      temple.classList.add('temple');

      let name = document.createElement('h3');
      name.innerHTML = temples[i].name;
      temple.appendChild(name);

      let telephone = document.createElement('p');
      telephone.innerHTML = "Telephone: " + temples[i].telephone;
      temple.appendChild(telephone);

      let email = document.createElement('p');
      email.innerHTML = "Email: " + temples[i].email;
      temple.appendChild(email);

      let services = document.createElement('p');
      services.innerHTML = 'Services: ' + temples[i].services.join(', ');
      temple.appendChild(services);

      let sessions = document.createElement('table');
      for (let j=0; j < temples[i].sessionSchedule.length; j++ ) {
        let session = document.createElement('tr');
        session.innerHTML = '<td>' + temples[i].sessionSchedule[j].datetime + '</td>'
                            + '<td>' + temples[i].sessionSchedule[j].name + '</td>'
                            + '<td>' + temples[i].sessionSchedule[j].venue + '</td>';
        sessions.appendChild(session);
      }
      temple.appendChild(sessions);

      let templeClosure = document.createElement('p');
      templeClosure.innerHTML = 'Temple Closure: <br/>' + temples[i].templeClosureSchedule.join('<br/>');
      temple.appendChild(templeClosure);

      templelist.appendChild(temple);
  }
});// temporary checking for valid response and data parsing