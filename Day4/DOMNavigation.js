/*TASK:
DOM children
importance: 5
Look at this page:

<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>
For each of the following, give at least one way of how to access them:

The <div> DOM node?
The <ul> DOM node?
The second <li> (with Pete)?
*/

let div = document.body.firstChild;



/*SOLUTION:
There are many ways, for instance:

The <div> DOM node:

document.body.firstElementChild
// or
document.body.children[0]
// or (the first node is space, so we take 2nd)
document.body.childNodes[1]
The <ul> DOM node:

document.body.lastElementChild
// or
document.body.children[1]
The second <li> (with Pete):

// get <ul>, and then get its last element child
document.body.lastElementChild.lastElementChild
*/

/*TASK:
The sibling question
importance: 5
If elem – is an arbitrary DOM element node…

Is it true that elem.lastChild.nextSibling is always null?
Is it true that elem.children[0].previousSibling is always null ?
*/



/*SOLUTION:
Yes, true. The element elem.lastChild is always the last one, it has no nextSibling.
No, wrong, because elem.children[0] is the first child among elements. But there may exist non-element nodes before it. So previousSibling may be a text node.
Please note: for both cases if there are no children, then there will be an error.

If there are no children, elem.lastChild is null, so we can’t access elem.lastChild.nextSibling. And the collection elem.children is empty (like an empty array []).
*/



/*TASK:
Select all diagonal cells
importance: 5
Write the code to paint all diagonal table cells in red.

You’ll need to get all diagonal <td> from the <table> and paint them using the code:

// td should be the reference to the table cell
td.style.backgroundColor = 'red';
The result should be:


*/

let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
table.rows[i].cells[i].style.background = "red";
}


/*SOLUTION:
We’ll be using rows and cells properties to access diagonal table cells.

  <script>
    let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }
  </script>
*/