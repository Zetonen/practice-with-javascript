const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreQl" },
  { label: "MongoDB" },
];

const refs = {
  input: document.querySelector("#filter"),
  list: document.querySelector(".js-list"),
};

const listItemsMarkup = createListItemsMarkup(tech);

populateList(listItemsMarkup);

refs.input.addEventListener("input", _.debounce(onFilterChange, 500));

function createListItemsMarkup(items) {
  return items.map((e) => `<li>${e.label}</li>`).join("");
}

function onFilterChange(e) {
  const filter = e.target.value;
  const filterArr = tech.filter((e) => e.label.toLowerCase().includes(filter));
  const listItemsMarkup = createListItemsMarkup(filterArr);

  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
