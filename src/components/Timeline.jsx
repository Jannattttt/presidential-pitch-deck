import "../styles/Timeline.css"

const Timeline = () => {
  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <div className="section-title">
          <h2>Timeline</h2>
        </div>

        <div className="timeline-content">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-info">
              <h3>START DATE:</h3>
              <p>March 6, 2025</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-info">
              <h3>END DATE:</h3>
              <p>December 6, 2025</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-info">
              <h3>CELEBRATION:</h3>
              <p>December 7, 2025 marking one year since Ghana voted for change.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-info">
              <h3>SIGNIFICANCE:</h3>
              <p>
                This period symbolizes reflection, unity, action towards the best versions of ourselves and hope for a
                transformed Ghana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

