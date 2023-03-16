import styled from "styled-components";
import ContactData from "./ContactData";
import ContactForm from "./ContactForm";

const StyleForm = styled.section`
  margin-bottom: 9rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 7rem;
  }
`;

const Form = () => {
  return (
    <StyleForm className="section">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <ContactForm />
          <ContactData />
        </div>
      </div>
    </StyleForm>
  );
};

export default Form;
