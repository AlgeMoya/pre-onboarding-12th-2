import axios from "axios";
import { useEffect } from "react";
import IssueItem from ".././components/IssueItem";

function IssueList() {
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: "Bearer",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  const apiUrl = "https://api.github.com/repos/facebook/react/issues";

  useEffect(() => {
    // GET 요청 보내기
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <IssueItem
        issueNumber="#111"
        issueTitle="issue title"
        issueComments="67"
        issueAuthor="name"
        issueDate="2019년 12월 31일"
      ></IssueItem>
      <IssueItem
        issueNumber="#111"
        issueTitle="issue title"
        issueComments="67"
        issueAuthor="name"
        issueDate="2019년 12월 31일"
      ></IssueItem>
    </div>
  );
}

export default IssueList;
