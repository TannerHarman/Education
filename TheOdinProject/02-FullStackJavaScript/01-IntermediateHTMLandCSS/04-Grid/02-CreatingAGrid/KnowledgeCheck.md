#### Knowledge Check

  #####  How does an HTML element become a grid item?
    You add 'display:grid' to the parent container.

  #####  What is the space between lines on the grid?
    Grid track

  #####  How do you set gutters (also known as alleys) in the grid?
    Gap property. row-gap and/or column-gap or gap.

  #####  Describe what happens when you have more content than defined tracks.
    The implicit grid takes over and it auto flows the content to another row by default. You can however specify that you want content to auto flow in a column pattern instead.

  #####  How could you change the size for those undefined tracks?
    Specify the size with the 'grid-auto(rows/columns): size here' property.