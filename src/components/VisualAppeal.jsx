import "../styles/VisualAppeal.css"
import image5 from "/public/cover.jpg";
import image6 from "/public/inner.jpg";

const VisualAppeal = () => {
  return (
    <section id="visual-appeal" className="visual-appeal">
      <div className="container">
        <div className="section-title">
          <h2>Visual Appeal</h2>
        </div>

        <div className="visual-grid">
          <div className="visual-card">
            <div className="visual-image cover-design">
              {/* <img src={image5} alt="Foreword Image 1" /> */}
            </div>
            <h3>COVER DESIGN</h3>
            <p>A beautifully crafted cover featuring a map of Ghana with its 16 regions and their capitals.</p>
          </div>

          <div className="visual-card">
            <div className="visual-image inside-spread">
              {/* <img src={image6} alt="Foreword Image 1" /> */}
            </div>
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

