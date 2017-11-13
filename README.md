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