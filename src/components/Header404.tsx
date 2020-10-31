import tw from 'tailwind.macro'
import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Content from './Content'
import Description from './Description'
import { FormattedMessage, Link as IntlLink, useIntl,IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const Intro = styled(Content)`
  ${tw`py-8 md:py-16`};
`

const Title = styled.h1`
  ${tw`text-3xl md:text-5xl`};
  span {
    ${tw`text-orange`};
  }
`

const Social = styled.section`
  ${tw`flex flex-wrap items-center justify-center sm:justify-start mt-8`};
`

const Button = styled(OutboundLink)`
  ${tw`cursor-pointer text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline`};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px);
  }
`

const Homepage = styled(Button)`
  ${tw`bg-indigo text-white`};
`

const GitHub = styled(Button)`
  ${tw`bg-grey-dark text-white sm:mx-4 my-4 sm:my-0`};
`

const Twitter = styled(Button)`
  ${tw`bg-blue text-white`};
`

const languageName = {
  en: "English",
  zh: "中文",
}

function Header(){
  const intl = useIntl()
  return(
    <Intro>
      <div 
      style={{
        textAlign:'right'
      }}
      >
      <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
              languages.map(language => (
                <a

                  key={language}
                  onClick={() => changeLocale(language)}
                  style={{
                    color: currentLocale === language ? `#f6993f` : `white`,
                    margin: 10,
                    textDecoration: currentLocale === language ? `underline` : `none`,
                    cursor: `pointer`,
                    focus: currentLocale === language ? true : false
                  }}
                >
                  {languageName[language]}
                </a>
              ))
            }
      </IntlContextConsumer>
      </div>
      
    <Title>
      <FormattedMessage id="404" />
      <span><FormattedMessage id="dot" /></span>
    </Title>
    <Description>
      <p>
      <FormattedMessage id="404_content" />
        <span><FormattedMessage id="dot" /></span> <br />
        <FormattedMessage id="404_advices" />
        <span><FormattedMessage id="question_mark" /></span>
      </p>
    </Description>
    <Social>
      <Homepage role="button" href="https://kidozh.com">
      <FormattedMessage id="homepage" />
      </Homepage>
      <GitHub role="button" href="https://github.com/kidozh">
        GitHub
      </GitHub>
      {/* <Twitter role="button" href="https://twitter.com/lekoarts_de">
        Twitter
      </Twitter> */}
    </Social>
  </Intro>
  )
}
// const Header = () => (
  
// )

export default Header
