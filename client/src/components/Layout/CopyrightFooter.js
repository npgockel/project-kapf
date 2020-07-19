import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';






function CopyrightFooter() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Nanny Nugget
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export default CopyrightFooter;