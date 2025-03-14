"use client"

import { useState } from "react"
import "../styles/NewsFeed.css"
import NewsArticle from "./NewsArticle"
import image1 from "../assets/leaders.jpg";
import image2 from "../assets/news1.jpg";
import image3 from "../assets/news2.jpg";
import image4 from "../assets/news3.jpg";
import image5 from "../assets/news4.jpg";
import image6 from "../assets/cabinets.jpg";

// Sample news data
const newsData = [
  {
    id: 1,
    title: "LEADERS OF GHANA - FROM INDEPENDENCE TO PRESENT (1957 - 2025)",
    date: "February 15, 2025",
    excerpt:
      "From 1975 to 2025, Ghana's leadership transitioned from Dr. Kwame Nkrumah through military rulers to democratically elected presidents H.E Jerry John Rawlings, H.E. John Agyekum Kufuor, H.E. John Atta Mills, H.E. John Dramani Mahama, H.E. Nana Addo Dankwa Akufo-Addo, and H.E. John Dramani Mahama again. ",
    category: "Events",
    image: image1,
    continuation: "Since gaining independence from British colonial rule in 1957, Ghana has undergone multiple political transitions, including republics, military coups, and democratic governance. This article provides a concise overview of the leaders who have shaped the nation from independence to the present. First Republic (1957-1966) Ghana’s first leader, Kwame Nkrumah, served as Prime Minister from 1957 and later became the nation’s first President in 1960. His administration was overthrown in 1966 through a military coup, marking the beginning of military rule. General Joseph Ankrah led the National Liberation Council from 1966 to 1969 before resigning. General Akwasi Afrifa briefly took over in 1969, paving the way for a return to civilian rule. Second Republic (1969-1972) Ghana adopted a parliamentary system with Dr. Kofi A. Busia as Prime Minister and Edward Akufo-Addo as the ceremonial President. However, their government was short-lived, as a military coup in 1972 led by General Ignatius Kutu Acheampong ended the Second Republic. Acheampong ruled until 1975 before being ousted by General Frederick William Kwasi Akuffo, who was himself overthrown in 1979. In June 1979, Flight Lieutenant Jerry John Rawlings led a coup under the Armed Forces Revolutionary Council (AFRC), which briefly held power before transitioning to civilian rule. Third Republic (1979-1981)President Hilla Limann was elected in 1979 but was overthrown in 1981 by Jerry John Rawlings, who established the Provisional National Defence Council (PNDC). Rawlings ruled as a military leader until transitioning Ghana into a democratic state in 1992. Fourth Republic (1993-Present) Ghana adopted a new constitution in 1992, ushering in a period of democratic governance. Jerry John Rawlings (1993-2001) – Elected as Ghana’s first President under the Fourth Republic, he won two consecutive terms representing the National Democratic Congress (NDC). John Agyekum Kufuor (2001-2009) – A member of the New Patriotic Party (NPP), he also served two terms. John Atta Mills (2009-2012) – A president from the NDC, his tenure was cut short by his untimely death in 2012. John Dramani Mahama (2012-2017) – Served as Vice President under Atta Mills and assumed the presidency after Mills' passing. He later won the 2012 election but lost in 2016. Nana Addo Dankwa Akufo-Addo (2017-2025) – A member of the NPP, he was elected for two terms. John Dramani Mahama (2025-2029) – Returning to office, Mahama was re-elected as President in 2025. Ghana's political landscape has evolved significantly over the decades, moving from military interventions to stable democratic governance. The country continues to serve as a beacon of democracy in Africa, with peaceful transitions of power shaping its modern political narrative.",
  },
  {
    id: 2,
    title: "MESSAGE FROM H.E. PRESIDENT JOHN DRAMANI MAHAMA",
    date: "February 20, 2025",
    excerpt:
      "Beloved Ghanaians, I pray that you may prosper in all things and be in health, just as your soul prospers! Thank you for giving me this all-important madate, once again, to lead our dear nation.",
    category: "Events",
    image: image2,
    continuation: "As we embark on this critical journey together to birth the Ghana we want, let us unite prayerfully to petition God for his divine support in realizing the NDC Manifesto 2024. The 7 key chapters of the manifesto outline our commitment to prosperity for all, creating jobs, industrialization, and good governance. Resetting Ghana Presidential Devotional by H.E. Rev. Dr. Ocansey, together with the favor of God, faith and determination, we can achieve our national goals. I am counting on each Ghanaian to be an active and integral part of this important national prayerthon. It is divinely exciting that this nine-month devotional will start on the 68th anniversary of Ghana's independence, March 6th, and end with a celebration on December 7, 2025, marking one year since the people of Ghana voted for change! Ghana voted for the resetting of Ghana in decisive large numbers! Beloved Ghanaians, let's back this spiritual journey with action to achieve all the 7 key targets of the NDC 2024 Manifesto. Let's all pledge to put forth the best versions of ourselves. May God continue to bless our homeland Ghana and make our nation greater and stronger, to the glory of God",
  },
  {
    id: 3,
    title: "GOODWILL MESSAGE FROM HIS EXCELLENCY PRESIDENT MAADA BIO OF SIERRA LEONE",
    date: "February 25, 2025",
    excerpt:
      "Dear President John Dramani Mahama, It is with great honor and heartfelt solidarity that I extend my warmest greetings to you as you embark on the 'Reset Ghana Presidential Devotionl', authored by H.E. Rev. Princess Dr. Asie Kabuki Ocansey.",
    category: "International",
    image: image3,
    continuation: "This initiative, which unites Ghanaians in an interfaith prayerthon, represents a significant step towards fostering national reflection, unity, and purposeful action. In a time when our nations face multifaceted challenges, the importance of coming together-across faiths, cultures, and ideologies-cannot be overstated. The alignment of Christian and Muslim scriptures with the NDC Manifesto 2024 serves not only as a spiritual guide but also as a practical framework for achieving the aspirations of all Ghanaians. Your vision for a Ghana that thrives in peace, prosperity, and inclusivity is commendable and aligns closely with our shared goals in the region. As Sierra Leone prepares to launch its own initiative to birth the future that our citizens desire from March to December 2025, we draw inspiration from your efforts in Ghana. We recognize that true progress is made when we engage our communities in meaningful dialogue and collective prayer, trusting in a higher power to guide our actions and decisions. I wholeheartedly support your vision for a new Chana and am optimistic that the Reset Ghana initiative will catalyze positive change, encouraging all Ghanaians to work together for the future they envision. Let us continue to nurture the bonds between our nations, fostering collaboration and mutual support as we strive to create the environments our people deserve. May this devotional be a source of strength, hope, and inspiration for all participants as they embark on this transformative journey. Together, let us build a West Africa characterized by unity, resilience, and shared prosperity. With warmest regards and best wishes for the success of the Reset Ghana initiative.",
  },
  {
    id: 4,
    title: "INTRODUCTION FROM THE AUTHOR - H.E. Rev. Princess Dr. Asie Kabuki Ocansey",
    date: "March 1, 2025",
    excerpt:
      "When I started to write this devotional, the Holy Spirit took over and changed the course of the original concept to what it is now",
    category: "Resources",
    image: image4,
    continuation: "I set out to write a simple devotional for 2025, instead, God had other plans. What we have here now is a spiritual roadmap to birthing in 9 months - the Ghana we want together both Christians and Muslims - journeying together daily, weekly, and monthly! This is a divinely ordained national prayerthon, to purify our nation and prepare us for the best Ghana, ever! Resetting Ghana Presidential Devotional by H.E. Rev. Dr. OcanseyThe Resetting Ghana Presidential Devotional is in two parts: one for Christians and the other for our Muslim brothers and sisters. Get ready, and let's journey together for 7 days, 7 weeks and 7 months, riding through the 7 chapters of the NDC Manifesto 2024. The interfaith unity and harmony the devotionals bring to every participating Ghanaian is unprecedented! Psalm 133 v 1 says: 'Behold how good and how pleasant it is for brethren to dwell together in unity! 133 v 3b says, 'For there, the Lord commanded the blessing: Life forevermore.' In the Holy Koran - Surah Ali-Imran, ayah 103 says: 'And hold firmly to the rope of Allah all together and do not become divided. And remember the favor of Allah upon you - when you were enemies and He brought your hearts together and you became, by His favor, brothers.'Our united commitment and determined actions will result in the actualization of the scriptural promise of prosperity found in 3 John 2, as we are led by the third President called John, in his second term to achieve the 7 targets of the NDC Manifesto 2024. There is no doubt in my mind that God is with President John Mahama, like a mighty warrior! O may God bless Ghana indeed!",
  },
  {
    id: 5,
    title: "FORWORD BY HER EXCELLENCY DR. JOYCE HILDA BANDA - FORMER PRESIDENT OF MALAWI",
    date: "March 5, 2025",
    excerpt:
      "It is both an honor and a privilege to pen this foreword for the 'Reset Ghana Presidential Devotional', authored by the world renowned servant leader, H.E. Rev. Princess Dr. Asie Kabuki Ocansey, a woman I call my sister.",
    category: "International",
    image: image5,
    continuation: "First, I would like to congratulate President John Mahama and Ghana for your first female Vice President, HE Naana Jane Opoku-Agyemang. I must register my extreme pleasure that President Mahama choose an outstanding woman as his running mate. This sets a new dawn, not only for Ghanaian women, but for all African Women. This devotional speaks about 'birthing' the Ghana all Ghanaians want together. Women, especially mothers, understand the phenomenon well! In a time marked by unprecedented challenges and opportunities, this devotional serves as a beacon of hope and guidance for the people of Ghana, as you navigate the complexities of our modern world. The power of prayer and reflection cannot be overstated. Throughout my own journey as a leader, I have witnessed firsthand how spiritual grounding can inspire resilience, foster unity, and propel transformative change. The Reset Ghana Presidential Devotional presents a unique opportunity for individuals and communities to come together, seeking divine wisdom as they strive for personal and national renewal. This devotional aligns perfectly with the vision of President Mahama, who has consistently championed the ideals of unity, progress, prosperity and social justice. As Ghana approaches a new chapter in her history, the insights and prayers contained within these pages will encourage all Ghanaians to reflect on their roles as agents of change and stewards of Ghana's future. I concur with President John Mahama that during this important national prayerthon each Ghanaian should strive to become best version of themselves. The structure of this devotional-rooted in scripture and interfaith principles-highlights the importance of collaboration across diverse beliefs and backgrounds. In a world that often seeks to divide us, it is essential that we come together in solidarity, recognizing our shared humanity and collective responsibility to uplift one another.",
  },
  {
    id: 6,
    title: "CABINET MINISTERS",
    date: "March 3, 2025",
    excerpt:
      "The cabinet ministers of Ghana",
    category: "Events",
    image: image6,
    continuation: " ",
  },
]

// Categories for filtering
const categories = ["All", "Events", "Partnerships", "Announcements", "Resources", "International"]

const NewsFeed = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedArticle, setSelectedArticle] = useState(null)
  const itemsPerPage = 4

  // Filter news based on search term and category
  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)

  // Recent posts for sidebar (just showing the most recent 3)
  const recentPosts = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)

  // Handle article selection
  const handleReadMore = (articleId) => {
    const article = newsData.find((news) => news.id === articleId)
    setSelectedArticle(article)
  }

  // Get related articles (excluding the current one)
  const getRelatedArticles = (article) => {
    if (!article) return []
    return newsData
      .filter((news) => news.id !== article.id && (news.category === article.category || Math.random() > 0.5))
      .slice(0, 3)
  }

  // If an article is selected, show the article page
  if (selectedArticle) {
    return (
      <NewsArticle
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
        relatedArticles={getRelatedArticles(selectedArticle)}
      />
    )
  }

  return (
    <section id="news-feed" className="news-feed">
      <div className="container">
        <div className="section-title">
          <h2>Updates</h2>
          <p>Stay updated with the latest developments in the Reset Ghana Presidential Devotional initiative</p>
        </div>

        <div className="news-feed-container">
          <div className="news-main">
            <div className="news-filters">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1) // Reset to first page on new search
                  }}
                  className="search-input"
                />
              </div>

              <div className="category-filters">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`category-button ${selectedCategory === category ? "active" : ""}`}
                    onClick={() => {
                      setSelectedCategory(category)
                      setCurrentPage(1) // Reset to first page on category change
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {currentItems.length > 0 ? (
              <div className="news-grid">
                {currentItems.map((news) => (
                  <div className="news-card" key={news.id}>
                    <div className="news-image">
                      {/* <div className="news-image-placeholder" style={{ backgroundImage: `url(${news.image})` }}></div> */}
                      <img src={news.image} alt={news.title} className="news-image" />

                      <div className="news-category">{news.category}</div>
                    </div>
                    <div className="news-content">
                      <div className="news-date">{news.date}</div>
                      <h3 className="news-title">{news.title}</h3>
                      <p className="news-excerpt">{news.excerpt}</p>
                      <a href="#" className="read-more"  onClick={(e) => {
                          e.preventDefault()
                          handleReadMore(news.id)
                        }}>
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No news articles found matching your search criteria.</p>
              </div>
            )}

            {filteredNews.length > itemsPerPage && (
              <div className="pagination">
                <button
                  className="pagination-button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  Previous
                </button>

                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      className={`pagination-number ${currentPage === number ? "active" : ""}`}
                      onClick={() => setCurrentPage(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>

                <button
                  className="pagination-button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                  Next
                </button>
              </div>
            )}
          </div>

          <div className="news-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Categories</h3>
              <ul className="sidebar-categories">
                {categories
                  .filter((cat) => cat !== "All")
                  .map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setSelectedCategory(category)
                          setCurrentPage(1)
                        }}
                        className={selectedCategory === category ? "active" : ""}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Recent Posts</h3>
              <ul className="sidebar-recent-posts">
                {recentPosts.map((post) => (
                  <li key={post.id} className="recent-post">
                    <div className="recent-post-image">
                      <div className="recent-image-placeholder" style={{ backgroundImage: `url(${post.image})` }}></div>
                    </div>
                    <div className="recent-post-content">
                      <a href="#" className="recent-post-title">
                        {post.title}
                      </a>
                      <div className="recent-post-date">{post.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Subscribe to Updates</h3>
              <div className="sidebar-subscribe">
                <p>Stay informed about the Reset Ghana Presidential Devotional initiative.</p>
                <form className="subscribe-form">
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit" className="subscribe-button">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsFeed

