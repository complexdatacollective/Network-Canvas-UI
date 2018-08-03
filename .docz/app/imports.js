export const imports = {
  'components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button" */ 'components/Button.mdx'),
  'components/Node.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-node" */ 'components/Node.mdx'),
  'components/Spinner.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-spinner" */ 'components/Spinner.mdx'),
  'components/Fields/CheckboxGroup.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-fields-checkbox-group" */ 'components/Fields/CheckboxGroup.mdx'),
  'components/Fields/RadioGroup.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-fields-radio-group" */ 'components/Fields/RadioGroup.mdx'),
  'components/Fields/Text.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-fields-text" */ 'components/Fields/Text.mdx'),
  'components/Fields/Toggle.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-fields-toggle" */ 'components/Fields/Toggle.mdx'),
  'components/Fields/ToggleButtonGroup.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-fields-toggle-button-group" */ 'components/Fields/ToggleButtonGroup.mdx'),
}
