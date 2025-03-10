import "../styles/Foreword.css";
import image1 from "../assets/psdt1.jpg";
import image2 from "../assets/psdt2.jpg";

const Foreword = () => {
  return (
    <section id="foreword" className="foreword">
      <div className="container">
        <div className="section-title">
          <h2>Forewords</h2>
        </div>

        <div className="foreword-grid">
          <div className="foreword-card">
            <div className="foreword-image">
              <img src={image1} alt="Foreword Image 1" />
            </div>
            <div className="foreword-text">
              <h3>Foreword by Her Excellency Dr. Joyce Banda, Former President of Malawi</h3>
              <div className="foreword-content">
                <p>
                  It is such a great honor to pen this foreword for the "Reset Ghana Presidential Devotional," authored by
                  the world-renowned servant leader, HE Rev. Dr. Asie Ocansey.
                </p>
                <p>
                  First, I would like to congratulate President John Mahama for Ghana's first female Vice President, HE
                  Naana Jane Opoku-Agyemang. I must register my extreme pleasure that President Mahama chose an
                  outstanding woman as his running mate. This sets a new dawn, not only for Ghanaian women but for all
                  African Women.
                </p>
                <p>
                  This special 9-month devotional speaks about "birthing" the Ghana all Ghanaians want together. Women,
                  especially mothers, uniquely understand this bitter-sweet, tough, but divinely fulfilling phenomenon
                  well!
                </p>
                <p>
                  The birthing period of 9 months is interestingly divinely expressed by HE Rev. Dr. Ocansey as: 7 days, 7
                  weeks, and 7 months. She then aligns 7 scriptures from both the Holy Koran and Holy Bible to the 7
                  chapters of the NDC Manifesto 2024.
                </p>
                <p>
                  The number 7 is the number for divine order. As you read this devotional, God's divine order speaks
                  loudly throughout the pages.
                </p>
                <p>
                  This devotional is a timeless unifying framework for birthing any new nation. Throughout my own journey
                  as a Head of State, I witnessed firsthand the power of prayer and how spiritual grounding can inspire
                  resilience, humility, foster unity, and propel transformative change.
                </p>
                <p>
                  I encourage all Ghanaians to embrace this kairos moment of renewal and take the opportunity to build the
                  Ghana you want together.
                </p>
              </div>
            </div>
          </div>

          <div className="foreword-card reverse">
            <div className="foreword-image">
              <img src={image2} alt="Foreword Image 2" />
            </div>
            <div className="foreword-text">
              <h3>Goodwill Message from His Excellency President Maada Bio of Sierra Leone</h3>
              <div className="foreword-content">
                <p>Dear President John Dramani Mahama,</p>
                <p>
                  It is with great honor and heartfelt solidarity that I extend my warmest greetings to you as you and the
                  good people of Ghana embark on this remarkable interfaith journey through the "Reset Ghana Presidential
                  Devotional," authored by the distinguished servant of God, HE Reverend Dr. Asie Ocansey.
                </p>
                <p>
                  In a time when our nations face multifaceted challenges, bringing Christians and Muslims together in an
                  action-backed prayerthon aligned with the NDC Manifesto 2024 is a game changer.
                </p>
                <p>
                  Your vision for a Ghana that thrives in peace, prosperity, and inclusivity is commendable and aligns
                  closely with our shared goals in the region.
                </p>
                <p>
                  As Sierra Leone prepares to launch our own initiative to birth the future that our citizens desire, we
                  draw inspiration from your efforts in Ghana. Together, let us build a West Africa characterized by
                  unity, resilience, and shared prosperity.
                </p>
                <p>With warmest regards,</p>
                <p>
                  His Excellency Dr. Julius Maada Bio
                  <br />
                  President of Sierra Leone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foreword;
