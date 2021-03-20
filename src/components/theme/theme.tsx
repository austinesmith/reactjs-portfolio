import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
});

type UserProps = {
  name: string
  age: number
  children: JSX.Element
}

const Theme = (props: UserProps) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;