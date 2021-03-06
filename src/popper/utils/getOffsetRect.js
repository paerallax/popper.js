import getWindowSizes from './getWindowSizes';

/**
 * Get the position of the given element, relative to its offset parent
 * @method
 * @memberof Popper.Utils
 * @param {Element} element
 * @return {Object} position - Coordinates of the element and its `scrollTop`
 */
export default function getOffsetRect(element) {
  let elementRect;
  if (element.nodeName === 'HTML') {
    const { width, height } = getWindowSizes();
    elementRect = {
      width,
      height,
      left: 0,
      top: 0,
    };
  } else {
    elementRect = {
      width: element.offsetWidth,
      height: element.offsetHeight,
      left: element.offsetLeft,
      top: element.offsetTop,
    };
  }

  elementRect.right = elementRect.left + elementRect.width;
  elementRect.bottom = elementRect.top + elementRect.height;

  // position
  return elementRect;
}
