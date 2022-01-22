const lastModified = document.lastModified;
document.querySelector("#Date_Modified").textContent = lastModified;

const year = new Date().getFullYear();
 document.querySelector("#Current_Year").textContent = year;
