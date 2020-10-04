import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <Comment
          author='Sam'
          timeAgo='Today at 4:45PM'
          content='Nice blog post!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author='Alex'
          timeAgo='Today at 6:45PM'
          content='Awesome post!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author='Jane'
          timeAgo='Today at 8:45PM'
          content='Thanks!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
