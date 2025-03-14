"use client"

import { useState } from "react"
import "../styles/NewsArticle.css"

const NewsArticle = ({ article, onBack, relatedArticles }) => {
  const [showCommentForm, setShowCommentForm] = useState(false)

  // Format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  // Handle comment form submission
  const handleCommentSubmit = (e) => {
    e.preventDefault()
    alert("Comment submitted successfully! (This is a demo)")
    setShowCommentForm(false)
  }

  return (
    <section className="news-article">
      <div className="container">
        <div className="article-navigation">
          <button className="back-button" onClick={onBack}>
            ← Back to News
          </button>
        </div>

        <div className="article-container">
          <div className="article-main">
            <div className="article-header">
              <div className="article-meta">
                <span className="article-category">{article.category}</span>
                <span className="article-date">{formatDate(article.date)}</span>
              </div>
              <h1 className="article-title">{article.title}</h1>
              <div className="article-author">
                <div className="author-image"></div>
                <div className="author-info">
                  <span className="author-name">By {article.author || "Reset Ghana Team"}</span>
                  <span className="read-time">{article.readTime || "5 min read"}</span>
                </div>
              </div>
            </div>

            <div className="article-featured-image">
              <img src={article.image || "/placeholder.svg"} alt={article.title} />
            </div>

            <div className="article-content">
              <p> 
                {article.fullContent ||
                  `${article.excerpt} ${article.continuation}`}
              </p>

              {/* <h2>The Importance of Interfaith Unity</h2>
              <p>
                The Reset Ghana Presidential Devotional initiative represents a significant step forward in fostering
                interfaith dialogue and cooperation in Ghana. By bringing together Christian and Muslim leaders, the
                initiative aims to create a unified spiritual foundation for national development and progress.
              </p>
              <p>
                This approach recognizes that spiritual values play a crucial role in shaping national identity and
                social cohesion. The alignment of prayers and reflections with national development goals creates a
                powerful synergy between faith and civic responsibility.
              </p>

              <blockquote>
                "The Reset Ghana Presidential Devotional is not just a prayer initiative; it is a movement towards
                unity, hope, and actionable change to achieve jobs and prosperity for all Ghanaians!"
              </blockquote>

              <h2>Structure and Implementation</h2>
              <p>
                The devotional follows a carefully designed structure that spans 9 months, symbolically representing a
                period of gestation and birth. This period is divided into 7 days, 7 weeks, and 7 months, with each
                segment focusing on specific aspects of national renewal and development.
              </p>
              <p>
                The involvement of 48 religious leaders—24 Christian leaders and 24 Imams—ensures broad representation
                and inclusivity. These leaders will guide prayer sessions and reflections, helping to foster a sense of
                shared purpose and commitment among Ghanaians.
              </p>

              <h2>Expected Outcomes</h2>
              <p>
                As the Reset Ghana Presidential Devotional unfolds, it is expected to yield several important outcomes:
              </p>
              <ul>
                <li>Strengthened national unity across religious and ethnic lines</li>
                <li>Increased civic engagement and participation in national development</li>
                <li>Enhanced spiritual foundation for governance and leadership</li>
                <li>Greater alignment between faith communities and national goals</li>
                <li>Improved social cohesion and reduced polarization</li>
              </ul>

              <p>
                These outcomes will contribute to the broader vision of creating a more prosperous, peaceful, and united
                Ghana. By harnessing the power of prayer and reflection, the initiative seeks to inspire Ghanaians to
                work together for the common good.
              </p> */}
            </div>

            <div className="article-tags">
              <span className="tag-label">Tags:</span>
              <div className="tags-list">
                <span className="tag">Interfaith</span>
                <span className="tag">Prayer</span>
                <span className="tag">Unity</span>
                <span className="tag">National Development</span>
              </div>
            </div>

            <div className="article-share">
              <span className="share-label">Share this article:</span>
              <div className="share-buttons">
                <button className="share-button facebook">Facebook</button>
                <button className="share-button twitter">Twitter</button>
                <button className="share-button whatsapp">WhatsApp</button>
                <button className="share-button email">Email</button>
              </div>
            </div>

            {/* <div className="article-comments">
              <h3 className="comments-title">Comments (3)</h3>

              <div className="comments-list">
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">John Mensah</span>
                      <span className="comment-date">March 10, 2025</span>
                    </div>
                    <p className="comment-text">
                      This initiative is exactly what Ghana needs right now. I'm excited to see how it brings people
                      together across different faiths.
                    </p>
                  </div>
                </div>

                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">Fatima Ibrahim</span>
                      <span className="comment-date">March 9, 2025</span>
                    </div>
                    <p className="comment-text">
                      As a Muslim, I appreciate the inclusive approach of this devotional. It's wonderful to see both
                      Christian and Islamic scriptures being incorporated.
                    </p>
                  </div>
                </div>

                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">Daniel Owusu</span>
                      <span className="comment-date">March 8, 2025</span>
                    </div>
                    <p className="comment-text">
                      I'm looking forward to participating in this national prayer initiative. We need divine
                      intervention to help us build the Ghana we all want.
                    </p>
                  </div>
                </div>
              </div>

              {!showCommentForm ? (
                <button className="add-comment-button" onClick={() => setShowCommentForm(true)}>
                  Add Your Comment
                </button>
              ) : (
                <div className="comment-form">
                  <h4>Leave a Comment</h4>
                  <form onSubmit={handleCommentSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comment">Comment</label>
                      <textarea id="comment" rows="5" required></textarea>
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="submit-comment">
                        Submit Comment
                      </button>
                      <button type="button" className="cancel-comment" onClick={() => setShowCommentForm(false)}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div> */}
          </div>

          <div className="article-sidebar">
            <div className="sidebar-section author-bio">
              <h3 className="sidebar-title">About the Author</h3>
              <div className="author-profile">
                <div className="author-avatar"></div>
                <h4 className="author-name">{article.author || "Reset Ghana Team"}</h4>
                <p className="author-description">
                  The Reset Ghana Team is a dedicated group of professionals working to support the Reset Ghana
                  Presidential Devotional initiative. Their mission is to promote interfaith dialogue and national unity
                  through prayer and reflection.
                </p>
              </div>
            </div>

           {/*  <div className="sidebar-section related-articles">
              <h3 className="sidebar-title">Related Articles</h3>
              <div className="related-articles-list">
                {relatedArticles.map((relatedArticle) => (
                  <div className="related-article" key={relatedArticle.id}>
                    <div className="related-article-image">
                      <img src={relatedArticle.image || "/placeholder.svg"} alt={relatedArticle.title} />
                    </div>
                    <div className="related-article-content">
                      <h4 className="related-article-title">{relatedArticle.title}</h4>
                      <span className="related-article-date">{formatDate(relatedArticle.date)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="sidebar-section newsletter">
              <h3 className="sidebar-title">Subscribe to Our Newsletter</h3>
              <p>Stay updated with the latest news and developments about the Reset Ghana Presidential Devotional.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsArticle

