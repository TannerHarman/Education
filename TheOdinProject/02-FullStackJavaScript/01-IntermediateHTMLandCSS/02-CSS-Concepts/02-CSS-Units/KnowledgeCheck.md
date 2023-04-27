#### Knowledge Check

  ##### Why would you want to use em or rem for font-size instead of px?
    Relative units like these respect the font size settings of the user. So if they change the default font sizes of your browser, then they will scale accordingly. 

  ##### What are some instances where you might want to use vh and vw?
    Some people like to do it for font sizes, with clamp() these days you can have a scalable font with a max and min setting. Other use cases are for specific layouts where the content of two on screen elements are independent of one another. Or if you don't want the whole page to scroll.

  ##### What are some instances where you might want to use px instead of a relative unit?
     The rule of thumb from the first article was font size is relative while everything else should be fixed. I like this concept because I don't like padding and margins becoming all screwy.