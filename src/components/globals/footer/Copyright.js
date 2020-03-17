import React from 'react'
import styled from 'styled-components'

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright">
      Copyright &copy; 2020 | Restaurant Marketing Hawaii
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  font-size: 0.7rem;
  text-align: center;
  color: var(--white);
  background: var(--mainBlue);
  
`

export default Copyright;