import "./IssueItem.css";

// Hello 컴포넌트 정의
function IssueItem(props) {
  return (
    <div className="issueItem">
      <span className="issueName">
        <span className="issueNumber">{props.issueNumber}</span>
        <span className="issueTitle">{props.issueTitle}</span>
      </span>
      <span className="issueComments">코멘트: {props.issueComments}</span>
      <br />
      <span className="issueInfo">
        작성자: {props.issueAuthor}, 작성일: {props.issueDate}
      </span>
    </div>
  );
}

export default IssueItem;
