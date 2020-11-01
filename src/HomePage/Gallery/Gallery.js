import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Gallery.css'
import Images from './Images/Images';
import {imageDetails} from './Images/imageDetails';

export default function Gallery({onClickChange}) {
  const pages = [
    ({ style }) => <animated.div style={{ ...style}}><div className="sectionTitle tr" style={{color:"#C1995B"}} >Gallery <span className="f6"><br/>Click anywhere</span></div></animated.div>,
    ({ style }) => <animated.div style={{ ...style}}><Images imageDetails={imageDetails} index={0}/><span className="navy f6 mt3 baskerville tc">Dorabella <br/> So machen's alle" (W.A. Mozart), Prinzregententheater München, 2018/19 <br/> 2018/19 © Jean-Marc Turmes </span></animated.div>,
    ({ style }) => <animated.div style={{ ...style}}><Images imageDetails={imageDetails} index={1}/><span className="navy f6 mt3 baskerville tc">Dorabella"So machen's alle" (W.A. Mozart), Prinzregententheater München, <br/> 2018/19 © Jean-Marc Turmes</span></animated.div>,
    ({ style }) => <animated.div style={{ ...style}}><Images imageDetails={imageDetails} index={2}/><span className="navy f6 mt3 baskerville tc">Vanina<br/>"L'Ancêtre" (C. Saint-Saëns), Prinzregententheater München, 2019 <br/> 2018/19 © Jean-Marc Turmes</span></animated.div>,
    ({ style }) => <animated.div style={{ ...style}}><Images imageDetails={imageDetails} index={3}/><span className="navy f6 mt3 baskerville tc">Dorabella <br/> So machen's alle" (W.A. Mozart), Prinzregententheater München, 2018/19 <br/> 2018/19 © Jean-Marc Turmes</span></animated.div>,
    ({ style }) => <animated.div style={{ ...style}}><Images imageDetails={imageDetails} index={4}/><span className="navy f6 mt3 baskerville tc">Glücksind <br/> "Der Teufel mit den drei goldenen Haaren" (S.J. Hanke), Prinzregententheater München, <br/> 2018 © Jean-Marc Turmes</span></animated.div>,
    ({ style }) => 
    <animated.div style={{ ...style}}>
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <a onClick={onClickChange} className="f-headline link pointer grow tc pa6" href='/' style={{fontFamily:"Mak", color:"#C1995B"}} >Upcoming appointments<span className="f6"><br/>Click me</span></a>
      </div>
    </animated.div>,
  ]
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 7), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return(<Page key={key} style={props} />)
      })}
    </div>
  )
}

