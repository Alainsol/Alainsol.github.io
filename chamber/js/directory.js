const requestURL   = 'https://alainsol.github.io/chamber/data/data.json';
const companylist = document.querySelector('.companylist');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  
    const companies = jsonObject;

    for (let i=0; i < companies.length; i++ ) {
      let section = document.createElement('section');
      let h4 = document.createElement('h4');
      h4.innerHTML = companies[i].companyName;
      section.appendChild(h4);

      // street name
      let addresss =  document.createElement('p');
      addresss.innerHTML = companies[i].address.streetAdress;
      section.appendChild(addresss);
      //tel company
      let phoneNumbers = document.createElement('p');
      phoneNumbers.innerHTML = '<i class="fa fa-phone-square"> ' + companies[i].phoneNumbers[0].number;
      section.appendChild(phoneNumbers);
      //website
      let website =  document.createElement('p');
      website.innerHTML = companies[i].address.website;
      section.appendChild(website);
      //email
      let email =  document.createElement('p');
      email.innerHTML = '<i class="fa fa-envelope"></i> ' +  companies[i].address.email;
      section.appendChild(email);
      //images
      let image = document.createElement('img');
      image.innerHTML = '<i class="fa fa-envelope"></i> ' +  companies[i].address.image;
      section.appendChild(image);
        

      companylist.appendChild(section);
  }
});// temporary checking for valid response and data parsing


let cardView = function(){
  document.querySelector('.companylist').classList.remove('list-view');
  document.querySelector('.companylist').classList.add('card-view');
};

let listView = function(){
  document.querySelector('.companylist').classList.add('list-view');
  document.querySelector('.companylist').classList.remove('card-view');
};