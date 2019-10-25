import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './SimpleButtonStyles.js';

class SimpleButton extends Component {
  render() {
    const { label, classes, ...rest } = this.props;

    return (
      <Button
        className={classes.btn}
        color="primary"
        variant="contained"
        {...rest}
      >
        <span>{label}</span>
      </Button>
    );
  }
}

SimpleButton.propTypes = {
  label: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(SimpleButton);
