#### Knowledge Check

  ##### How would you declare a custom property with a name of text-color?
  ```css
    --variable-name: some-value;
  ```

  ##### How would you access a custom property with a name of background-color?
  ```css
    someSelector {
      someProperty: var(--variable-name)
    }
  ```

  ##### Where would you declare a custom property to have its scope be global and accessible by all other selectors?
    In the :root Element.


  ##### Where would you declare a custom property so that a user’s theme setting from their OS or browser was taken into account?
    You can use the :root element inside of a 'prefers-color-scheme:' @media query