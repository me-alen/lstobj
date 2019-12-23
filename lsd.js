const emp = [
  { name: "alen", age: 10 },
  { name: "steve", age: 20 }
];

const avgAge =
  emp.reduce((accum, current) => ({ age: accum.age + current.age })).age /
  emp.length;

const filtered = emp.filter(function(event) {
  if (event.age > avgAge) return event;
});

function loops(arr, foreach) {
  for (let i in arr) {
    foreach(arr[i], i, arr);
  }
}
function loops([],);
