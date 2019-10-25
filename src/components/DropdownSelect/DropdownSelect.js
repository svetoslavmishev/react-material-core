import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormHelperText,
  FormControl,
  Select,
  Input,
  InputLabel,
  MenuItem
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import styles from './DropdownSelectStyles';

class DropdownSelect extends Component {
  state = {
    name: ''
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderChildren = () => {
    const { data } = this.props;

    return (
      data &&
      data.length > 0 &&
      data.map(item => (
        <MenuItem key={item.id} value={item.id}>
          {item.label}
        </MenuItem>
      ))
    );
  };

  render() {
    const { data, label, error, helpertext } = this.props;
    const { classes, ...rest } = this.props;
    const isDisabled = !data || !data.length;
    const disabledStyle = isDisabled && classes.disabled;

    return (
      <div className={classes.container}>
        <FormControl
          error={error}
          className={classNames(classes.formControl, disabledStyle)}
          {...rest}
        >
          {label && <InputLabel htmlFor="name-helper">{label}</InputLabel>}
          <Select
            disabled={isDisabled}
            value={this.state.name}
            onChange={this.onChange}
            input={<Input name="name" id="name-helper" />}
            IconComponent={ExpandMore}
            SelectDisplayProps={{
              style: {
                fontWeight: 400
              }
            }}
            MenuProps={{
              style: {
                maxHeight: 250
              },
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
              },
              PaperProps: {
                style: {
                  backgroundColor: '#fbfbfb',
                  borderRadius: 0
                }
              },
              MenuListProps: {
                disablePadding: true
              }
            }}
          >
            {this.renderChildren()}
          </Select>
          {helpertext && <FormHelperText>{helpertext}</FormHelperText>}
        </FormControl>
      </div>
    );
  }
}

DropdownSelect.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string
    }).isRequired
  ),
  label: PropTypes.string,
  helpertext: PropTypes.string,
  error: PropTypes.bool,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DropdownSelect);
