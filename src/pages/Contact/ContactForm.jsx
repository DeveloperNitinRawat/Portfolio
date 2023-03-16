import { BiNotepad } from "react-icons/bi";
import Button from "../../components/ui/Button";
import { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  color: ${({ theme }) => theme.color.white};
  & h3 {
    font-size: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }
  & form {
    & label {
      width: 100%;
      margin-bottom: 2rem;
      & input,
      & textarea {
        width: 100%;
        font-size: 1.8rem;
        border: 2px solid ${({ theme }) => theme.color.borderColor};
        padding: 1rem 1.5rem;
        background: transparent;
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.color.white};
        &:focus {
          outline: none !important;
          border-color: ${({ theme }) => theme.color.primary};
        }
        &:hover {
          border-color: ${({ theme }) => theme.color.primary};
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    & h3 {
      font-size: 2.8rem;
      margin-bottom: 3rem;
    }
  }
  @media screen and (max-width: 768px) {
    & h3 {
      font-size: 2.7rem;
      margin-bottom: 2.5rem;
    }
  }
`;

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputData = (event) => {
    const { value, name } = event.target;
    setData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  return (
    <FormStyle className="col-md-6">
      <h3>
        <BiNotepad />
        Get In Touch
      </h3>
      <form
        // onSubmit={(e) => e.preventDefault()}
        action="https://formspree.io/f/xwkjqkde"
        method="POST"
      >
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Enter Your Name"
            required
            value={data.name}
            onChange={inputData}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter Your Email"
            required
            value={data.email}
            onChange={inputData}
          />
        </label>
        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            id="subject"
            autoComplete="off"
            placeholder="Enter Your Subject"
            required
            value={data.subject}
            onChange={inputData}
          />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="8"
            placeholder="Enter Your Message"
            autoComplete="off"
            value={data.message}
            onChange={inputData}
          ></textarea>
        </label>
        <Button type="submit" text="SEND MAIL" />
      </form>
    </FormStyle>
  );
};

export default ContactForm;
