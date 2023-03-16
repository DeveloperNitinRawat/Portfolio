import styled from "styled-components";
import SubHeading from "../../components/ui/SubHeading";
import PortfolioComp from "./PortfolioComp";
import PortfolioData from "../../componentsdata/PortfolioData";

const StyleMyPortfolio = styled.section`
  margin-bottom: 9rem;
  @media screen and (max-width: 768px) {
    padding-top: 7rem;
  }
`;

const MyPortfolio = () => {
  return (
    <StyleMyPortfolio className="section">
      <div className="container-fluid">
        <div className="row">
          <SubHeading text="PORTFOLIOS" />
          <div className="grid grid-three-col gap-lg-4 gap-5">
            {PortfolioData.map((val, index) => {
              return (
                <PortfolioComp
                  imgData={val.imgData}
                  title={val.title}
                  para={val.para}
                  link={val.link}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </StyleMyPortfolio>
  );
};

export default MyPortfolio;
