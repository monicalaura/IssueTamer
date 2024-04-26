import React from "react";
import DeleteUI from "./DeleteUI";
import PriorityUI from "./PriorityUI";
import ProgressBar from "./ProgressBar";
import StatusUI from "./StatusUI";
import Link from "next/link";

const IssueCard = ({ issue }) => {
  const formatTime = (time) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(time);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };

  const formatDateTime = formatTime(issue.createdAt);

  console.log("Progress prop value in IssueCard:", issue.progress);
  return (
    <div className="flex flex-col bg-nav hover:bg-cardHover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityUI priority={issue.priority} />
        <div className="ml-auto">
          <DeleteUI id={issue._id} style={{ display: "contents" }} />
        </div>
      </div>
      <Link href={`/IssuePage/${issue._id}`}>
        <h4 className="text-textNav">{issue.title}</h4>
        <hr className="h-px border-0 bg-page mb-2"></hr>
        <p className="whitespace-pre-wrap text-textDefault description">
          {issue.description}
        </p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-accent text-xs my-1">{formatDateTime}</p>
          </div>
          <div className="ml-auto flex items-end">
            <StatusUI status={issue.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default IssueCard;
