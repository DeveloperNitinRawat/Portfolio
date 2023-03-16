import styled from "styled-components";

const StyleBgAnimation = styled.div`
  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }
  position: absolute;
  width: calc(100% - 27rem);
  height: 100vh;
  top: 0;
  right: 0;
  background: transparent;
  overflow: hidden;
  z-index: 0;

  & span {
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 15;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  & span:nth-child(0) {
    color: #e45a84;
    top: 99%;
    left: 24%;
    animation-duration: 141s;
    animation-delay: -342s;
    transform-origin: -4vw 23vh;
    box-shadow: 2vmin 0 0.5239286219125143vmin currentColor;
  }
  & span:nth-child(1) {
    color: #583c87;
    top: 36%;
    left: 35%;
    animation-duration: 61s;
    animation-delay: -304s;
    transform-origin: -1vw -22vh;
    box-shadow: 2vmin 0 0.8173434621792022vmin currentColor;
  }
  & span:nth-child(2) {
    color: #583c87;
    top: 81%;
    left: 74%;
    animation-duration: 350s;
    animation-delay: -114s;
    transform-origin: -22vw -16vh;
    box-shadow: 2vmin 0 0.9045609855742922vmin currentColor;
  }
  & span:nth-child(3) {
    color: #583c87;
    top: 75%;
    left: 65%;
    animation-duration: 175s;
    animation-delay: -350s;
    transform-origin: 7vw 7vh;
    box-shadow: -2vmin 0 0.7670538092016308vmin currentColor;
  }
  & span:nth-child(4) {
    color: #ffacac;
    top: 38%;
    left: 77%;
    animation-duration: 212s;
    animation-delay: -345s;
    transform-origin: 9vw -18vh;
    box-shadow: -2vmin 0 0.7571276480357931vmin currentColor;
  }
  & span:nth-child(5) {
    color: #e45a84;
    top: 35%;
    left: 52%;
    animation-duration: 181s;
    animation-delay: -11s;
    transform-origin: -11vw 0vh;
    box-shadow: -2vmin 0 0.3696351235133426vmin currentColor;
  }
  & span:nth-child(6) {
    color: #583c87;
    top: 33%;
    left: 28%;
    animation-duration: 200s;
    animation-delay: -135s;
    transform-origin: -15vw 25vh;
    box-shadow: 2vmin 0 1.1313433878105508vmin currentColor;
  }
  & span:nth-child(7) {
    color: #583c87;
    top: 97%;
    left: 67%;
    animation-duration: 345s;
    animation-delay: -67s;
    transform-origin: -4vw -6vh;
    box-shadow: 2vmin 0 0.2824651283488686vmin currentColor;
  }
  & span:nth-child(8) {
    color: #e45a84;
    top: 20%;
    left: 2%;
    animation-duration: 160s;
    animation-delay: -223s;
    transform-origin: 16vw 10vh;
    box-shadow: -2vmin 0 1.1335310357736461vmin currentColor;
  }
  & span:nth-child(9) {
    color: #ffacac;
    top: 53%;
    left: 14%;
    animation-duration: 186s;
    animation-delay: -185s;
    transform-origin: -18vw -1vh;
    box-shadow: -2vmin 0 1.1547410121954864vmin currentColor;
  }
  & span:nth-child(10) {
    color: #e45a84;
    top: 52%;
    left: 89%;
    animation-duration: 276s;
    animation-delay: -282s;
    transform-origin: -23vw 21vh;
    box-shadow: 2vmin 0 0.6615762162561718vmin currentColor;
  }
  & span:nth-child(11) {
    color: #583c87;
    top: 47%;
    left: 32%;
    animation-duration: 281s;
    animation-delay: -134s;
    transform-origin: 25vw -18vh;
    box-shadow: -2vmin 0 0.8874896166998056vmin currentColor;
  }
  & span:nth-child(12) {
    color: #583c87;
    top: 75%;
    left: 84%;
    animation-duration: 325s;
    animation-delay: -50s;
    transform-origin: 4vw 3vh;
    box-shadow: 2vmin 0 0.8602719920136659vmin currentColor;
  }
  & span:nth-child(13) {
    color: #583c87;
    top: 93%;
    left: 83%;
    animation-duration: 63s;
    animation-delay: -36s;
    transform-origin: 13vw -14vh;
    box-shadow: -2vmin 0 1.0039882919270227vmin currentColor;
  }
  & span:nth-child(14) {
    color: #e45a84;
    top: 47%;
    left: 23%;
    animation-duration: 232s;
    animation-delay: -314s;
    transform-origin: -20vw -11vh;
    box-shadow: 2vmin 0 0.563001515275688vmin currentColor;
  }
  & span:nth-child(15) {
    color: #e45a84;
    top: 65%;
    left: 99%;
    animation-duration: 298s;
    animation-delay: -249s;
    transform-origin: 10vw 0vh;
    box-shadow: -2vmin 0 0.6434920625830305vmin currentColor;
  }
  & span:nth-child(16) {
    color: #ffacac;
    top: 9%;
    left: 26%;
    animation-duration: 233s;
    animation-delay: -168s;
    transform-origin: 7vw -18vh;
    box-shadow: 2vmin 0 0.7641552687736692vmin currentColor;
  }
  & span:nth-child(17) {
    color: #e45a84;
    top: 38%;
    left: 88%;
    animation-duration: 14s;
    animation-delay: -346s;
    transform-origin: -11vw 13vh;
    box-shadow: 2vmin 0 0.8087800096657032vmin currentColor;
  }
  & span:nth-child(18) {
    color: #583c87;
    top: 57%;
    left: 99%;
    animation-duration: 84s;
    animation-delay: -157s;
    transform-origin: 21vw 9vh;
    box-shadow: 2vmin 0 0.9066082162674929vmin currentColor;
  }
  & span:nth-child(19) {
    color: #ffacac;
    top: 38%;
    left: 29%;
    animation-duration: 116s;
    animation-delay: -337s;
    transform-origin: 25vw 23vh;
    box-shadow: -2vmin 0 0.4196096842650636vmin currentColor;
  }
  & span:nth-child(20) {
    color: #e45a84;
    top: 39%;
    left: 18%;
    animation-duration: 272s;
    animation-delay: -77s;
    transform-origin: 2vw -12vh;
    box-shadow: 2vmin 0 0.4609535342495641vmin currentColor;
  }
  & span:nth-child(21) {
    color: #583c87;
    top: 85%;
    left: 76%;
    animation-duration: 181s;
    animation-delay: -108s;
    transform-origin: 25vw 16vh;
    box-shadow: -2vmin 0 0.4164457349306532vmin currentColor;
  }
  & span:nth-child(22) {
    color: #ffacac;
    top: 16%;
    left: 1%;
    animation-duration: 236s;
    animation-delay: -154s;
    transform-origin: -2vw 23vh;
    box-shadow: -2vmin 0 0.38889582461105543vmin currentColor;
  }
  & span:nth-child(23) {
    color: #e45a84;
    top: 79%;
    left: 17%;
    animation-duration: 199s;
    animation-delay: -128s;
    transform-origin: 17vw -1vh;
    box-shadow: -2vmin 0 0.4428176381598665vmin currentColor;
  }
  & span:nth-child(24) {
    color: #e45a84;
    top: 100%;
    left: 71%;
    animation-duration: 204s;
    animation-delay: -13s;
    transform-origin: 3vw -19vh;
    box-shadow: 2vmin 0 0.9311218553648153vmin currentColor;
  }
  & span:nth-child(25) {
    color: #583c87;
    top: 63%;
    left: 33%;
    animation-duration: 21s;
    animation-delay: -75s;
    transform-origin: -20vw 14vh;
    box-shadow: 2vmin 0 0.3098847711883663vmin currentColor;
  }
  & span:nth-child(26) {
    color: #e45a84;
    top: 92%;
    left: 98%;
    animation-duration: 10s;
    animation-delay: -295s;
    transform-origin: -14vw -16vh;
    box-shadow: -2vmin 0 0.859264078337435vmin currentColor;
  }
  & span:nth-child(27) {
    color: #ffacac;
    top: 27%;
    left: 34%;
    animation-duration: 173s;
    animation-delay: -194s;
    transform-origin: 25vw 2vh;
    box-shadow: 2vmin 0 0.2586145965486726vmin currentColor;
  }
  & span:nth-child(28) {
    color: #e45a84;
    top: 43%;
    left: 37%;
    animation-duration: 93s;
    animation-delay: -54s;
    transform-origin: -14vw -24vh;
    box-shadow: -2vmin 0 0.82352109640384vmin currentColor;
  }
  & span:nth-child(29) {
    color: #e45a84;
    top: 7%;
    left: 12%;
    animation-duration: 221s;
    animation-delay: -231s;
    transform-origin: 25vw 1vh;
    box-shadow: -2vmin 0 1.0324197659526244vmin currentColor;
  }
`;

const BgAnimation = () => {
  return (
    <StyleBgAnimation className="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyleBgAnimation>
  );
};

export default BgAnimation;
