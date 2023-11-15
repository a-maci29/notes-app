import React from 'react';

export interface Props {
  title: string
  color?: string
}

const Header = (props: Props) => {
  return(
    <header>
      <h1>Hello</h1>
    </header>
  )
}

export default Header