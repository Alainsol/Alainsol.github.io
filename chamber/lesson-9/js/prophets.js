const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const prophets = jsonObject['prophets'];

    for (let i=0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let deathDate = document.createElement('p');
        let image = document.createElement('img');
        

        h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
        birthDate.textContent = `Date of Birth: ${prophets[i].birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophets[i].birthplace}`;
        

        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);

        if (prophets[i].death != null) {
            deathDate.textContent = `Date of Death: ${prophets[i].death}`;
            card.appendChild(deathDate);
        }else {
            deathDate.textContent = `This is our living Prophet`;
            card.appendChild(deathDate);
        };

        card.appendChild(image);

        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`);

        document.querySelector('div.cards').appendChild(card);
    }
});// temporary checking for valid response and data parsing
