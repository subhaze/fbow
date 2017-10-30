# For Better or Worse
### This is a set of JS files that are **non**-side-effect free.
### When included they cause side-effects that patch the DOM if needed with some useful DOM 4 APIs that are lacking in some browsers, such as IE.

Each polyfill was pulled from MDN or a resource that MDN suggested.


#### ChildNode
- [after()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after)
- [before()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before)
- [remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
- [replaceWith()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith)

#### ParentNode
- [append()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)
- [prepend()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)

#### Element
- [closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
- [matches()](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)

#### Event
- [CustomEvent Constructor](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
