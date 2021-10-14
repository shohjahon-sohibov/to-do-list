// DOM elements

var elForm = $_('.js-form');
var elInputToAddList = $_('.js-input');
var elUnshiftInput = $_('.js-unshift-input');
var elResultList = $_('.js-list');

var resultArray = [];

elForm.addEventListener('submit', function(e) {
  e.preventDefault()

  var AddListInput = elInputToAddList.value.trim();

  if (elUnshiftInput.checked) {
    resultArray.unshift(AddListInput);
  } else {
    resultArray.push(AddListInput);
  };
  render();
});

let render = () => {
  elResultList.innerHTML = '';

  resultArray.forEach((item) => {
    var newElItem = createElement('li', 'js-list__item');
    newElItem.textContent = item;

    elResultList.appendChild(newElItem);
  });
  
}
// newElInputCheckBox.addEventListener('click', function() {
//   resultArray.splice((this.value), 1);
//   render();
// });

