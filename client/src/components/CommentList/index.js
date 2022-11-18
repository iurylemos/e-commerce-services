import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rendererComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{rendererComments}</ul>;
}
