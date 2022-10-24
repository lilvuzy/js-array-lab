console.log(data);
// Assign form elements to constant variables
const submitButton = document.getElementById("submit-btn");
const searchForm = document.getElementById("search-text");

// Instance variables for page.
let currentArray = data.items;
let currentLength = currentArray.length;
let totalCredits = 0;
let totalPrereqCredits = 0;

/*
  Initialize the page with all cards stored in data.
*/
document.getElementById("card-results").innerHTML = generateHtmlFromArray(
  data.items
);
displayCount();
updateCredits();
displayCredits();

/*
  Takes a single array item storing class data and converts it to html.
*/
function generateHtmlFromItem(arrayObject) {
  let itemHtmlString = `<div class="col">
  <div class="card" style="width: 18rem;">
    <h3 class="card-header">${arrayObject.title}</h3>
    <div class="card-body">
      <h5 class="card-title">${arrayObject.prefix} ${arrayObject.number}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${arrayObject.credits} credits</h6>
      <p class="card-text">${arrayObject.desc}</p>
      <a href="${arrayObject.url}" class="card-link">Visit Site</a>
      <a href="#" class="card-link">Go to Top</a>
    </div>
    <div class="card-footer">Required: ${arrayObject.prereqs}</div>
  </div>
</div>`;
  return itemHtmlString;
}

/*
  Goes through each item in the provided array and consolidates the html into one object.
*/
function generateHtmlFromArray(arrayToConvert) {
  let arrayHtmlString = "";
  let itemCount = 0;

  arrayToConvert.forEach(function (arrayObject) {
    arrayHtmlString = arrayHtmlString + generateHtmlFromItem(arrayObject);
  });
  return arrayHtmlString;
}

/*
 Displays the current number of items on the page.
*/
function displayCount() {
  document.getElementById("item-count").innerHTML = `${currentLength} items`;
}

/*
  Take credit values and display them in the appropriate html section.
*/
function displayCredits() {
  document.getElementById(
    "total-credits"
  ).innerHTML = `${totalCredits} credit-hours + ${totalPrereqCredits} credit-hours of prereqs`;
}

/*
  Update credit values to match current array of classes.
*/
function updateCredits() {
  totalCredits = 0;
  totalPrereqCredits = 0;
  currentArray.forEach(function (arrayObject) {
    totalCredits += arrayObject.credits;
    arrayObject.prereqs.forEach(function (prereq) {
      totalPrereqCredits += 3;
    });
  });
}

/*
  Search cards in big array for text currently in search box.
*/
function searchText() {
  let searchResult = document.getElementById("search-text").value;
  let filteredArray = data.items.filter((item) =>
    generateHtmlFromItem(item)
      .toLowerCase()
      .includes(searchResult.toLowerCase())
  );
  document.getElementById("card-results").innerHTML =
    generateHtmlFromArray(filteredArray);
  currentArray = filteredArray;
  currentLength = currentArray.length;
  displayCount();
  updateCredits();
  displayCredits();
}

/*
  Call the search any time a key is pressed in the search box, click submit if enter key is pressed.
*/
searchForm.addEventListener("keydown", function () {
  searchText();
});
