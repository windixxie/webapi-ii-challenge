import React from "react";
// import styled from "styled-components";

const Post = props => {
    return (
      <div>
        <h1>{props.post.title}</h1>
        <p>{props.post.contents}</p>
      </div>
    );
  };
  
  export default Post;
  