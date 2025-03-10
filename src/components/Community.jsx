import "../styles/Community.css";
import image3 from "../assets/comm.jpg";

const Community = () => {
  return (
    <section id="community" className="community">
      <div className="container">
        <div className="section-title">
          <h2>Community Engagement</h2>
        </div>

        <div className="community-grid">
          <img 
            src={image3} 
            alt="Community Engagement" 
            className="community-image"
          />
          <div className="community-content">
            <div className="community-card">
              <h3>INVOLVEMENT OF 48 LEADERS</h3>
              <p>24 Christian leaders and 24 Imams will lead prayer sessions.</p>
            </div>

            <div className="community-card">
              <h3>NATIONAL REFLECTION JOURNAL</h3>
              <p>Encourages personal and national reflections, fostering deeper engagement with the devotional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
