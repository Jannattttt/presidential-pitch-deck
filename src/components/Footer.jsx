import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Reset Ghana Presidential Devotional</h3>
            <p>An Interfaith National Prayerthon to Birth the Ghana We Want Together</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#vision">Vision</a>
                </li>
                <li>
                  <a href="#structure">Structure</a>
                </li>
                <li>
                  <a href="#timeline">Timeline</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#action">Action</a>
                </li>
                <li>
                  <a href="#news-feed">News</a>
                </li>
                <li>
                  <a href="#outcomes">Outcomes</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Reset Ghana Presidential Devotional. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

