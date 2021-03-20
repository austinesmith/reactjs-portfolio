import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import {useChangeTheme} from '../darkmode';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const Exercises: React.FC = () => {
    const defaultTheme = useTheme();
    const theme = useTheme();
    const changeTheme = useChangeTheme();

    return (
        <div style={{height: 0}}>
    <IconButton
      title="Toggle light/dark mode"
      onClick={()=>changeTheme()}
    >
      {theme.palette.type === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
    <Typography>
      Clicking on the Toggle Icon above will change my color
    </Typography>
    <p></p>
    </div>
    )
};

export default Exercises;
