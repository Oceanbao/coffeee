import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const scrolling = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-.5rem);
  }
  100% {
    transform: translateY(0);
  }
`

const S: any = {}
S.Home = styled.section`
  gap: 0;

  .home__container {
    padding: 7rem 0 2.5rem;
    background: linear-gradient(160deg, hsla(206, 5%, 24%, 1) -4%, hsla(206, 12%, 12%, 1) 46%);
  }

  .home__content {
    position: relative;
  }

  .home__title,
  .home__data-title {
    color: #fff;
  }

  .home__title {
    font-size: var(--biggest-font-size);
    margin-bottom: 1.5rem;

    span {
      color: var(--first-color);
    }
  }

  .home__description {
    margin-bottom: 2rem;
  }

  .home__data {
    border-top: 1px solid var(--text-color);
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }

  .home__data-number {
    color: var(--first-color);
    font-size: var(--h1-font-size);
    margin-bottom: 1.5rem;
  }

  .home__data-title {
    font-size: var(--h3-font-size);
    margin-bottom: 0.5rem;
  }

  .home__scroll {
    position: absolute;
    width: 100px;
    bottom: -7rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: ${scrolling} 3s infinite;
  }

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    position: relative;

    .home__content {
      @media screen and (min-width: 767px) {
        position: initial;
      }
    }
    .home__scroll {
      bottom: 0;
      top: 0;
      margin: auto;
    }
  }

  @media screen and (min-width: 1040px) {
    .home__content {
      max-width: 400px;
      margin-left: auto;
      margin-right: 7rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .home__container {
      padding-top: 10rem;
    }

    .data {
      padding-top: 3rem;
    }

    .title {
      margin-bottom: 2rem;
    }

    .description {
      margin-bottom: 3rem;
    }

    .home__scroll {
      width: 130px;
    }
  }

  @media screen and (min-width: 1700px) {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Home = () => {
  return (
    <S.Home id="home" className="grid">
      <div className="home__container">
        <div className="home__content container">
          <h1 className="home__title">
            Choose Your Favourite Coffee And Enjoy<span>.</span>
          </h1>
          <p className="home__description">Buy the best and delicious coffee.</p>

          <div className="home__data">
            <div className="home__data-group">
              <h2 className="home__data-number">120K</h2>
              <h3 className="home__data-title">Testimonials</h3>
              <p className="home__data-description">
                Testimonials from various customers who trust us.
              </p>
            </div>

            <div className="home__data-group">
              <h2 className="home__data-number">340+</h2>
              <h3 className="home__data-title">Exclusive Product</h3>
              <p className="home__data-description">
                Premium preparation with quality ingredients.
              </p>
            </div>
          </div>

          <a href="#specialty" className="">
            <img src="/img/scroll.png" alt="" className="home__scroll" />
          </a>
        </div>
      </div>

      <img src="/img/home.png" alt="" className="home__img" />
    </S.Home>
  )
}

export default Home
