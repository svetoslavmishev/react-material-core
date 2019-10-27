import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../src/themes/theme';

const stylesDecorator = storyFn => (
  <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
);

addDecorator(withKnobs);
addParameters({ viewports: 'responsive' });
addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS
    }
  }
});
addDecorator(centered);
addDecorator(stylesDecorator);

const req = require.context('../src/components', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
