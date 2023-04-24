#### Knowledge Check

  ##### What is the DOM?
    Document Object Model
     
  ##### How do you target the nodes you want to work with?
    You use selectors. Similar and sometimes the same as CSS selectors.
     
  ##### How do you create an element in the DOM?
    You use the createElement funcion.

  ##### How do you add an element to the DOM?
    You use the appendChild function.
     
  ##### How do you remove an element from the DOM?
    You use the removeChild function.

  ##### How can you alter an element in the DOM?
    You can select the attribute you want (thing.style.color) or use setAttribute function.

  ##### When adding text to a DOM element, should you use textContent or innerHTML? Why?
    textContent if the text you're adding is user generated. InnerHTML can be used by a user to have JavaScript insertion to a page, which is cause for security concern. 

  ##### Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
    The bottom, or in the head with the deferred tag. If you try to run your JavaScript basis the page loads, it won't find the nodes it's targeting.

  #####  How do “events” and “listeners” work?
    Events are actions that occur on your webpage, MouseClick, Keyboard input, etc... In javaScript you can tell the browser to 'listen' for an action using an 'addEventListener()' or 'onClick()'. This will then specify a specific action to take when that event happens on the element specified.

  #####  What are three ways to use events in your code?
    * Inline onclick(), ie: in the HTML directly
    * onclick() in a seperate javaScript file.
    * addEventListener in a seperate javaScript file.

  #####  Why are event listeners the preferred way to handle events?
    You can only have 1 onClick() property which causes limitations. If you use EvenListeners you can have more than one which gives you much more flexibility.

  #####  What are the benefits of using named functions in your listeners?
    It helps keep your code clean.

  #####  How do you attach listeners to groups of nodes?
    You document.querySelectorAll(nodes) and the loop through the list and add an event listenter to each one.

  #####  What is the difference between the return values of querySelector and querySelectorAll?
    querySelector will give you the node iteself while querySelectorAll will give you a nodelist of each node.

  #####  What does a “nodelist” contain?
    A list of nodes from the DOM.

  #####  Explain the difference between “capture” and “bubbling”.
    When you're listening to events on a nodeList there are two things that happen when that event fires. Capture is where the browser figures out every sing element that the event fired on (From Top to Bottom), and bubble is firing the function that happens on that event (From Bottom to Top). There are different options you can add to your eventListener to determine the behavior of how these things happen.