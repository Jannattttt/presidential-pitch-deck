import "../styles/Title.css";
import image3 from "../assets/title.jpg";

const Title = () => {
  return (
    <section id="community" className="community">
      <div className="container">
        <div className="section-title">
          <h2>Title Slide</h2>
        </div>

        <div className="community-grid">
          <img 
            src={image3} 
            alt="Community Engagement" 
            className="community-image"
          />
          <div className="community-content">
            <div className="community-card">
              <h3>TITLE</h3>
              <p>Resetting Ghana Presidential Devotional</p>
            </div>

            <div className="community-card">
              <h3>SUBTITLE</h3>
              <p>An Interfaith National Prayerthon to Birth the Ghana We Want Together</p>
            </div>

            <div className="community-card">
              <h3>PRESENTED BY</h3>
              <h4>H.E. Rev Dr. Princess Ocansey</h4>
              <ul>
                <li>Executive Chairperson, Nekotech Center of Excellence</li>
                <li>Founder, Africa-US Presidential Forum on STEM AI MBA</li>
                <li>Founder, Nekotech Abraharmony: Interfaith Center for Peace and Diplomacy</li>
                <li>US White House Presidential Lifetime Achievement Awardee by President Joe Biden</li>
              </ul>
              {/* <p>Executive Chairperson, Nekotech Center of Excellence</p>
              <p>Founder, Africa-US Presidential Forum on STEM AI MBA</p>
              <p>Founder, Nekotech Abraharmony: Interfaith Center for Peace and Diplomacy</p>
              <p>US White House Presidential Lifetime Achievement Awardee by President Joe Biden</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
