import "../styles/Outcomes.css"

const Outcomes = () => {
  return (
    <section id="outcomes" className="outcomes">
      <div className="container">
        <div className="section-title">
          <h2>Expected Outcomes</h2>
        </div>

        <div className="outcomes-grid">
          <div className="outcome-card">
            <div className="outcome-icon transformational"></div>
            <h3>TRANSFORMATIONAL IMPACT:</h3>
            <p>A unified nation praying for peace, progress, and prosperity</p>
          </div>

          <div className="outcome-card">
            <div className="outcome-icon relationships"></div>
            <h3>STRENGTHENED RELATIONSHIPS:</h3>
            <p>Building bridges between communities of faith and fostering national cohesion.</p>
          </div>

          <div className="outcome-card">
            <div className="outcome-icon birth"></div>
            <h3>BIRTH OF A NEW GHANA AND NEW GHANAIANS:</h3>
            <p>Through collective effort and faith, we can achieve the Ghana we envision together.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Outcomes

