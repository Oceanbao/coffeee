import styled from '@emotion/styled'

const S: any = {}

S.Footer = styled.footer`
  background-color: var(--black-color);
  padding: 4rem 0 2.5rem;

  .title {
    color: #fff;
    font-size: var(--h1-font-size);
    margin-bottom: 2rem;
  }

  .description {
    margin-bottom: 0.75rem;
  }

  .newsletter {
    display: flex;
    column-gap: 0.5rem;

    @media screen and (min-width: 576px) {
      width: 350px;
    }
  }

  .input {
    border: none;
    outline: none;
    padding: 1.25rem 1rem;
    border-radius: 0.25rem;
    width: 70%;
    color: var(--text-color);
  }

  .footer__button {
    padding: 0.75rem;
    font-size: 2rem;
    border-radius: 0.25rem;
    display: inline-flex;
    background-color: var(--first-color);

    i {
      transform: rotate(-30deg);
      transition: 0.4s;
    }

    &:hover i {
      transform: rotate(-30deg) translate(0.25rem);
    }
  }

  .content {
    row-gap: 2.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid var(--text-color);

    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }

  .subtitle {
    color: #fff;
    font-size: var(--h2-font-size);
    margin-bottom: 0.75rem;
  }

  .flag {
    width: 1rem;
  }

  .group {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 1.5rem;
  }

  .social {
    display: flex;
    justify-centent: center;
    column-gap: 1.5rem;
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  .social-link {
    color: #fff;
    transition: 0.4s;

    &:hover {
      color: var(--first-color);
    }
  }

  .copy {
    font-size: var(--small-font-size);
  }

  @media screen and (min-width: 1040px) {
    .content {
      grid-template-columns: repeat(4, max-content);
      column-gap: 4rem;
      padding-bottom: 5.5rem;
    }

    .group {
      margin-top: 3rem;
      flex-direction: row;
      justify-content: space-between;
    }

    .title {
      font-size: var(--h2-font-size);
    }

    .social {
      column-gap: 2rem;
    }

    .social-link {
      font-size: 1.5rem;
    }
  }
`

const Footer = () => {
  return (
    <S.Footer>
      <div className="footer__container container">
        <h1 className="title">Coffee.</h1>
        <div className="content grid">
          <div className="data">
            <p className="description">Subscribe to our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email address" className="input" />
              <button className="footer__button">
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
          <div className="data">
            <h2 className="subtitle">Address</h2>
            <p className="information">
              9876 Hacienda Av. <br />
              Lima, La Libertad 123, Peru
              <img src="/img/footerflag.png" alt="" className="flag" />
            </p>
          </div>
          <div className="data">
            <h2 className="subtitle">Contact</h2>
            <p className="information">
              +987654321 <br />
              coffee@email.com
            </p>
          </div>
          <div className="data">
            <h2 className="subtitle">Office</h2>
            <p className="information">
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>
        </div>

        <div className="group">
          <ul className="social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </ul>

          <span className="copy">&#169; Bedimcode. All rights reserved</span>
        </div>
      </div>
    </S.Footer>
  )
}

export default Footer
