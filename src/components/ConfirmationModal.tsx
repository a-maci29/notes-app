import React from 'react';
import Button, { ButtonTypeMap } from '@mui/material/Button';
import { ExtendButtonBase } from '@mui/material';

export interface Props {
  title: string
  color?: string
}

export interface Button {
  type: "submit"
}

const Header = (props: Props) => {
  return(
    <header>
      <h1>Hello</h1>
      <Button variant="outlined">Soy un Button</Button>
    </header>
  )
}

export default Header;
