import "../styles/Hero.css";
import image from "../assets/jdm.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left Side: Image */}
        <div className="hero-image">
          <img src={image} alt="Ghana Flag" />
        </div>

        {/* Right Side: Text Content */}
        <div className="hero-content">
          <h1>Resetting Ghana Presidential Devotional</h1>
          <h2>An Interfaith National Prayerthon to Birth the Ghana We Want Together</h2>
          <p className="hero-quote">
            "Behold Ghanaians, I pray that you may prosper in all things, and be in health, just as your soul prospers."
          </p>
          <div className="hero-subtitle">PITCH DECK FOR HIS EXCELLENCY JOHN DRAMANI MAHAMA</div>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
