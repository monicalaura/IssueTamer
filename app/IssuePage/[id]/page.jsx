import IssueForm from "@/app/(components)/IssueForm";
import React from "react";

const getIssueById = async (id) => {
  try {
    const res = await fetch(`https://issue-tamer.vercel.app/api/Issues/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateIssueData = {};
const IssuePage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateIssueData = await getIssueById(params.id);
    updateIssueData = updateIssueData.foundIssue;
  } else {
    updateIssueData = {
      _id: "new",
    };
  }

  return <IssueForm issue={updateIssueData} />;
};

export default IssuePage;
