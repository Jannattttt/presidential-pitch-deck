import "../styles/VisualAppeal.css"

const VisualAppeal = () => {
  return (
    <section id="visual-appeal" className="visual-appeal">
      <div className="container">
        <div className="section-title">
          <h2>Visual Appeal</h2>
        </div>

        <div className="visual-grid">
          <div className="visual-card">
            <div className="visual-image cover-design"></div>
            <h3>COVER DESIGN</h3>
            <p>A beautifully crafted cover featuring a map of Ghana with its 16 regions and their capitals.</p>
          </div>

          <div className="visual-card">
            <div className="visual-image inside-spread"></div>
            <h3>INSIDE SPREAD</h3>
            <p>
              A visual representation of all Ghanaian leaders from independence to the present, highlighting our
              collective journey from the first to fourth republic- interwoven with military coups.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisualAppeal

