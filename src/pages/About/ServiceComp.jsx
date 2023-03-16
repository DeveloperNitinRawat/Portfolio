import styled from "styled-components";

const StyleServiceComp = styled.div`
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  border-top: 5px solid ${({ theme }) => theme.color.borderColor};
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.color.bgColor};
  &:hover {
    border-top: 5px solid ${({ theme }) => theme.color.primary};
    transition: all 0.5s ease-in-out;
  }
  & .service_icons {
    font-size: 4rem;
    margin-bottom: 5rem;
    color: ${({ theme }) => theme.color.primary};
  }
  & h4 {
    padding: 1rem 0 1.5rem 0;
    position: relative;
    width: fit-content;
    margin-bottom: 1rem;
    &::before {
      position: absolute;
      content: "";
      background-color: ${({ theme }) => theme.color.borderColor};
      width: 30%;
      height: 3px;
      bottom: 0;
      left: 0;
    }
  }
  & p {
    text-align: justify;
  }
`;

const ServiceComp = ({ icon, title, para }) => {
  return (
    <StyleServiceComp>
      <span className="service_icons">{icon}</span>
      <h4>{title}</h4>
      <p>{para}</p>
    </StyleServiceComp>
  );
};

export default ServiceComp;
