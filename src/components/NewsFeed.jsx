"use client"

import { useState } from "react"
import "../styles/NewsFeed.css"

// Sample news data
const newsData = [
  {
    id: 1,
    title: "Launch of Reset Ghana Presidential Devotional Initiative",
    date: "February 15, 2025",
    excerpt:
      "The Reset Ghana Presidential Devotional initiative was officially launched today at a ceremony attended by religious leaders and government officials.",
    category: "Events",
    image: "/news-1.jpg",
  },
  {
    id: 2,
    title: "Christian and Muslim Leaders Unite for Ghana's Future",
    date: "February 20, 2025",
    excerpt:
      "In an unprecedented show of unity, 24 Christian leaders and 24 Imams have committed to leading prayer sessions for the Reset Ghana Presidential Devotional.",
    category: "Partnerships",
    image: "/news-2.jpg",
  },
  {
    id: 3,
    title: "President Mahama Endorses Interfaith Prayerthon",
    date: "February 25, 2025",
    excerpt:
      "His Excellency John Dramani Mahama has officially endorsed the Reset Ghana Presidential Devotional, calling it a 'necessary step toward national unity and progress.'",
    category: "Announcements",
    image: "/news-3.jpg",
  },
  {
    id: 4,
    title: "National Reflection Journal to be Distributed Nationwide",
    date: "March 1, 2025",
    excerpt:
      "The National Reflection Journal, a key component of the Reset Ghana Presidential Devotional, will be distributed to communities across all 16 regions of Ghana.",
    category: "Resources",
    image: "/news-4.jpg",
  },
  {
    id: 5,
    title: "International Leaders Praise Ghana's Interfaith Initiative",
    date: "March 5, 2025",
    excerpt:
      "Leaders from across Africa and beyond have praised Ghana's innovative approach to fostering national unity through interfaith prayer and reflection.",
    category: "International",
    image: "/news-5.jpg",
  },
  {
    id: 6,
    title: "Countdown to March 6: The Beginning of a 9-Month Journey",
    date: "March 3, 2025",
    excerpt:
      "With just days remaining until the official start of the Reset Ghana Presidential Devotional, preparations are in full swing across the country.",
    category: "Events",
    image: "/news-6.jpg",
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
                      <div className="news-image-placeholder" style={{ backgroundImage: `url(${news.image})` }}></div>
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

