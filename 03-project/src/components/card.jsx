function Card({ job }) {
  return (
    <div className="card">
      <div className="top">
        <div className="logo">a</div>
        <button className="save">Save</button>
      </div>

      <h4>{job.company}</h4>
      <h2>{job.role}</h2>

      <div className="tags">
        <span>Part Time</span>
        <span>Senior Level</span>
      </div>

      <div className="line"></div>

      <div className="bottom">
        <div>
          <h3>{job.salary}</h3>
          <p>{job.location}</p>
        </div>
        <button className="apply">Apply Now</button>
      </div>
    </div>
  );
}

export default Card;
