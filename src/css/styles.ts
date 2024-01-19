import { css } from 'lit';

export const styles = css`
  .attributes {
    display: flex;
    gap: 10px;
    text-shadow: 1px 1px 1px black;
  }
  .attributes > * {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    border: 2px solid white;
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: flip 1s forwards;
    opacity: 0;
  }
  .attributes > *.correct {
    background-color: #00ff00;
  }
  .attributes > *.partial {
    background-color: #ff9700;
  }
  .attributes > *.incorrect {
    background-color: #ff0000;
  }
  .attributes > :nth-child(2) {
    animation-delay: 0.5s;
  }
  .attributes > :nth-child(3) {
    animation-delay: 1s;
  }
  .attributes > :nth-child(4) {
    animation-delay: 1.5s;
  }
  .attributes > :nth-child(5) {
    animation-delay: 2s;
  }
  .attributes > :nth-child(6) {
    animation-delay: 2.5s;
  }

  @keyframes flip {
    0% {
      transform: perspective(400px) rotateY(90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotateY(-20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotateY(10deg);
    }
    80% {
      transform: perspective(400px) rotateY(-5deg);
    }
    100% {
      transform: perspective(400px);
      opacity: 1;
    }
  }
`;
