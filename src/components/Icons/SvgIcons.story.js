/* eslint-disable import/first */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { MarkerIcon, DeleteIcon, AgreementIcon } from './index';

const options = {
  None: null,
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow'
};

const size = {
  small: '24',
  medium: '32',
  large: '40'
};

storiesOf('UI|SvgIcons', module)
  .add('marker', () => (
    <MarkerIcon
      style={{
        fill: select('Color', options, null),
        'font-size': select('Size', size, null)
      }}
    />
  ))
  .add('delete', () => <DeleteIcon />)
  .add('agreement', () => <AgreementIcon />);
