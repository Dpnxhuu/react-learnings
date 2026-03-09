// let's create a funtion who create element for us-->

// function createElement(tag, attributes, children) {
//   const element = document.createElement(tag);
//   element.textContent = children;
//   for (let key of Object.keys(attributes)) {
//     if (key === "style") {
//       Object.assign(element.style, attributes.style);
//     } else {
//       element[key] = attributes[key];
//     }
//   }
//   return element;
// }

// const element1 = createElement(
//   "h1",
//   { className: "element-1", id: "first" },
//   "hello guys",
// );
// const element2 = createElement(
//   "h2",
//   { className: "element-2", id: "second" },
//   "Good Morning",
// );
// const element3 = createElement(
//   "h3",
//   { className: "element-3", id: "third" },
//   "how's y'all!",
// );

// const element4 = createElement(
//   "p",
//   {
//     className: "element-4",
//     id: "fourth",
//     style: { color: "black", fontSize: "30px", backgroundColor: "aqua" },
//   },
//   "Paragraph tag",
// );

// root.append(element1, element2, element3, element4);

// end

// phase-2

const React = {
  createElement: function (tag, attributes, children) {
    const element = document.createElement(tag);
    element.textContent = children;
    for (let key of Object.keys(attributes)) {
      if (key === "style") {
        Object.assign(element.style, attributes.style);
      } else {
        element[key] = attributes[key];
      }
    }
    return element;
  },
};

const ReactDOM = {
  render: function (child, parent) {
    parent.append(child);
  },
};

const element1 = React.createElement(
  "h1",
  {
    className: "element-1",
    id: "first",
    style: { color: "black", fontSize: "30px", backgroundColor: "aqua" },
  },
  "heading 1",
);
ReactDOM.render(element1, root);
