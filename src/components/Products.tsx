import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export type Product = {
  img: string
  price: string
  name: string
  filterType: string
}

type AppProps = {
  products: Product[]
}

const S: any = {}

S.Products = styled.section`
  .products__content {
    grid-template-columns: 200px;
    justify-content: center;

    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(2, 200px);
      padding-bottom: 3rem;
    }
    
    @media screen and (min-width: 1040px) {
        grid-template-columns: repeat(3, 262px);
        justify-content: initial;
        column-gap: 5rem;
  }
`

S.Filter = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem 2rem;
  margin-bottom: 3.5rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(3, 200px);
  }

  .products__line {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 40px;
      background-color: var(--text-color-light);
      right: -1rem;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }

  .products__item {
    cursor: pointer;

    &.active {
      .products__title {
        font-size: var(--h2-font-size);
        color: var(--text-color);
        margin-bottom: 0.5rem;
      }
      .products__stock {
        font-size: var(--normal-font-size);
      }
    }
  }

  .products__title {
    font-size: var(--h3-font-size);
    color: var(--text-color-light);
    margin-bottom: 0.5rem;
  }

  .products__stock {
    font-size: var(--small-font-size);
  }
`

S.Product = styled(motion.div)`
  .products__card {
    background-color: var(--container-color);
    border-radius: 0.5rem;

    &:hover .products__img {
      transform: translateY(-0.25rem);
    }
  }

  .products__img {
    width: 150px;
    transition: 0.4s;
  }

  .products__shape {
    background-color: var(--card-color);
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: center;
    padding: 0.25rem 0;
  }

  .products__data {
    padding: 1rem 0 1.25rem 1rem;
    position: relative;
  }

  .products__price {
    font-size: var(--h2-font-size);
  }

  .products__name {
    font-size: var(--normal-font-size);
  }

  .products__button {
    border-radius: 50%;
    padding: 0.625rem;
    display: inline-flex;
    font-size: 1.25rem;
    position: absolute;
    right: 1rem;
    top: -1.25rem;
    box-shadow: 0 4px 12px hsla(206, 4%, 4%, 0.2);
  }

  @media screen and (min-width: 1040px) {
    .products__filters {
      margin: 4rem 0 5.5rem;
      column-gap: 4rem;
    }

    .products__card {
      border-radius: 0.75rem;
    }

    .products__img {
      width: 200px;
    }

    .products__shape {
      padding: 2rem 0;
      border-radius: 0.75rem 0.75rem 0 0;
    }

    .products__data {
      padding: 1rem 0 1.5rem 1.5rem;
    }

    .products__name {
      font-size: var(--h3-font-size);
    }

    .products__button {
      font-size: 1.5rem;
      padding: 0.75rem;
      right: 1.5rem;
      top: -1.5rem;
    }
  }
`

const Filter = ({ activeType, handleActiveType }) => {
  return (
    <S.Filter>
      <li
        className={`products__item products__line ${activeType === 'delicacies' ? 'active' : ''}`}
        onClick={() => handleActiveType('delicacies')}
      >
        <h3 className="products__title">New Delicacies</h3>
        <span className="products__stock">3 products</span>
      </li>
      <li
        className={`products__item products__line ${activeType === 'coffee' ? 'active' : ''}`}
        onClick={() => handleActiveType('coffee')}
      >
        <h3 className="products__title">Hot Coffee</h3>
        <span className="products__stock">4 products</span>
      </li>
      <li
        className={`products__item products__line ${activeType === 'cake' ? 'active' : ''}`}
        onClick={() => handleActiveType('cake')}
      >
        <h3 className="products__title">Cakes and Delicacies</h3>
        <span className="products__stock">4 products</span>
      </li>
    </S.Filter>
  )
}

const Product = ({ product }) => {
  return (
    <S.Product
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duraiton: 1 }}
    >
      <article className="products__card">
        <div className="products__shape">
          <img src={`/img/${product.img}.png`} alt="" className="products__img" />
        </div>
        <div className="products__data">
          <h2 className="products__price">{product.price}</h2>
          <h3 className="products__name">{product.name}</h3>
          <button className="button products__button">
            <i className="bx bx-shopping-bag"></i>
          </button>
        </div>
      </article>
    </S.Product>
  )
}

const Products = ({ products }: AppProps) => {
  const initialType = 'coffee'
  const initialProducts = products.filter(product => product.filterType === initialType)
  const [filteredProducts, setFilteredProducts] = useState(initialProducts)
  const [activeType, setActiveType] = useState(initialType)

  const handleActiveType = (type: string) => {
    const filtered = products.filter(product => product.filterType === type)
    setActiveType(type)
    setFilteredProducts(filtered)
  }

  return (
    <S.Products className="products section" id="products">
      <div className="products__container container">
        <h2 className="section__title">Choose our delicious and best products</h2>
        <Filter activeType={activeType} handleActiveType={handleActiveType} />
        <div className="products__content grid">
          <AnimatePresence>
            {filteredProducts.map((product: Product) => (
              <Product key={product.img} product={product} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </S.Products>
  )
}

export default Products
