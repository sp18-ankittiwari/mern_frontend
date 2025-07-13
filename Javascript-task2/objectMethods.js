
// printCourseStats

function printCourseStats(students) {
    const courseMap = students.reduce((acc, student) => {
        student.courses.forEach(course => {
            if (!acc[course.code]) {
                acc[course.code] = [];
            }
            acc[course.code].push(course.grade);
        });
        return acc;
    }, {});

    const result = [];

    for (const [courseName, grades] of Object.entries(courseMap)) {
        if (grades.length === 0) continue;
        const min = Math.min(...grades);
        const max = Math.max(...grades);
        const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;
        result.push({
            Course: courseName,
            Min: min,
            Max: max,
            Avg: avg.toFixed(2)
        });
    }

    return result;
}

export { printCourseStats };

