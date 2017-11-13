Redux:
Redux is used for application state management and it is making state handling more predictable and visible

This complexity is difficult to handle as we're mixing two concepts 
that are very hard for the human mind to reason about: mutation and asynchronicity.

Libraries like React attempt to solve this problem in the view layer by removing both 
asynchrony and direct DOM manipulation. 

However, managing the state of your data is left up to you. 

This is where Redux enters.

Redux is doing the same to data that React is doing for DOM.



In a technical nutshell:
Redux maintains the state of an entire application in a single immutable state tree, which can’t be changed directly.
When something changes, a new object is created to the tree using actions and reducers

Redux itself is very simple and got popular quickly


Designing Store:
- Normalize State Shape
- Each type of data gets its own "table" in the state.
- Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
- Any references to individual items should be done by storing the item's ID.
- Arrays of IDs should be used to indicate ordering.

- Because each item is only defined in one place, we don't have to try to make changes in multiple places if that item is updated.
- The reducer logic doesn't have to deal with deep levels of nesting, so it will probably be much simpler.
