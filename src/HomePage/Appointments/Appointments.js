	import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Appointments.css';
import Slides from './Slides/Slides';

const pages = [
  ({ style }) => 
  <animated.div 
    style={{ ...style, background: 'url(https://images5.alphacoders.com/107/1075794.jpg) fixed', backgroundSize:"cover" }}
  >
  	<Slides/>
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'url(https://static.wixstatic.com/media/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.jpg/v1/fill/w_1396,h_932,al_c,q_90,usm_0.66_1.00_0.01/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.webp) fixed' }}><p className="pa4 font f-subheadline lh-title">Termine</p></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'url(https://static.wixstatic.com/media/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.jpg/v1/fill/w_1396,h_932,al_c,q_90,usm_0.66_1.00_0.01/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.webp) fixed' }}><p className="pa4 font f-subheadline lh-title">Termine</p></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'url(https://static.wixstatic.com/media/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.jpg/v1/fill/w_1396,h_932,al_c,q_90,usm_0.66_1.00_0.01/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.webp) fixed' }}><p className="pa4 font f-subheadline lh-title">Termine</p></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'url(https://static.wixstatic.com/media/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.jpg/v1/fill/w_1396,h_932,al_c,q_90,usm_0.66_1.00_0.01/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.webp) fixed' }}><p className="pa4 font f-subheadline lh-title">Termine</p></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'url(https://static.wixstatic.com/media/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.jpg/v1/fill/w_1396,h_932,al_c,q_90,usm_0.66_1.00_0.01/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.webp) fixed' }}><p className="pa4 font f-subheadline lh-title">Termine</p></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'url(https://static.wixstatic.com/media/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.jpg/v1/fill/w_1396,h_932,al_c,q_90,usm_0.66_1.00_0.01/879330_b78feb4b421640a381e8252f05469f9b~mv2_d_2500_1669_s_2.webp) fixed' }}><p className="pa4 font f-subheadline lh-title">Termine</p></animated.div>,
]

export default function Appointments({marginTop}) {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 7), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
  	<div className="appointments" style={{marginTop:`${marginTop}`}}>
    	<div className="simple-trans-main" onClick={onClick}>
      		{transitions.map(({ item, props, key }) => {
        	const Page = pages[item]
        	return <Page key={key} style={props} />
      		})}
    	</div>
  	</div>

  )
}

