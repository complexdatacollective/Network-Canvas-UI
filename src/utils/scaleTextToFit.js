/* eslint-disable no-param-reassign */

const textOutOfBounds = (containerElement, textElement) => {
  const containerBounds = containerElement.getBoundingClientRect();
  const textBounds = textElement.getBoundingClientRect();
  return textBounds.height > containerBounds.height || textBounds.width > containerBounds.width;
};

const scaleIncrement = 1;

// TODO move padding: 33% into stylesheet
const scaleTextToFit = (element) => {
  element.setAttribute('style', 'position: relative;');
  const text = element.textContent;
  element.innerHTML = '';

  const textElement = document.createElement('span');
  textElement.innerHTML = text;
  element.appendChild(textElement);

  const findFontSize = (size) => {
    textElement.setAttribute('style', `position: absolute; font-size: ${size}px;`);

    return !textOutOfBounds(element, textElement) ?
      findFontSize(size + scaleIncrement) :
      size - scaleIncrement;
  };

  const fontSize = findFontSize(8);

  element.innerHTML = text;
  element.setAttribute('style', `font-size: ${fontSize}px; overflow: hidden;`);
};

export default scaleTextToFit;
