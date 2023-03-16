import styled from "styled-components";
import SubHeading from "../../components/ui/SubHeading";
import { BsBriefcase } from "react-icons/bs";
import ResumeComp from "./ResumeComp";
import { WorkExp, EduQualify } from "../../componentsdata/ResumeCompData";

const StyleMyResume = styled.section`
  margin-bottom: 9rem;
  & .sub_heading {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    & .icon {
      font-size: 3rem;
      color: ${({ theme }) => theme.color.borderColor};
    }
    & h3 {
      color: ${({ theme }) => theme.color.white};
      font-size: 2.7rem;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 7rem;
    & .sub_heading {
      & h3 {
        font-size: 2.4rem;
      }
    }
  }
`;

const MyResume = () => {
  return (
    <StyleMyResume className="section">
      <div className="container-fluid">
        <div className="row">
          <SubHeading text="RESUME" />
        </div>

        {/* Work Experience */}

        <div className="row mb-5">
          <div className="col-12 sub_heading">
            <BsBriefcase className="icon" />
            <h3>Working Experience</h3>
          </div>
        </div>
        {WorkExp.map((val, index) => {
          return (
            <ResumeComp
              time={val.time}
              designation={val.designation}
              companyName={val.companyName}
              para={val.para}
              key={index}
            />
          );
        })}

        {/* Education Qualification */}

        <div className="row my-5">
          <div className="col-12 sub_heading">
            <BsBriefcase className="icon" />
            <h3>Educational Qualifications</h3>
          </div>
        </div>
        {EduQualify.map((val, index) => {
          return (
            <ResumeComp
              time={val.time}
              designation={val.designation}
              companyName={val.companyName}
              para={val.para}
              key={index}
            />
          );
        })}
      </div>
    </StyleMyResume>
  );
};

export default MyResume;
