import styled from '@emotion/styled'

const S: any = {}

S.Wiggle = styled.div`
  text-align: center;
  border-top: 10px solid #ffc600;
  background-size: 70px, auto;
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 100px), 0 100%);
  color: #fff;
  perspective: 500px;
  padding-top: 100px;
  font-size: 13rem;
  overflow: hidden;
  margin-bottom: -100px;

  h1 {
    font-size: 12vmin;
    margin: 2rem 0 5rem 0;
    transition: all 0.2s;
  }

  h1:hover {
    transform: scale(1.3) rotateX(-20deg) rotateY(10deg);
  }

  h1:hover span {
    display: inline-block;
    animation-name: wiggle;
    animation-duration: 0.4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  h1:hover span:nth-of-type(even) {
    animation-delay: 0.15s;
  }

  .hero__title {
    letter-spacing: 2px;
    position: relative;
    color: #fff;
    text-shadow: 8px 8px 3px rgba(0,0,0,0.1);
    z-index: 1;
    display: inline-block;
    font-weight: 700;
    border-top: 5px solid #ffc600;
    border-bottom: 5px solid #ffc600;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @keyframes wiggle {
    from {
      transform: translate(0, 0px) rotate(-12deg);
      text-shadow: 10px 10px 3px rgba(0,0,0,0.1);
    }
    65% {
      transform: translate(0, 15px) rotate(12deg) scale(1.3);
      text-shadow: -10px -10px 3px rgba(0,0,0,0.1);
    }
    to {
      transform: translate(0, 0px) rotate(-12deg);
      text-shadow: 10px 10px 3px rgba(0,0,0,0.1);
    }
  }
`

const Wiggle = () => {
  return (
  <S.Wiggle>
    <h1>
      <a className="hero__title" href="https://CSSGrid.io">
        <span className="💩">C</span>
        <span className="🐩">S</span>
        <span className="💁🏻&zwj;♂️">S</span>
        <span className="🇨🇦">&nbsp;</span>
        <span className="😘">G</span>
        <span className="🙏🏻">R</span>
        <span className="🤹🏻&zwj;♂️">I</span>
        <span className="🚒">D</span>
        <span className="🍕">.</span>
      </a>
    </h1>
  </S.Wiggle>
  )
}

export default Wiggle
