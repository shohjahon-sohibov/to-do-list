var $_ = function (selector, node = document) {
  return node.querySelector(selector)
}

var $$_ = function(selecotr, node = document) {
  return node,querySelector(selector)
}

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute("class", className);
  if (text) {
    element.textContent = text;
  }

  return element;
};