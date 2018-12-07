import { get } from 'lodash';

const mockCSSVariables = {
  '--light-background': '#227733',
  '--color-mustard': '#117733',
  '--color-sea-green': '#223344',
  '--white': '#fff',
  '--ring': '#995522',
  '--background': '#227733',
  '--animation-scale-factor': 1,
  '--animation-duration-fast': `${(1 * 0.3)}s`,
  '--animation-duration-fast-ms': 1000 * 0.3,
  '--animation-duration-standard': `${(1 * 0.5)}s`,
  '--animation-duration-standard-ms': 1000 * 0.5,
  '--animation-duration-slow': `${(1 * 1)}s`,
  '--animation-duration-slow-ms': 1000 * 1,
  '--animation-easing': 'cubic-bezier(0.4, 0, 0.2, 1)',
  '--animation-easing-js': '[0.4, 0, 0.2, 1]',
};

const getCSSVariable = (cssVariableName) => {
  const variable = get(mockCSSVariables, cssVariableName);
  if (!variable) throw new Error(`CSS variable "${cssVariableName}" not found`);
  return variable;
};

export const getCSSVariableAsString = variableName =>
  getCSSVariable(variableName);

export const getCSSVariableAsNumber = variableName =>
  parseInt(getCSSVariable(variableName), 10);

export const getCSSVariableAsObject = variableName =>
  JSON.parse(getCSSVariable(variableName));
