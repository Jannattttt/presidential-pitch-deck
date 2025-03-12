"use client"

import { useState } from "react"
import "../styles/NewsFeed.css"
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
  },
  {
    id: 2,
    title: "MESSAGE FROM H.E. PRESIDENT JOHN DRAMANI MAHAMA",
    date: "February 20, 2025",
    excerpt:
      "Belobed Ghanaians, I pray that you may proper in all things and be in health, just as your soul prospers! Thank you for giving me this all-important madate, once again, to lead our dear nation.",
    category: "Events",
    image: image2,
  },
  {
    id: 3,
    title: "GOODWILL MESSAGE FROM HIS EXCELLENCY PRESIDENT MAADA BIO OF SIERRA LEONE",
    date: "February 25, 2025",
    excerpt:
      "Dear President John Dramani Mahama, It is with great honor and heartfelt solidarity that I extend my warmest greetings to you as you embark on the 'Reset Ghana Presidential Devotionl', authored by H.E. Rev. Princess Dr. Asie Kabuki Ocansey.",
    category: "International",
    image: image3,
  },
  {
    id: 4,
    title: "INTRODUCTION FROM THE AUTHOR - H.E. Rev. Princess Dr. Asie Kabuki Ocansey",
    date: "March 1, 2025",
    excerpt:
      "When I started to write this devotional, the Holy Spirit took over and changed theh course of the original concept to what it is now",
    category: "Resources",
    image: image4,
  },
  {
    id: 5,
    title: "FORWORD BY HER EXCELLENCY DR. JOYCE HILDA BANDA - FORMER PRESIDENT OF MALAWI",
    date: "March 5, 2025",
    excerpt:
      "It is both an honor and a privilege to pen this foreword for the 'Reset Ghana Presidential Devotional', authored by the world renowned servant leader, H.E. Rev. Princess Dr. Asie Kabuki Ocansey, a woman I call my sister.",
    category: "International",
    image: image5,
  },
  {
    id: 6,
    title: "CABINET MINISTERS",
    date: "March 3, 2025",
    excerpt:
      "The cabinet ministers of Ghana",
    category: "Events",
    image: image6,
  },
]

// Categories for filtering
const categories = ["All", "Events", "Partnerships", "Announcements", "Resources", "International"]

const NewsFeed = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
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
                      <a href={`#news/${news.id}`} className="read-more">
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
                      <a href={`#news/${post.id}`} className="recent-post-title">
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

