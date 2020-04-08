const fs = require('fs');

const template = ({
  svgText,
  componentName,
}) => `import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = \`
${svgText}\`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const ${componentName} = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default ${componentName};
`;

const svgs = fs.readdirSync('./src/svgs');

svgs.forEach((file) => {
  const svgText = fs.readFileSync(`./src/svgs/${file}`);
  let componentName = file.replace('.svg', '');
  componentName = componentName[0].toUpperCase() + componentName.slice(1);
  const componentJS = template({
    svgText,
    componentName,
  });
  fs.writeFileSync(`./src/components/${componentName}.js`, componentJS, 'utf8');
});
