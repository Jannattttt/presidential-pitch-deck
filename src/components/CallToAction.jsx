import "../styles/CallToAction.css"

const CallToAction = () => {
  return (
    <section id="call-to-action" className="call-to-action">
      <div className="container">
        <div className="section-title">
          <h2>The Call to Action</h2>
        </div>

        <div className="cta-grid">
          <div className="cta-card">
            <h3>Invitation to H.E. President John Dramani Mahama:</h3>
            <p>Support and lead the Reset Ghana Presidential Devotional as a unifying national initiative.</p>
          </div>

          <div className="cta-card">
            <h3>Collaboration with Religious Leaders:</h3>
            <p>Foster partnerships with faith-based organizations to amplify the reach and impact of the prayerthon.</p>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="primary-button">Join the Movement</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

