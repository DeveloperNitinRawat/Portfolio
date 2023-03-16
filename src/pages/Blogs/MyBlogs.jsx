import React from "react";
import styled from "styled-components";
import SubHeading from "../../components/ui/SubHeading";
import BlogsData from "../../componentsdata/BlogsData";
import BlogsComp from "./BlogsComp";

const StyleMyBlogs = styled.section``;

const MyBlogs = () => {
  return (
    <StyleMyBlogs className="section">
      <div className="container-fluid">
        <div className="row">
          <SubHeading text="RECENT BLOGS" />
        </div>
        <div className="row">
          {BlogsData.map((val, index) => {
            return (
              <BlogsComp
                imgData={val.imgData}
                date={val.date}
                month={val.month}
                title={val.title}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </StyleMyBlogs>
  );
};

export default MyBlogs;
