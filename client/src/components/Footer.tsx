import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <section>
        <p> &copy; Copyright 2021 </p>
      </section>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  width: 100%;
  background: #130912;
  display: flex;
  overflow: hidden;
  height: 6rem;
  padding: 0 3rem;
  margin-top: 6rem;
`