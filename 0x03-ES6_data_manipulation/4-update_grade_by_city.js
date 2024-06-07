export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((st) => st.location === city).map((st) => ({ ...st, grade: newGrades.filter((g) => g.studentId === st.id).map((g) => g.grade)[0] || 'N/A' }));
}
