
function createGradeFilter (min , max){
    if (typeof min !== 'number' || typeof max !== 'number' || min > max ){
        throw new Error ("invalid min or max values for grade filter");
    }

    return function(student){
        if (!student || !Array.isArray(student.courses)){
            return false;
        }

        return student.courses.some(course => course.grade >= min && course.grade <= max);
    }
}

export {createGradeFilter};
