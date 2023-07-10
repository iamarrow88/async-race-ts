export default function createElem(
  elem: string,
  classNames?: string,
  childrenNames?: string | Element[],
  parentName?: Element | null,
  ...attributes: Array<Array<string>>
): Element {
  const element = document.createElement(elem);

  let classes: Array<string>;
  if (classNames) {
    classes = classNames.split(" ");
    if (classes.length > 1) {
      element.classList.add(...classes);
    } else {
      element.classList.add(classNames);
    }
  }

  if (childrenNames && Array.isArray(childrenNames)) {
    childrenNames.forEach((childElem) => element.append(childElem));
  } else if (childrenNames && typeof childrenNames === "object") {
    element.append(childrenNames);
  } else if (childrenNames && typeof childrenNames === "string") {
    element.innerHTML = childrenNames;
  }

  if (parentName) parentName.append(element);

  if (attributes && Array.isArray(attributes)) {
    attributes.forEach((attrSet) => {
      if (attrSet[1] === "") {
        element.setAttribute(attrSet[0], "");
      } else if (attrSet[0].match(/for|id|type|name/)) {
        element.setAttribute(attrSet[0], attrSet[1]);
      } else {
        element.dataset[attrSet[0]] = attrSet[1];
      }
    });
  }
  return element;
}
