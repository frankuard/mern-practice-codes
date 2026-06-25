import React from 'react';
import Card from './components/Card';

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    date: "2026-06-20",
    posted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$42/hr",
    location: "Biratnagar, Nepal"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    date: "2026-06-18",
    posted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$48/hr",
    location: "Biratnagar, Nepal"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    date: "2026-06-22",
    posted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Biratnagar, Nepal"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    date: "2026-06-15",
    posted: "10 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    payPerHour: "$60/hr",
    location: "Biratnagar, Nepal"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    date: "2026-06-24",
    posted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    payPerHour: "$55/hr",
    location: "Biratnagar, Nepal"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    date: "2026-06-19",
    posted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$58/hr",
    location: "Biratnagar, Nepal"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    date: "2026-06-21",
    posted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$65/hr",
    location: "Biratnagar, Nepal"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    companyName: "Tesla",
    date: "2026-06-17",
    posted: "8 days ago",
    post: "Software Engineer",
    tag1: "Internship",
    tag2: "Junior Level",
    payPerHour: "$35/hr",
    location: "Biratnagar, Nepal"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    companyName: "OpenAI",
    date: "2026-06-23",
    posted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    payPerHour: "$75/hr",
    location: "Biratnagar, Nepal"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    date: "2026-06-16",
    posted: "9 days ago",
    post: "UI/UX Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$50/hr",
    location: "Biratnagar, Nepal"
  }
];

console.log(jobOpenings);
  return (
    <div className='parent'>

      {jobOpenings.map((elem, idx) => {
        
        return <div key={idx}>
        <Card logo={elem.brandLogo} company={elem.companyName} posted={elem.posted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.payPerHour} location={elem.location} />
    </div>

      })}

    </div>
  )
}

export default App
