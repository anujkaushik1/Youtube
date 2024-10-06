import React from "react";

const dummyCommentData = [
  {
    name: "Anuj Kaushik",
    text: "Nice Video",
    replies: [
      {
        name: "Gaurav",
        text: "Why you said this",
        replies: [],
      },
    ],
  },
  {
    name: "Nishant Jain",
    text: "Bestest Video",
    replies: [],
  },
  {
    name: "Priyanshu Jain",
    text: "Why i have watched this video",
    replies: [
      {
        name: "Gaurav",
        text: "Why you said this",
        replies: [
          {
            name: "Sagar",
            text: "You really liked this ?",
            replies: [
              {
                name: "Gaurav",
                text: "Yes why you asked this",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Ashwani",
        text: "Worst comment ever seen",
        replies: [
            {
                name: "Anuj Kaushik",
                text: "Who care's",

            }
        ]
      }
    ],
  },
];

const Comment = ({ name, text }) => {
  return (
    <div className="flex font-sans my-6">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="ml-1">
        <h1 className="font-semibold text-base">{name}</h1>
        <h1 className="text-sm">{text}</h1>
      </div>
    </div>
  );
};

const InjectingCommentList = ({ comments = [] }) => {
  return comments.map((comment, idx) => (
    <>
      <Comment key={idx} name={comment.name} text={comment.text} />
      {!!comment?.replies?.length && (
        <div className="pl-5 border border-l-black ml-5 border-y-0">
          <InjectingCommentList comments={comment?.replies} />
        </div>
      )}
    </>
  ));
};

const CommentContainer = () => {
  return (
    <div className="font-sans mt-2 mb-96">
      <h1 className="text-lg text-black font-semibold">Comments: </h1>

      <InjectingCommentList comments={dummyCommentData} />
      {/* 
      <Comment
        name={dummyCommentData[0].name}
        text={dummyCommentData[0].text}
      /> */}
    </div>
  );
};

export default CommentContainer;
