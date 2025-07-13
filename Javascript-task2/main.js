import { students , courses , instructors} from "./data.js";
import {addStudent, removeStudentById, updateStudentName, getStudentById, calculateAverageGrade, getHonorRoll, getCourseRoster} from './coreUtilities.js';
import{printStudentSummaries , findFirstUnderage , countFailingCourse } from './loopReporting.js';
import { printCourseStats} from './objectMethods.js';
import {createGradeFilter} from './closures.js';
import {getCoursesByInstructor , totalCreditsPerStudent , studentTranscript, courseAverages ,topStudentsByCourse} from './relationalOps.js' ;

const studentData = [...students];
const courseData = [...courses];
const instructorData = [...instructors];

// console.table(courseData);
// console.table(instructorData);



// ==============   section A testing ===============

// add
// const newStudent = { id: 21, name: "Ankit tiwari", age: 23, courses: [] };
// const res = addStudent(studentData, newStudent);
// console.table(res);

// remove
//console.log(removeStudentById(studentData , 2));

// update 
//console.log(updateStudentName(studentData , 2 , "Ankit"));

// getstudentByid
// const singleStudent = getStudentById(studentData , 4);
// console.log(singleStudent);

// calculateAverageGrade 
// console.log(calculateAverageGrade(singleStudent));

//get student only whose avg greater then thresold avg
// console.log(getHonorRoll(studentData , 80));

// //getCourseRoster
// console.log(getCourseRoster(students, "Calculus I"));


// add student

const output = document.getElementById('output-container');



// Helper Function to create table 

function renderTable(dataArray){
    const outputContainer = document.getElementById("output-container");
    outputContainer.innerHTML = ''; 

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
        outputContainer.innerHTML = "<p>No data to display.</p>";
        return;
    }

    const table = document.createElement("table");
    table.classList.add("output-table");

    // table head
    const headers = Object.keys(dataArray[0]);
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    //table body
    const tbody = document.createElement("tbody");

    dataArray.forEach(item => {
        const row = document.createElement("tr");
        headers.forEach(header => {
            const td = document.createElement("td");

            if (Array.isArray(item[header])) {
                td.innerHTML = item[header].map(val =>
                    typeof val === 'object' ? JSON.stringify(val) : val
                ).join("<br>");
            } else if (typeof item[header] === 'object' && item[header] !== null) {
                td.textContent = JSON.stringify(item[header]);
            } else {
                td.textContent = item[header] ?? '';
            }

            row.appendChild(td);
        });
        tbody.appendChild(row);
    });


    table.appendChild(tbody);
    outputContainer.appendChild(table);

}




// =====================section A ==================================

// addstudent 
const addstud = document.getElementById('add-student');
addstud.addEventListener('submit', async(e) => {
    e.preventDefault();

    const id = parseInt(document.getElementById('add-id').value);
    const name = document.getElementById('add-name').value;
    const age = parseInt(document.getElementById('add-age').value);
    const newStudent = { id, name, age, courses: [] };
    const res = await addStudent(studentData, newStudent);
    renderTable(res);
     
});

// remove
document.getElementById('remove').addEventListener('click', async() => {
  const id = parseInt(document.getElementById('remove-id').value);
  console.log(id);
  if (isNaN(id)) {
    alert("Please enter a valid ID.");
    return;
  }
  const res = await removeStudentById(studentData, id);  
  renderTable(res);  
});


//updateName

document.getElementById('update-button').addEventListener('click' , async() => {
    const id = parseInt(document.getElementById('update-id').value);
    const name = document.getElementById('update-name').value;

    const res = await updateStudentName(studentData , id , name);
    renderTable(res);
});

// get student by id
document.getElementById('get-student-btn').addEventListener('click' , async()=> {
    const id = parseInt(document.getElementById('student-id').value);
    console.log(id);
    const singleStudent = await getStudentById(studentData , id)
     if (singleStudent) {
        renderTable([singleStudent]); 
    } else {
        renderTable([]); 
        alert("Student not found!");
    }

});


//thresold get student those avg greateer than thresold
document.getElementById('thresold-btn').addEventListener('click' , async() => {
    const thresholdInput = document.getElementById('thresold-value').value;
    const threshold = parseFloat(thresholdInput); 
    console.log(threshold);
    const res = await getHonorRoll(studentData , threshold);
    renderTable(res);
})


// get student data behalf of courses
document.getElementById('get-course-roster').addEventListener('click', async() => {
    const courseName = document.getElementById('course-name').value.trim();
    console.log(courseName);
    const result = await getCourseRoster(studentData, courseName);
    if (result.length === 0) {
        alert(`No students found for the course "${courseName}".`);
    }
    renderTable(result);
});



// ==========================Lets start section B ============================


// section-b testing 

// const StudentSummaries  = printStudentSummaries(studentData);
// console.table(StudentSummaries);

// const res = findFirstUnderage(studentData , agelimit);
// console.table(res);

//const res = countFailingCourse (studentData , mark);
// console.table(res);

// const findFirst = findFirstUnderage(studentData , 20);
// console.table(findFirst);

// get StudentSummaries
document.getElementById('StudentSummaries-btn').addEventListener('click' , async()=> {
    const res = await printStudentSummaries(studentData);
    renderTable(res);
});

// get first underage 
document.getElementById('age-btn').addEventListener('click' , async()=> {
    const age = document.getElementById('age').value ;
    const agelimit = parseFloat(age);
    console.log(age);
    const res = await findFirstUnderage(studentData , agelimit);
    if (res) {
        renderTable([res]);
    } else {
        document.getElementById("output-container").innerHTML = "<p>No underage student found.</p>";
    }
})

// get number of failing student
document.getElementById('passmark-btn').addEventListener('click' , async()=> {
    const passMark =  document.getElementById('passmark').value;
    const mark = await parseFloat(passMark);
    console.log(mark);
    const res = countFailingCourse (studentData , mark);
    document.getElementById("output-container").innerHTML = `Count : ${res} these are the student who get failed based on your Passmark`;
})




// =============== Let start Section C objectmethods ==========================


// test 
// const stats = printCourseStats(studentData);
// console.table(stats);

// get course stats    
document.getElementById('course-stats-btn').addEventListener('click' , async() => {
    const stats = await printCourseStats(studentData);
    renderTable(stats); 
})




// ================= Let start Section D closure ============================


//  const closureReturnFunction = createGradeFilter(min , max);
//  const filteredStudents = studentData.filter(closureReturnFunction);
// console.table(filteredStudents);



document.getElementById('grade-filter-btn').addEventListener('click', async() => {
    const min = parseFloat(document.getElementById('min-grade').value);
    const max = parseFloat(document.getElementById('max-grade').value);

    const closureReturnFunction = await createGradeFilter(min , max);
    const filteredStudents = studentData.filter(closureReturnFunction);
    renderTable(filteredStudents);

});



// =======================Let start Section E ============================


// const result =  getCoursesByInstructor(courseData, instructorId);
// console.table(result);


// const result = totalCreditsPerStudent(studentData , courseData);
// console.table(result);


// const result = studentTranscript(studentData, courseData, instructorData);
// console.table(result);


// const result = courseAverages(studentData);
// console.table(result);



document.getElementById('get-courses-btn').addEventListener('click' , async() => {
    const instructorIdInput = document.getElementById('instructor-id').value;
    const instructorId = parseInt(instructorIdInput);
    console.log(instructorId);
    try {
        const result = await getCoursesByInstructor(courseData, instructorId);
        console.log(result);
        if (result.length === 0) {
            alert("No courses found for this instructor");
        }
        renderTable(result);
    } catch (error) {
        console.error(error);
        alert("Error fetching courses.");
    }
});



document.getElementById('total-credits-btn').addEventListener('click' , async()=> {
    try {
        const result = await totalCreditsPerStudent(studentData , courseData);
        console.log(result);
        if (result.length === 0){
            console.log('no data found');
        }
        console.table(result);
        renderTable(result);
    }catch(error){
        console.error("Error getting" , error);
    }

});



document.getElementById('get-transcript-btn').addEventListener('click', async () => {
  try {
    const result = await studentTranscript(studentData, courseData, instructorData);
    console.table(result);
    renderTable(result); 
  } catch (error) {
    console.error("Error getting transcripts ", error);
    
  }
});



document.getElementById('course-averages-btn').addEventListener('click', async () => {
  try {
    const result = await courseAverages(studentData);
    renderTable(result); 
  } catch (err) {
    console.error("Error in computing course averages:", err);
  }
});





document.getElementById('top-students-btn').addEventListener('click', async () => {
  const code = document.getElementById('course-code').value;
  const n = parseInt(document.getElementById('top-n').value);
  try {
    const topStudents = await topStudentsByCourse(studentData, code, n);
    if (topStudents.length === 0) {
      console.log('No students found for this course.');
    }
    console.log(topStudents);
    renderTable(topStudents);
  } catch (err) {
    console.error("error getting the top student" ,err);
  }
});

