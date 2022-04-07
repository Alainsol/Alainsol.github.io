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

      let like = document.createElement('p');
      like.innerHTML = '<i class="far fa-thumbs-up"></i> ' + temples[i].like;
      temple.appendChild(like);


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

      let historyTitle = document.createElement('p');
      historyTitle.innerHTML = 'History';
      temple.appendChild(historyTitle);

      let histories = document.createElement('table');
      for (let j=0; j < temples[i].history.length; j++ ) {
        let history = document.createElement('tr');
        history.innerHTML = '<td>' + temples[i].history[j].date + '</td>'
                            + '<td>' + temples[i].history[j].description + '</td>';
        histories.appendChild(history);
      }
      temple.appendChild(histories);

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

      let image = document.createElement('img');
      image.src =  temples[i].image;
      temple.appendChild(image);

      templelist.appendChild(temple);
  }
});// temporary checking for valid response and data parsing
