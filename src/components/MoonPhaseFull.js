import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg 
	ersion="1.1" 
	id="Layer_1" 
	xmlns="http://www.w3.org/2000/svg" 
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" 
	y="0px"
	viewBox="15 15 70 70" 
	enable-background="new 15 15 70 70" 
	xml:space="preserve">
		<clipPath>
			<path 
				id="MoonFullMask" 
				d="M15,15v70h70V15H15z M50,61.998c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c6.626,0,11.998,5.372,11.998,11.999C61.998,56.626,56.627,61.998,50,61.998z"/>
			<path 
				id="moonFillMask"
				d="M15,15v70h70V15H15z M50,57.998c-4.418,0-8-3.581-8-7.999c0-4.417,3.582-7.998,8-7.998s7.998,3.581,7.998,7.998C57.998,54.417,54.418,57.998,50,57.998z"/>
		</clipPath>
        <g class="climacon_componentWrap climacon_componentWrap-snowflake" clip-path="url(#moonFillMask)">
		<circle 
            class="climacon_component climacon_component-stroke climacon_component-stroke"
			id="moonStroke" 
			cx="50" 
			cy="50" 
			r="12"/>
		</g>
        <g class="climacon_componentWrap climacon_componentWrap-snowflake" clip-path="url(#MoonFullMask)">

		<path 
            class="climacon_component climacon_component-stroke climacon_component-stroke_moon-shadow"
			d="M50,61.998C56.627,61.997,61.999,56.625,61.999,50c0-6.627-5.372-11.998-11.999-11.999V61.998z"/>
		</g>
</svg>
`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const MoonPhaseFull = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default MoonPhaseFull;
