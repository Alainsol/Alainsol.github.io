const links = [
    {
      label: "Week-1",
      url: "week-1/index.html"
    }
  ];





  
const worklist = document.getElementById('listwork');

for(let i = 0; i < links.length; i++) {
    const menu = document.createElement('li');
    const link = document.createElement('a');
    link.href = links[i].url;
    link.innerHTML = links[i].label;
    menu.appendChild(link);
    worklist.appendChild(menu);
}