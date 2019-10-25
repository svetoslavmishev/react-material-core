/* eslint-disable import/first */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, boolean } from '@storybook/addon-knobs';
import DropdownSelect from './DropdownSelect';

const data = [
  { id: '1', label: 'Lorem ipsum #1' },
  { id: '2', label: 'Lorem ipsum #2' },
  { id: '3', label: 'Lorem ipsum #3' },
  { id: '4', label: 'Lorem ipsum #4' },
  { id: '5', label: 'Lorem ipsum #5' },
  { id: '6', label: 'Lorem ipsum #6' }
];

storiesOf('UI|DropdownSelect', module).add('dropdown select', () => (
  <DropdownSelect
    label={text('inputLabel', 'Dropdown label')}
    helpertext={text('helperText', 'Helper text if necessary')}
    error={boolean('Error', false)}
    data={object('Data', data)}
  />
));
