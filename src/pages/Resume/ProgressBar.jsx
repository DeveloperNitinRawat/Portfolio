import styled from "styled-components";

const ProgressBar = ({ skill, score }) => {
  const StyleProgressBar = styled.div`
    color: #fff;
    & h4 {
      font-size: 1.9rem;
    }
    & .progress_container {
      display: flex;
      align-items: center;
      & .progress_percentage {
        flex: 0 0 52px;
        font-size: 1.6rem;
      }
      & .progress_process {
        position: relative;
        display: block;
        width: 100%;
        height: 0.6rem;
        background: ${({ theme }) => theme.color.bgColor};
        & span {
          position: absolute;
          width: ${score};
          height: 100%;
          background: ${({ theme }) => theme.color.primary};
          left: 0;
          top: 0;
          transition: all 1s cubic-bezier(0.01, 0.57, 0.68, 1.05) 0s;
        }
      }
    }
  `;
  return (
    <StyleProgressBar>
      <h4>{skill}</h4>
      <div className="progress_container">
        <div className="progress_percentage">{score}</div>
        <div className="progress_process">
          <span></span>
        </div>
      </div>
    </StyleProgressBar>
  );
};

export default ProgressBar;
