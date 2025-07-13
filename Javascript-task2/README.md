
# Section-A
1. addStudent(students, newStudent)
Purpose:
Adds a new student to the array if their id is not already present.
Concepts Used:
spread operator [...]: returns a new array (immutability)
some(): checks for duplicate ID
Mini Concept:
[...array, newItem] → creates a new array with the item added
array.some(x => x.id === newId) → returns true if match found

2. removeStudentById(students, id)
Purpose:
Removes a student from the list by their ID.
Concepts Used:
filter(): excludes the student with the matching ID
Mini Concept:
array.filter(x => x.id !== targetId) → removes element by condition

3. updateStudentName(students, id, newName)
Purpose:
Updates the name of a student by their ID.
Concepts Used:
map(): creates a new updated array
trim(): cleans whitespace
Object spread ...student: immutably updates properties
Mini Concept:
array.map(item => item.id === id ? {...item, name: "New"} : item)

4. getStudentById(students, id)
Purpose:
Fetches a student by ID.
Concepts Used:
find(): returns the first match
Defensive programming: returns null if invalid or not found
Mini Concept:
array.find(x => x.id === id) || null

5. calculateAverageGrade(student)
Purpose:
Calculates the average grade across a student's courses.
Concepts Used:
map() and filter() to collect numeric grades
reduce() for summing grades
parseFloat(...toFixed(2)) to round to 2 decimals
Mini Concept:
grades.reduce((a, b) => a + b) / grades.length

6. getHonorRoll(students, threshold)
Purpose:
Returns students whose average grade is above a given threshold.
Concepts Used:
filter() in combination with calculateAverageGrade()
Mini Concept:
array.filter(student => calculateAverageGrade(student) > threshold)

7. getCourseRoster(students, courseCode)
Purpose:
Returns a list of { id, name, grade } for students enrolled in a specific course.
Concepts Used:
flatMap(): combines mapping and flattening
filter() to match course code
Object destructuring for output formatting
Mini Concept:
flatMap(student => student.courses
  .filter(c => c.code === courseCode)
  .map(c => ({ id: student.id, name: student.name, grade: c.grade }))
)







#   Section-B
1. printStudentSummaries(students)
Purpose:
Prints a quick summary of each student including ID, name, and average grade.
Concepts Used:
for...of loop for iteration
Function composition (uses calculateAverageGrade)
Mini Concept:
for (const item of array) { ... } → clean iteration over lists
Uses clean formatting to display derived data.

2. findFirstUnderage(students, ageLimit)
Purpose:
Returns the first student whose age is less than the provided threshold.
Concepts Used:
find() for early exit
Destructuring and immutability ({ ...student })
Defensive programming (typeof, Array.isArray)
Mini Concept:
array.find(item => item.age < limit) → returns first match or undefined

3. countFailingCourse(students, passMark)
Purpose:
Counts how many course enrollments across all students fall below the passing grade.
Concepts Used:
Nested iteration using for...of
Manual counters (count++)
Defensive checks on student.courses and course.grade
Mini Concept:
for (const student of students) {
  for (const course of student.courses) {
    if (course.grade < passMark) count++;
  }
}







# Section-C
1. printStudentSummaries(students)
Purpose:
Prints a quick summary of each student including their ID, name, and average grade.
Concepts Used:
for...of: clean loop for iterating over an array
Template literals for formatted output
External function composition via calculateAverageGrade(student)
Mini Concept:
for (const student of students) {
  const avg = calculateAverageGrade(student);
  console.log(`ID: ${student.id} • Name: ${student.name} • AvgGrade: ${avg}`);
}
Great example of combining formatting + logic in a readable output function.

2. findFirstUnderage(students, ageLimit)
Purpose:
Returns the first student whose age is less than the given threshold.
Concepts Used:
.find() for early exit when condition matches
Defensive checks using typeof and truthiness
Object cloning using { ...student } for immutability
Mini Concept:
students.find(student => student.age < ageLimit);
Preferred over .forEach() for finding the first matching item.

3. countFailingCourse(students, passMark)
Purpose:
Counts how many course enrollments across all students fall below the pass mark.
Concepts Used:
Nested iteration: while and do...while used to navigate students and their courses
Manual counter (count++) to track failures
Conditional checks on course existence and grade
Mini Concept:
let count = 0;
for (const student of students) {
  for (const course of student.courses) {
    if (course.grade < passMark) count++;
  }
}








# Section-D
5. createGradeFilter(min, max)
Purpose:
Returns a custom filter function that checks if a student has any grade within the specified min to max range.
JavaScript Concepts Used:
Closures
The outer function createGradeFilter() returns an inner function that retains access to min and max even after the outer function has finished executing.
function createGradeFilter(min, max) {
  return function(student) {
    // has access to min and max
  };
}
This is a closure — it allows the returned function to “remember” the min and max values from its creation context.

Array.prototype.some()
Used to check if at least one course satisfies the grade condition.
return student.courses.some(course => course.grade >= min && course.grade <= max);
.some() returns true if any element in the array meets the condition.
Efficient: it stops as soon as the first match is found.





# Section-E
1. getCoursesByInstructor(courses, instructorId)
Purpose:
Returns a list of { code, title } for all courses taught by a specific instructor.
Concepts Used:
filter(): filters the course array
map(): transforms each matching course
async/await: simulates asynchronous behavior
Mini Concept:
array.filter(fn) → returns items where fn(item) is true  
array.map(fn) → transforms each item into a new structure

2. totalCreditsPerStudent(students, courses)
Purpose:
Calculates the total credits for each student by summing up the credits of all enrolled courses.
Concepts Used:
map(): to iterate over students and return new objects
reduce(): to sum course credits
find(): to match course codes with the master course list
Mini Concept:
array.reduce((sum, current) => sum + current.value, 0)

3. studentTranscript(students, courses, instructors)
Purpose:
Returns a list of students with their transcripts including course name, grade, and instructor.
Concepts Used:
map() inside map(): nested iteration
Optional chaining (courseData?.title)
find(): to relate course codes to instructors
Mini Concept:
Optional chaining ?. safely accesses properties even if object is null/undefined

4. courseAverages(students)
Purpose:
Calculates average grade per course across all students.

Concepts Used:
Object accumulation using reduce() and forEach()
Object.entries(): to loop through a key–value object
Math.min, Math.max, and manual averaging
Mini Concept:
Object.entries(obj).forEach(([key, value]) => ...)
This lets you loop through a dictionary-like object.

5. topStudentsByCourse(students, courseCode, n)
Purpose:
Returns top n students in a given course by grade.
Concepts Used:
map() to transform
filter(Boolean) to remove nulls
sort() to order by grade
Mini Concept:
array.sort((a, b) => b.score - a.score)
Sorts in descending order — like SQL's ORDER BY ... DESC.

# Common Utility: simulateAsync(data, delay)
Purpose:
Simulates delayed asynchronous behavior using a Promise.

Concept:
new Promise(resolve => setTimeout(() => resolve(data), delay));
Used to mimic server calls or database queries.



# Helper Functions
1. makeAsync(data, delay = 300)
Description:
This utility simulates asynchronous behavior using a Promise. It's especially useful in projects where you're mimicking API calls or want to delay execution artificially.

2. renderTable(data)
Description:
Renders any array of objects as a responsive HTML table on the page. This function dynamically generates the header and rows based on the keys of the objects.

# use of async await and Promise 
1. Used aync and await and Promise to make function return a promise like :
function makeAsync(data, delay = 300) {
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
}


2. Using async/await in main.js
I’ve used async/await syntax to handle asynchronous operations in your project. This is particularly useful when you're fetching or simulating data that takes time to return (like API calls or delayed computations). Here's how i doing it:
document.getElementById('total-credits-btn').addEventListener('click', async () => {
  try {
    const result = await totalCreditsPerStudent(studentData, courseData);
    renderTable(result);
  } catch (error) {
    console.error("Error getting total credits:", error);
  }
});
