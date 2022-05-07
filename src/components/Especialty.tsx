import styled from '@emotion/styled'

const S: any = {}
S.Especialty = styled.section`
  .specialty__button {
    margi-left: 1.25rem;
  }

  .specialty__category {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 200px;
    justify-content: center;
    row-gap: 2.5rem;

    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(2, 200px);
      column-gap: 3rem;
    }
  }

  .specialty__img {
    width: 60px;
    margin-bottom: 1rem;
    transition: 0.4s;
  }

  .specialty__group {
    text-align: center;

    &:hover .specialty__img {
      transform: translateY(-0.25rem);
    }
  }

  .specialty__title {
    font-size: var(--h2-font-size);
    margin-bottom: 0.25rem;
  }

  @media screen and (min-width: 1040px) {
    .specialty__box {
      display: grid;
      grid-template-columns: 2fr 0.5fr;
    }

    .specialty__group {
      text-align: initial;
    }

    .specialty__category {
      grid-template-columns: repeat(3, 250px);
      column-gap: 8rem;
    }

    .specialty__line {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 120px;
        background-color: var(--text-color-light);
        right: -5rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }

    .specialty__img {
      width: 80px;
      margin-bottom: 1.5rem;
    }
  }
`

const Especialty = () => {
  return (
    <S.Especialty>
      <div className="specialty section container" id="specialty">
        <div className="specialty__container">
          <div className="specialty__box">
            <h2 className="section__title">
              Specialty coffee that make you happy and cheer you up!
            </h2>

            <div>
              <a href="#" className="button specialty__button">
                See more
              </a>
            </div>
          </div>

          <div className="specialty__category">
            <div className="specialty__group specialty__line">
              <img src="/img/specialty1.png" alt="" className="specialty__img" />
              <h3 className="specialty__title">Selected Coffee</h3>
              <p className="specialty__description">
                We select the best premium coffee, for a true taste.
              </p>
            </div>

            <div className="specialty__group specialty__line">
              <img src="/img/specialty2.png" alt="" className="specialty__img" />
              <h3 className="specialty__title">Delicious Cookies</h3>
              <p className="specialty__description">Enjoy your coffee with some hot cookies.</p>
            </div>

            <div className="specialty__group">
              <img src="/img/specialty3.png" alt="" className="specialty__img" />
              <h3 className="specialty__title">Enjoy at Home</h3>
              <p className="specialty__description">
                Enjoy the best coffee in the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </S.Especialty>
  )
}

export default Especialty
