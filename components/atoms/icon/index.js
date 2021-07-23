// interface IconsKeyObject {
//   [key: string]: any;
// }

// const icons: IconsKeyObject = {};
const icons = {};

const requireComponents = require.context(
  "../../../assets/icons/",
  false,
  /.svg$/
);

requireComponents.keys().forEach((fileName) => {
  const iconName = fileName.replace(/^\.\/(.+)\.svg$/, "$1");
  const componentConfig = requireComponents(fileName);
  icons[iconName] = componentConfig.default || componentConfig;
});

export default icons;
