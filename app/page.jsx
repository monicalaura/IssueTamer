import React from "react";
import IssueCard from "./(components)/IssueCard";

const getIssues = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Issues", {
      cache: "no-store",
    });
    const data = await res.json();
    console.log("Fetched issues:", data);
    return data;
  } catch (error) {
    console.log("Failed to get issues", error);
  }
};
const Dashboard = async () => {
  const { issues } = await getIssues();

  //get  unique categories
  const uniqueCategories = [
    ...new Set(issues?.map(({ category }) => category)),
  ];

  return (
    <div className="mt-4 p-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {issues &&
          uniqueCategories?.map((uniqueCat, catIndex) => (
            <div className="mb-4" key={catIndex}>
              <h2 className="text-center text-accent">{uniqueCat}</h2>
              <div className="grid grid-cols-1 m-4">
                {issues
                  .filter((issue) => issue.category === uniqueCat)
                  .map((filteredIssue, _index) => (
                    <IssueCard id={_index} key={_index} issue={filteredIssue} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
