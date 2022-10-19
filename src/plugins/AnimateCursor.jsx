import React from 'react'
import AnimatedCursor from "react-animated-cursor"


const AnimateCursor = () => {
  return (
    <AnimatedCursor
    innerSize={15}
    outerSize={25}
    color='12, 71, 205'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
  />
  )
}

export default AnimateCursor