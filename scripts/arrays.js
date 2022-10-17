console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards

const displayCourse = (prefix, number, title, url, desc, prereq, credits) => {
  const template = `<div class="col">
  <div class="card" style="width: 18rem;">
    <h3 class="card-header">${title}</h3>
    <div class="card-body">
      <h5 class="card-title">${prefix} ${number}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${credits} credits</h6>
      <p class="card-text">${desc}</p>
      <a href="${url}" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    <div class="card-footer">Required: ${prefix} ${prereq}</div>
  </div>
</div>`;

  return template;
};

data.items.forEach((items) => {
  document.write(
    displayCourse(
      items.prefix,
      items.number,
      items.title,
      items.url,
      items.desc,
      items.prereqs,
      items.credits
    )
  );
});

// 2. maybe we only show those that match the search query?

// 3. we update the result count and related summary info as we filter
