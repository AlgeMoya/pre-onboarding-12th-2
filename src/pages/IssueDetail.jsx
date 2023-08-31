import axios from "axios";
import { useEffect } from "react";
import IssueItem from ".././components/IssueItem";

function IssueDetail() {
  //   const headers = {
  //     Accept: "application/vnd.github+json",
  //     Authorization: "Bearer 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",
  //     "X-GitHub-Api-Version": "2022-11-28",
  //   };

  //   const apiUrl = "https://api.github.com/repos/facebook/react/issues";

  useEffect(() => {
    // GET 요청 보내기
    // axios
    //   .get(apiUrl, { headers })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <div className="issueHeader">
      <img src="http://placehold.it/100X100" alt="샘플이미지임"></img>

      <IssueItem
        issueNumber="#111"
        issueTitle="issue title"
        issueComments="67"
        issueAuthor="name"
        issueDate="2019년 12월 31일"
      />
    </div>
  );
}

export default IssueDetail;
