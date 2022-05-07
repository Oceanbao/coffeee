import styled from '@emotion/styled'

const S: any = {}

S.Quality = styled.section`
  background-color: #fff;

  .content {
    row-gap: 2.5rem;

    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }

  .images {
    position: relative;
    justify-self: center;
  }

  .img-small,
  .img-big {
    border-radius: 0.5rem;
  }

  .img-small {
    width: 100px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    transform: translateX(-5rem);

    @media screen and (max-width: 320px) {
      transform: translateX(-6rem);
    }
  }

  .img-big {
    width: 280px;
  }

  .title,
  .price {
    font-size: var(--h1-font-size);
  }

  .title {
    margin-bottom: 0.75rem;
  }

  .price {
    margin-bottom: 0.25rem;
  }

  .special {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: 0.75rem;
  }

  .description {
    margin-bottom: 2.5rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    column-gap: 2rem;
  }

  .quality__button {
    font-size: var(--normal-font-size);
    text-transform: uppercase;
    color: var(--title-color);
    display: inline-flex;
    align-items: center;
    column-gap: 0.75rem;

    @media screen and (max-width: 320px) {
      flex-direction: column;
      row-gap: 1rem;
    }

    i {
      font-size: 1.25rem;
      transition: 0.4s;
    }

    &:hover i {
      transform: translateX(0.25rem);
    }
  }

  @media screen and (min-width: 1040px) {
    .content {
      column-gap: 6rem;
    }

    .images {
      margin-top: 2rem;
    }

    .img-big {
      width: 428px;
    }

    .img-small {
      width: 153px;
      transform: translateX(-7rem);
    }

    .title {
      margin-bottom: 1.5rem;
    }

    .special {
      margin-bottom: 1rem;
    }
  }
`

const Quality = () => {
  return (
    <S.Quality id="premium" className="section">
      <div className="quality__container container">
        <h2 className="title">We offer a premium and better quality preparation just for you!</h2>
        <div className="content grid">
          <div className="images">
            <img src="/img/quality1.png" alt="" className="img-big" />
            <img src="/img/quality2.png" alt="" className="img-small" />
          </div>
          <div className="data">
            <h1 className="title">Premium Coffee</h1>
            <h2 className="price">$94.99</h2>
            <span className="special">Especial Price</span>
            <p className="description">
              We are delighted with our coffee. That&apros;s why you get the best premium coffee
              plus the kettle made of resistant materials that you see in the image, for a special
              price.
            </p>
            <div className="buttons">
              <button className="button">Buy Now</button>
              <a href="#" className="quality__button">
                See more
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </S.Quality>
  )
}

export default Quality
