import SubHeading from "../../components/ui/SubHeading";
import ProgressBar from "./ProgressBar";
import ProgressBarData from "../../componentsdata/ProgressBarData";

const MySkills = () => {
  return (
    <section className="section">
      <div className="container-fluid">
        <div className="row">
          <SubHeading text="My Skills" />
        </div>
        <div className="row">
          <div className="grid grid-two-col gap-5 justify-content-center">
            {ProgressBarData.map((val, index) => {
              return (
                <ProgressBar skill={val.skill} score={val.score} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
