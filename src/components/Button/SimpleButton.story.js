/* eslint-disable import/first */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { SimpleButton } from '../index';

storiesOf('Button', module)
  .addParameters({
    backgrounds: [{ name: 'Dark blue', value: '#2C3E50', default: true }]
  })
  .add('with text and knobs', () => (
    <SimpleButton onClick={action('click')} label={text('Label', 'Submit')} />
  ))
  .add('with some emoji and knobs', () => (
    <SimpleButton
      onClick={action('click')}
      label={
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      }
    />
  ));
