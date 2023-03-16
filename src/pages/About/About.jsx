import styled from "styled-components";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Reviews from "./Reviews";

const RightBody = styled.div`
  color: ${({ theme }) => theme.color.white};
`;

const About = () => {
  return (
    <>
      <RightBody className="right_body">
        <AboutMe />
        <Services />
        <Reviews />
      </RightBody>
    </>
  );
};

export default About;
