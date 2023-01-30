# Drag & Drop API

An application of the HTML's native [drag and drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

- Reorder a list of names (by dragging and dropping!)
- I wanted to have changes in order reflected in the number labels
- I also wanted the UI interaction of where a dragged item would be dropped to feel natural. There's a tiny bit of logic around how to inserAdjacentElement (see here and index.js line 41):

  ```js
  closestItem.insertAdjacentElement(
    currItemIdx <= closestItemIdx ? 'afterend' : 'beforebegin',
    dragged
  );
  ```
