import styled from "styled-components";
import Map from "./Map";
import SubHeading from "../../components/ui/SubHeading";
import Form from "./Form";

const RightBody = styled.div``;

const Contact = () => {
  return (
    <RightBody className="section right_body">
      <div className="container-fluid">
        <div className="row">
          <SubHeading text="Contact Me" />
        </div>
      </div>
      <Map />
      <Form />
    </RightBody>
  );
};

export default Contact;
