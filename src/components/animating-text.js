import React from 'react'

// Provide the list of text to be animated one after the another
// provide the class names as well for container and the child elements
export default function AnimatingText(props) {
  return (
    <span className={props.containerClassName}>
      {
        props.textList.map((text) =>
          <span key={text} className={props.textClassName}>
            <em>{text}</em>
          </span>
        )
      }
    </span>
  )
}
