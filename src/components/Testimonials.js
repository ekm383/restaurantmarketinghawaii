import React from 'react'
import styled from 'styled-components'

const Testimonials = ({ content, author, restaurant }) => {
  return (
    <TestimonialWrapper>
      <p>{content}</p>
      <h5>{author}, {restaurant}</h5>
    </TestimonialWrapper>
  )
}

const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    margin: 10px 0px;
  }
`

export default Testimonials
