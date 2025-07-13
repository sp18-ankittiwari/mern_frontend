
// addStudent 
function addStudent(students, newStudent){
    if (!newStudent || typeof newStudent !== 'object' || newStudent.id == null){
        console.error("invalid student");
        return [...students];
    }

    const check = students.some(s => s.id === newStudent.id);
    if (check){
        console.warn ("This Id already present");
        return [...students];
    }

    return [... students , newStudent];
}





// removeById

function removeStudentById(students, id){
    if (typeof id !== 'number') {
        console.error("Invalid student ID.");
        return [...students];
    }

    const result = students.filter(s => s.id !== id);

    if (result.length === students.length){
        console.warn("No student is removed");
    }
    return result;
}





// update student name
function updateStudentName(students, id, newName){
    if(typeof id !== 'number' || typeof newName !== 'string' || newName.trim() === ""){
        console.error("Invalid input for updating the student name");
        return [...students];
    }

    let studentFound = false;

    const updatedStudent =  students.map (student => {
        if (student.id === id){
            studentFound = true ;
            return{...student , name: newName.trim()};
        }
        return student;
    })

    if (!studentFound){
        console.warn ("no student found");
    }
    return updatedStudent;
}





// getstudentById

function getStudentById(students, id){
    if (typeof id !== 'number'){
        console.error('Invalid Id');
        return null
    }
    const student = students.find(s => s.id === id);
    if (student){
        return {...student};
    }else {
        return null;
    }
}






// calculate average 
function calculateAverageGrade(student) {
    if (!student || !Array.isArray(student.courses)) {
        console.error("Invalid student data. Courses missing.");
        return 0;
    }

    const result = student.courses
        .map(c => c.grade).filter(grade => typeof grade === 'number' && grade >= 0);

    if (result.length === 0) {
        console.error("No valid grade data found.");
        return 0;
    }

    const sum = result.reduce((a, b) => a + b, 0);
    return parseFloat((sum / result.length).toFixed(2));
}





// get student only whose avg greater then thresold avg

function getHonorRoll(students, threshold){
    if (typeof threshold !== 'number' || threshold < 0) {
        console.error("Invalid threshold value.");
        return [];
    }
    return students.filter(student => calculateAverageGrade(student) >= threshold);
} 






// get all student details of spcefic coursres

function getCourseRoster(students, courseName){
    if (courseName.trim() === "" || typeof courseName !== 'string'){
        console.error("Invalid user Name");
        return [];
    }
    return students.flatMap(student => 
        student.courses.filter(course => course.code === courseName.trim()).map (course => ({id : student.id , name : student.name , grade : course.grade}))
    )
}



export {
  addStudent, removeStudentById, updateStudentName, getStudentById, calculateAverageGrade, getHonorRoll, getCourseRoster
};









