import './App.css'
import StudentCard from './components/StudentCard'
import ClassCard from './components/ClassCard'

function App() {
  return (
    <main className="app-shell">
      <ClassCard title="Advanced Programming for IT" subtitle="Technology High School">
        <div className="squad">
          <StudentCard student={{ name: 'Juliano M. Ataides', id: '204517', grade: '10th', role: 'Team Lead' }} />
          <StudentCard student={{ name: 'Hailey Ferreira', id: '318246', grade: '11th', role: 'Note Taker' }} />
          <StudentCard student={{ name: 'Joshua Chimeremeze Fineboy-Mark', id: '471093', grade: '9th', role: 'Researcher' }} />
          <StudentCard student={{ name: 'Steven R. Gonell', id: '602158', grade: '12th', role: 'Presenter' }} />
          <StudentCard student={{ name: 'Darius Gabriel Macanela-Landi', id: '155820', grade: '10th', role: 'Designer' }} />
          <StudentCard student={{ name: 'Yanzel Mejia', id: '628245', grade: '12th', role: 'Coder' }} />
          <StudentCard student={{ name: 'Kaira Ximena Mora', id: '284673', grade: '9th', role: 'Team Lead' }} />
          <StudentCard student={{ name: 'David T. Moreno-Viera', id: '910347', grade: '12th', role: 'Coder' }} />
          <StudentCard student={{ name: 'Rodney Morris', id: '563218', grade: '10th', role: 'Timekeeper' }} />
          <StudentCard student={{ name: 'Elhoussanie Nouri', id: '408792', grade: '11th', role: 'Researcher' }} />
          <StudentCard student={{ name: 'Liz Abigail Osorto', id: '628245', grade: '9th', role: 'Note Taker' }} />
          <StudentCard student={{ name: 'Kenneth Eliezer Paz Serrano', id: '820614', grade: '12th', role: 'Presenter' }} />
          <StudentCard student={{ name: 'Yandel Quinapanta', id: '246931', grade: '9th', role: 'Editer' }} />
          <StudentCard student={{ name: 'Rous Mery Rosario Tirado', id: '708152', grade: '10th', role: 'Team Lead' }} />
          <StudentCard student={{ name: 'Camila Sanchez', id: '483716', grade: '11th', role: 'Presenter' }} />
          <StudentCard student={{ name: 'Jean Chrys Santander', id: '591240', grade: '12th', role: 'Timekeeper' }} />
          <StudentCard student={{ name: 'Anthony Miguel Siri', id: '164508', grade: '9th', role: 'Researcher' }} />
        </div>
      </ClassCard>
    </main>
  )
}

export default App
