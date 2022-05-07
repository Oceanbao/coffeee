import styled from '@emotion/styled'
import { useState, useEffect, useRef } from 'react'
import { setTimeout } from 'timers'

const S: any = {}
S.Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(0, 0%, 99%);
  display: grid;
  place-items: center;
  z-index: 1000;
  transition: all 0.5s linear;

  .gif {
    width: 210px;
  }

  &.remove {
    display: none;
  }

  &.hidden {
    opacity: 0;
  }
`

const Loader = () => {
  const [remove, setRemove] = useState(false)
  const [hidden, setHidden] = useState(false)
  const selfRef = useRef(null)

  /*
    if (box.classList.contains('hidden')) {
    box.classList.remove('hidden');
    setTimeout(function () {
      box.classList.remove('visuallyhidden');
    }, 20);
  */

  useEffect(() => {
    setTimeout(() => {
      setHidden(true)
      selfRef.current.addEventListener('transitionend', () => setRemove(true), {
        capture: false,
        once: true,
        passive: false,
      })
    }, 2500)
  }, [])

  return (
    <S.Loader className={`${hidden ? 'hidden' : ''} ${remove ? 'remove' : ''}`} ref={selfRef}>
      <img src="/img/loadcoffee.gif" alt="" className="gif" />
    </S.Loader>
  )
}

export default Loader
