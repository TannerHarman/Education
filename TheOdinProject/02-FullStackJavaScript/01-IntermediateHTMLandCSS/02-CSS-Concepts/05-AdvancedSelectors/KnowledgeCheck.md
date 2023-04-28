#### Knowledge Check

  ##### What is the difference between the child combinator and the descendant combinator?
     Descendant combinator will grab any element inside of another, regardless of where it is nested (directly or indirectly). Child combinator will grab only direct children of an element.

  ##### How does the syntax of pseudo-classes and pseudo-elements differ?
    pseudoClass is indicated by : this is grabbing an element in a certain state.
    pseudo-element is indicated by :: this is adding something new to the page.

  ##### Do pseudo-classes exist somewhere in HTML? Do pseudo-elements?
    psuedo-classes exist while pseudo-elements don't exist in the HTML.

  ##### Name two ways you could select every second child of an element, starting with the first.
    nth-child(2n) & nth-child(even)

  ##### What is the difference between div:first-child and div:last-child? What will each select?
    first-child will grab the 1st element in a set of siblings while last-child will grab the last.

  ##### What selector would you use to style a button a user is currently hovering over? How about one that is currently being clicked on?
    button:hover
    button:active

  ##### How could you select all input elements with a type of text?
    [attribute] - This general selector will select anything where the given attribute exists. Its value doesn’t matter.
    selector[attribute] - Optionally we can combine our attribute selectors with other types of selectors, such as class or element selectors.
    -[attribute="value"] - To get really specific, we can use = to match a specific attribute with a specific value.

  ##### How could you select all classes that begin with thunder?
    [attribute^="value"] - ^= Will match strings from the start.
    [attribute$="value"] - $= Will match strings from the end.
    [attribute*="value"] - *= The wildcard selector will match anywhere inside the string.