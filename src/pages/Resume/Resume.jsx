import styled from "styled-components";
import MyResume from "./MyResume";
import MySkills from "./MySkills";

const RightBody = styled.div``;

const Resume = () => {
  return (
    <RightBody className="right_body">
      <MySkills />
      <MyResume />
    </RightBody>
  );
};

export default Resume;
