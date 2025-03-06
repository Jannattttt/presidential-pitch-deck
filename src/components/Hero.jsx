import "../styles/Hero.css"

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Resetting Ghana Presidential Devotional</h1>
        <h2>An Interfaith National Prayerthon to Birth the Ghana We Want Together</h2>
        <p className="hero-quote">
          "Behold Ghanaians, I pray that you may prosper in all things, and be in health, just as your soul prospers."
        </p>
        <div className="hero-subtitle">PITCH DECK FOR HIS EXCELLENCY DRAMANI MAHAMA</div>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero

