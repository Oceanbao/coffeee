import { useEffect } from 'react'
import styled from '@emotion/styled'

export const NavScroller = () => {
  // Nav Bar Visual Effect
  function handleScroll() {
    const nav = document.getElementById('nav')
    const header = document.getElementById('header')

    if (this.scrollY >= 50) nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')

    if (this.scrollY >= 50) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  }

  // Menu Highlight Effect
  function handleScrollActive() {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 58
      const sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
        document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('scroll', handleScrollActive)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScrollActive)
    }
  }, [])

  return <div id="scroller" onScroll={handleScroll}></div>
}

const S: any = {}

S.ScrollUp = styled.a`
  position: fixed;
  right: 1rem;
  bottom: -30%;
  background-color: #fff;
  box-shadow: 0 4px 12px hsla(206, 4%, 20%, 0.1);
  display: inline-flex;
  padding: 0.35rem;
  border-radius: 0.15rem;
  font-size: 1.25rem;
  color: var(--title-color);
  z-index: var(--z-tooltip);
  opacity: 0.9;
  transition: 0.4s;

  &:hover {
    transform: translateY(-0.25rem);
    opacity: 1;
  }
`

export const ScrollUp = () => {
  function handleScrollUp() {
    const scrollUp = document.getElementById('scroll-up')

    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
  }

  useEffect(() => {
    window.removeEventListener('scroll', handleScrollUp)
    window.addEventListener('scroll', handleScrollUp)
    return () => window.removeEventListener('scroll', handleScrollUp)
  }, [])

  return (
    <S.ScrollUp id="scroll-up">
      <i className="bx bx-up-arrow-alt"></i>
    </S.ScrollUp>
  )
}
