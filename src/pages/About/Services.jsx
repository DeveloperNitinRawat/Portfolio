import SubHeading from "../../components/ui/SubHeading";
import ServiceCompData from "../../componentsdata/ServiceCompData";
import ServiceComp from "./ServiceComp";

const Services = () => {
  return (
    <section className="section">
      <div className="container-fluid">
        <div className="row">
          <SubHeading text="SERVICES" />
          <div className="grid grid-three-col">
            {ServiceCompData.map((val, index) => {
              return (
                <ServiceComp
                  title={val.title}
                  para={val.para}
                  icon={val.icon}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
