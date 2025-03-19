  import "../styles/Cover.css"
  import image4 from "../assets/devotional.jpg";
  
  const Cover = () => {
    return (
      <section id="structure" className="structure">
        <div className="container">
          <div className="section-title">
            <h2>Devotional</h2>
          </div>
  
          <div className="structure-content">
            <div className="structure-image">
              <div className="structure-image-placeholder">
                <img src={image4} alt="Foreword Image 1" />
              </div>
            </div>
  
            <div className="structure-details">
                <h2>
                    DEVOTIONAL FULL COVER FRONT AND BACK
                </h2>
              {/* <ul className="structure-list">
                <li>
                  <span className="structure-highlight">Duration:</span> 7 days, 7 weeks, 7 months (totaling 9 months)
                </li>
                <li>
                  <span className="structure-highlight">Scriptures & Surahs:</span> Aligning 7 Christian scriptures with 7
                  Muslim surahs corresponding to the 7 chapters of the NDC manifesto.
                </li>
                <li>
                  <span className="structure-highlight">Focus on Three Levels of Prayer:</span>
                  <ul>
                    <li>For President Mahama</li>
                    <li>For all leaders</li>
                    <li>For all Ghanaians at home and abroad</li>
                  </ul>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Cover
  
  