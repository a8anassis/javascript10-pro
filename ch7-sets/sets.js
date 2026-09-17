let bag = new Set();

bag.add("Java");
bag.add("JavaScript");
bag.delete("Java");

if (bag.has("JavaScript")) console.log("Has JavaScript");

function addToSet(set, ...values) {
  values.forEach((value) => set.add(value));
}

function createSet(...elements) {
  return new Set(elements);
}

const cities = [
  { id: 1, city: "Athens" },
  { id: 2, city: "Athens" },
];

function getUniqueCities(arr) {
  return [...new Set(arr.map((cityObj) => cityObj.city))];
}
