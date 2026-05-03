import Card from "./components/card";
import "./index.css";

function App() {
  const jobs = [
    {
      id: 1,
      company: "Meta",
      role: "Frontend Engineer",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      company: "Amazon",
      role: "Backend Developer",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 3,
      company: "Apple",
      role: "iOS Developer",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 4,
      company: "Netflix",
      role: "Machine Learning Engineer",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 5,
      company: "Google",
      role: "Cloud Solutions Architect",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 6,
      company: "Microsoft",
      role: "Data Scientist",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 7,
      company: "IBM",
      role: "AI Research Engineer",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="container">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;
