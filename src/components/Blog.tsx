import styled from '@emotion/styled'

const S: any = {}

S.Blog = styled.section`
  .blog__container {
    padding-bottom: 2rem;
  }

  .content {
    row-gap: 3rem;

    @media screen and (min-width: 576px) {
      grid-template-columns: 450px;
      justify-content: center;
    }
  }

  .image {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .img {
    border-radius: 0.5rem;
  }

  .blog__button {
    display: inline-flex;
    background-color: #fff;
    padding: 1.15rem;
    border-radius: 0.5rem 0 0.5rem 0;
    font-size: 2rem;
    color: var(--title-color);
    position: absolute;
    right: 0;
    bottom: 0;

    i {
      transform: rotate(-30deg);
      transition: 0.4s;
    }

    &:hover i {
      transform: rotate(-30deg) translateX(0.25rem);
    }
  }

  .title {
    font-size: var(--h2-font-size);
    margin-bottom: 0.75rem;
  }

  .description {
    margin-bottom: 1.5rem;
  }

  .footer,
  .reaction {
    display: flex;
    align-items: center;
  }

  .footer {
    column-gap: 1.5rem;
  }

  .reaction {
    column-gap: 0.25rem;

    i {
      font-size: 1.25rem;
    }

    span {
      font-size: var(--small-font-size);
    }
  }

  @media screen and (min-width: 1040px) {
    .blog__container {
      padding-bottom: 5rem;
    }

    .content {
      grid-template-columns: repeat(2, 450px);
      column-gap: 5rem;
      padding-top: 2rem;
    }
  }
`

const Blog = () => {
  return (
    <S.Blog id="blog" className="section">
      <div className="blog__container container">
        <h2 className="section__title">Our Blogs Coffee with trending topic for this week</h2>
        <div className="content grid">
          <article className="card">
            <div className="image">
              <img src="/img/blog1.png" alt="" className="img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
            <div className="data">
              <h2 className="title">10 Coffee Recommendations</h2>
              <p className="description">
                The blogs about coffee will help you a lot about how it is prepared, its waiting
                time, for a good quality coffee.
              </p>
              <div className="footer">
                <div className="reaction">
                  <i className="bx bx-comment"></i>
                  <span>12</span>
                </div>
                <div className="reaction">
                  <i className="bx bx-show"></i>
                  <span>76.5K</span>
                </div>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="image">
              <img src="/img/blog2.png" alt="" className="img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
            <div className="data">
              <h2 className="title">12 Benefits of Drinking Coffee</h2>
              <p className="description">
                The blogs about coffee will help you a lot about how it is prepared, its waiting
                time, for a good quality coffee.
              </p>
              <div className="footer">
                <div className="reaction">
                  <i className="bx bx-comment"></i>
                  <span>45</span>
                </div>
                <div className="reaction">
                  <i className="bx bx-show"></i>
                  <span>356.5K</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </S.Blog>
  )
}

export default Blog
