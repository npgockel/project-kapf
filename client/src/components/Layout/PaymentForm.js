import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function PaymentForm() {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Health Info and Comments
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <TextField
            id="outlined-multiline-static"
            label="Allergies"
            multiline
            rows={4}
            // defaultValue="trucks, rock'n'roll, etc."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
            id="outlined-multiline-static"
            label="Medical Instructions"
            multiline
            rows={4}
            // defaultValue="trucks, rock'n'roll, etc."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
            id="outlined-multiline-static"
            label="Favorite Things"
            multiline
            rows={4}
            // defaultValue="trucks, rock'n'roll, etc."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-multiline-static"
            label="Rules - TV and such"
            multiline
            rows={4}
            // defaultValue="trucks, rock'n'roll, etc."
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PaymentForm;