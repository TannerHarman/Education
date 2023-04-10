#### Knowledge Check

  #####  What is the difference between justify-content and align-items?
    Justify-Content moves the whole box that you're organizing items into as a whole. Justify content takes into account each items as a whole for spacing considerations. 

    Align items takes an item individually and allows you to manipulate it specifically with no effect on the other times. Since you're moving it in directions that don't interfere with other items in the content container.

  #####  How do you use flexbox to completely center a div inside a flex container?
  ```css
    center: {
      justify-content: center;
      align-items: center;
    }
  ```

  #####  What’s the difference between justify-content: space-between and justify-content: space-around?
    Space-Between: spaces all the empty space between the items evenly, pushing the to most outer items to the edges.
    Space-Around: spaces items out with an even amount of space on each side of each item.