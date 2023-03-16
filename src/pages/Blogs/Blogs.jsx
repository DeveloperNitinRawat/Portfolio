import styled from "styled-components";
import MyBlogs from "./MyBlogs";

const RightBody = styled.div``;

const Blogs = () => {
  return (
    <RightBody className="right_body">
      <MyBlogs />
    </RightBody>
  );
};

export default Blogs;
