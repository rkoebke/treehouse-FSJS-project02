// Project 2 - FSJS Tech Degree
// Robert Koebke
// Project Focus: Pagination
// **  REMOVE ** resource - https://github.com/j-nordell/FSJS-Project2/blob/master/js/script.js

// Variable to hold all students on the page
const studentList = document.querySelectorAll('.student-item');
// Variable to show how many, at most, to show per page
const perPage = 10;

// Hide all students on the page
function hideList() {
  for(let i = 0; i < studentList.length; i += 1) {
    studentList[i].style.display = 'none';
  }
}

// Show 10 students at a time
function showPage(pageNumber, studentList) {
  hideList(studentList);
  for(let i = 0; i < studentList.length; i += 1) {
    if(i < pageNumber * perPage && i + 1 > (pageNumber - 1) * perPage) {
      studentList[i].style.display = 'block';
    }
  }
 }

// Test the showPage function
// showPage(1, studentList);

// Create pagination links
function appendPageLinks(studentList) {
  let numberOfPages = Math.ceil(studentList.length / perPage);
  
}


// function appendPageLinks(/* take a student list as an argument */) {
     // determine how many pages for this student list
     // create a page link section
     // “for” every page
         // add a page link to the page link section
     // remove the old page link section from the site
     // append our new page link section to the site
     // define what happens when you click a link
         // Use the showPage function to display the page for the link clicked
         // mark that link as “active”
 // }
