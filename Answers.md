1. What problem does the context API help solve?

   - It was created with a main purpose of solving the problem of 'prop drilling'. It does this by enabling us to share specific forms of data across all levels of the app.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   - ACTIONS: details what operations you would like your app to perform.
   - REDUCERS: puts your operations(actions), into an automated function that performs given actions with given state.
   - STORE: holds the state in an unseen level which can be passed down component level on demand for easy access and more logical distribution.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   - APPLICATION STATE: State held in the highest level of the App. Therefore all proceeding components may have access to state by prop drilling.
   - COMPONENT STATE: State specifically held and used in a specific component. Typically used exclusively by said component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   - Redux-Thunk is a middleware that allows action creators return a function instead of an action object. This allows for asynchronous actions between store and app.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

   - Although it's given me an absolute thrashing, I would pick Redux. The amount of code used can be daunting but it allows for so much. The more time I put into it, the more I realize how powerful it is. If used correctly it can create incredible pages and apps. I'm truly looking forward to implementing Redux in the future.
