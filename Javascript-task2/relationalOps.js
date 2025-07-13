import { courses, instructors, students } from "./data.js";


function makeAsync(data, delay = 300) {
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
}



// get courses by instructor
async function getCoursesByInstructor(courses  , instructorId){
    if(typeof instructorId !== 'number' || !instructorId){
        throw new Error ("Invalid instructor Id");
    }

    const result = courses.filter(course => course.instructorId === instructorId).map (course => ({code : course.code , title : course.title}));

    return makeAsync(result);
}



// total credits per student 
async function totalCreditsPerStudent(students, courses) {
  const result = students.map(student => {
    const totalCredits = student.courses.reduce((sum, courseEntry) => {
      const courseData = courses.find(c => c.code === courseEntry.code);
      return sum + (courseData ? courseData.credits : 0);
    }, 0);
    return {  id: student.id,  name: student.name,  totalCredits};
  });
  return await makeAsync(result); 
}





// student transcript
const studentTranscript = async(students , courses , instructors) => {
    const result = students.map (student => {
        const transcript = student.courses.map(courseEntry => {
            const courseData = courses.find(c => c.code === courseEntry.code);
            const instructorData = instructors.find(inst => inst.id === courseData.instructorId);
            return {course : courseData.title , grade : courseEntry.grade , instructorName: instructorData.name};
        })

        return { id: student.id, name: student.name, transcript };
    })

    return makeAsync(result);
}





async function courseAverages(students) {
    const courseMap = {};
    students.forEach(student => {
        student.courses.forEach(course => {
            if (!courseMap[course.code]) {
                courseMap[course.code] = [];
            }
            courseMap[course.code].push(course.grade);
        });
    });

    const result = Object.entries(courseMap).map(([course, grades]) => {
        const avgGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
        return { course, avgGrade: parseFloat(avgGrade.toFixed(2)) };
    });
    return makeAsync(result);
}






// topStudentsByCourse(students, courseCode, n)
async function topStudentsByCourse(students, courseCode, n){
    if (typeof courseCode !== 'string' || typeof n !== 'number' || n <= 0) {
        throw new Error("Invalid input: courseCode must be a string and n must be a positive number");
    }
    const ranked = students.map(student => {
        const course = student.courses.find(c => c.code === courseCode);
        return course ? {id: student.id, name: student.name, grade: course.grade} : null ;
    }).filter(Boolean);

    return ranked.sort ((a,b) => b.grade - a.grade).slice (0 , n);

}


export {getCoursesByInstructor , totalCreditsPerStudent , studentTranscript, courseAverages ,topStudentsByCourse} ;
