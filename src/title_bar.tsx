import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import yellow from "@material-ui/core/colors/yellow";

const styles = {
  root: {
    flexGrow: 1
  }
};

function TitleBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            今日の食神
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TitleBar);
