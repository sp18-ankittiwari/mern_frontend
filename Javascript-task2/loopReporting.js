import {calculateAverageGrade} from './coreUtilities.js';


// print student summaries
const  printStudentSummaries = (students) => {
    if (!Array.isArray(students) || students.length === 0) {
        console.warn("Invalid or empty student data.");
        return;
    }

    const summaries = students.map(student => {
        const avg = calculateAverageGrade(student);
        return {
            id: student.id,
            name: student.name,
            avggrade: avg
        };
    });

    return summaries;
}


// first under age 
const findFirstUnderage = (students , ageLimit) => {
    if (!ageLimit || typeof ageLimit !== 'number' || !students){
        console.error("Invalid ageLimit or students");
        return null;
    }

    // students.forEach ((student) => {
    //     if (student.age < ageLimit){
    //         return {...student};
    //     }
    // })

    const underageStudent = students.find(student => student.age < ageLimit);
    return underageStudent ? { ...underageStudent } : null;
}




// countFailingCourse 

const countFailingCourse = (students , passMark) => {
    if (!students || !passMark || typeof passMark !== 'number'){
        console.error("invalid student data or passmark");
        return 0;
    }

    let count = 0 ;
    let i = 0 ;
    while (i < students.length){
        const student = students[i];
        let j = 0 ;
        do {
            if (student.courses[j] && student.courses[j].grade < passMark){
                count ++ ;
            }
            j++ ;
        }while (j < student.courses.length);

        i++ ;
    }

    return count ;
}



export { calculateAverageGrade, printStudentSummaries, findFirstUnderage,countFailingCourse };


