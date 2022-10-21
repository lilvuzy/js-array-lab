console.log(data);
const submitButton = document.getElementById("submit-btn");

/*
  Initialize the page with all cards stored in data.
*/
document.getElementById("card-results").innerHTML = generateHtmlFromArray(
  data.items
);

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
      <a href="${arrayObject.url}" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
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

  arrayToConvert.forEach(function (arrayObject) {
    arrayHtmlString = arrayHtmlString + generateHtmlFromItem(arrayObject);
  });
  return arrayHtmlString;
}

/*
  When the submit button is clicked, filter results based on text that has been entered into search box.
  Also update the right column values with the updated column info. Testing.
 */
submitButton.addEventListener("click", function () {
  let searchResult = document.getElementById("search-text").value;
  let filteredArray = data.items.filter((item) =>
    generateHtmlFromItem(item)
      .toLowerCase()
      .includes(searchResult.toLowerCase())
  );
  document.getElementById("card-results").innerHTML =
    generateHtmlFromArray(filteredArray);
});
