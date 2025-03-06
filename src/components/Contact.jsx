import "../styles/Contact.css"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Information</h2>
        </div>

        <div className="contact-content">
          <p>
            This pitch deck serves as a blueprint for presenting the Reset Ghana Presidential Devotional to President
            John Dramani Mahama, highlighting its purpose, structure, community involvement, and the collaborative
            spirit needed to achieve a transformative vision for Ghana.
          </p>

          <div className="contact-details">
            <p>
              <strong>Mr. David Mensah</strong>
            </p>
            <p>Office of H.E. Rev. Dr. Princess A.K. Ocansey</p>
            <p>Email: info@nekotechcenter.org</p>
            <p>Phone: 19409771707 / +233 549109797</p>
            <p>Website: www.nekotechcenter.org</p>
          </div>

          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

