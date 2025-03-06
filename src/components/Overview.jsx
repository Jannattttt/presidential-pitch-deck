import "../styles/Overview.css"

const Overview = () => {
  const overviewItems = [
    { number: "01", title: "The Vision" },
    { number: "02", title: "The Structure of the Devotional" },
    { number: "03", title: "Community Engagement" },
    { number: "04", title: "Visual Appeal" },
    { number: "05", title: "Timeline" },
    { number: "06", title: "Action Beyond Prayer" },
    { number: "07", title: "The Call to Action" },
    { number: "08", title: "Expected Outcomes" },
    { number: "09", title: "Conclusion" },
    { number: "10", title: "Contact Information" },
  ]

  return (
    <section id="overview" className="overview">
      <div className="container">
        <div className="section-title">
          <h2>Overview</h2>
        </div>

        <div className="overview-grid">
          {overviewItems.map((item, index) => (
            <div className="overview-item" key={index}>
              <div className="overview-number">{item.number}</div>
              <div className="overview-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Overview

