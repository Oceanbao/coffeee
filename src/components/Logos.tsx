import styled from '@emotion/styled'

const S: any = {}

S.Logos = styled.section`
  background-color: #fff;

  .logo_container {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    gap: 2.5rem 2rem;
    border-top: 1px solid var(--text-color-light);
    padding-top: 2.5rem;
  }

  .img {
    width: 80px;
    mix-blend-mode: luminosity;
    opacity: 0.4;
    transition: 0.4s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (min-width: 1040px) {
    .logo_container {
      grid-template-columns: repeat(5, 1fr);
      padding: 3.5rem 0;
    }

    .img {
      width: 110px;
    }
  }
`

const Logos = () => {
  return (
    <S.Logos>
      <div className="logo_container container grid">
        <img src="/img/logocoffee1.png" alt="" className="img" />
        <img src="/img/logocoffee2.png" alt="" className="img" />
        <img src="/img/logocoffee3.png" alt="" className="img" />
        <img src="/img/logocoffee4.png" alt="" className="img" />
        <img src="/img/logocoffee5.png" alt="" className="img" />
      </div>
    </S.Logos>
  )
}

export default Logos
