import '../styles/ClassCard.css'

function ClassCard({title, subtitle, children}) {
  return (
    <div className="class-card">
      <header>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      <section>
        {children}
      </section>
    </div>
  )
}

export default ClassCard
