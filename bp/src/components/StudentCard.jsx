import '../styles/StudentCard.css'

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Student ID: {student.id}</p>
      <p>Grade: {student.grade}</p>
      <p>Role: {student.role}</p>
    </div>
  );
}

export default StudentCard;