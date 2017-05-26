import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  AppLayout,
  ButtonsPage,
  ColorPage,
  FormPage,
  HomePage,
  IconsPage,
  TypographyPage
} from 'containers';

export default (
	<Route path="/" component={AppLayout}>
		<IndexRoute component={HomePage} />
    <Route path="/buttons" component={ButtonsPage} />
    <Route path="/color" component={ColorPage} />
    <Route path="/icons" component={IconsPage} />
		<Route path="/typography" component={TypographyPage} />
    <Route path="/form" component={FormPage} />
	</Route>
);
