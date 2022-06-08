import React, { ReactNode, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type Props = {
  children: [ReactNode]
  timeTillClose: number
}

const BannerCustom = ({ children, timeTillClose = 10000 }: Props) => {
  const [closed, setClosed] = useState(false)
  const closeBanner = () => {
    setClosed(true)
  }

  const timeoutTime = timeTillClose

  setTimeout(() => {
    setClosed(true)
  }, timeoutTime)

  const CSS_HANDLES = ['banner__container', 'button__container', 'button']

  const handles = useCssHandles(CSS_HANDLES)

  return closed ? (
    <div />
  ) : (
    <div className={handles.banner__container}>
      <div className={handles.button__container}>
        <button className={handles.button} onClick={closeBanner}>
          X
        </button>
      </div>
      {children}
    </div>
  )
}

export default BannerCustom
