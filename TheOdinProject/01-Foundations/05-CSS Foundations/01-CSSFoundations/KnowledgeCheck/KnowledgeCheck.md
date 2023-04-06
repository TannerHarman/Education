#### Knowledge Check

   ##### What are the main differences between external, internal, and inline CSS?
    The main difference is where the styles are located for the elements they are changing. The cleanest is having external sheets. It helps seperate the code so things can stay organized. In certain frameworks though, inline styles are utilized in a certain fashion to help with narrow scoping.
   
   ##### What is the syntax for class and ID selectors?
    Class Selector - '.'
    ID Selector - '#'
   
   ##### How would you apply a single rule to two different selectors?
    You can group selectors to the rullsets  
  ```css 
    #id, .class {
      ruleset
      }
  ```
   
   ##### Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?
    ```css
      #id.title {
        ruleset
      }
    ```

   ##### What does the descendant combinator do?
    It allows you to specify an element using it's parent along with the element in question. It gives you more specificity so you can isolate an element that might have a similar class or tag as another in the page.
   
   ##### Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?
    Class selector is more specific in all cases than a type selector. It will take precident over any combination of type selectors.

#### Takeaways

  #### Chaining Selectors
    I've build numerous websites and generally use custom CSS instead of frameworks for my styling. I never knew that you could chain selectors in CSS like this. I always put a space or angle bracket for selecting children elements, but never chained them without one to isolate a multi class/id element. I found it to be very cool when I saw it here.