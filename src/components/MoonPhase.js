import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg 
	version="1.1"
	id="Layer_1"
	xmlns="http://www.w3.org/2000/svg" 
	xmlns:xlink="http://www.w3.org/1999/xlink" 
	x="0px" 
	y="0px"
	viewBox="15 15 70 70" 
	enable-background="new 15 15 70 70" 
	xml:space="preserve">
	<clipPath id="MoonFullMask">
		<circle 
			cx="50" 
			cy="50" 
			r="11.999"/>
	</clipPath>
	<clipPath id="moonHalfMask">
		<path 
			d="M50,61.998C56.627,61.997,61.999,56.625,61.999,50c0-6.627-5.372-11.998-11.999-11.999V61.998z"/>
	</clipPath>
	<clipPath id="moonFillMask">
		<path 
			d="M15,15v70h70V15H15z M50,57.998c-4.418,0-8-3.581-8-7.999c0-4.417,3.582-7.998,8-7.998s7.998,3.581,7.998,7.998C57.998,54.417,54.418,57.998,50,57.998z"/>
	</clipPath>
    <g class="climacon_componentWrap climacon_componentWrap-moon">
		<circle 
            class="climacon_component climacon_component-stroke climacon_component-stroke_moon-stroke"
			cx="50" 
			cy="50" 
			r="11.999"/>
		<circle 
            class="climacon_component climacon_component-fill climacon_component-stroke_moon-fill"
			fill="#FFFFFF" 
			cx="50.001" 
			cy="50" 
			r="7.999"/>
	</g>
    <g class="climacon_componentWrap climacon_componentWrap-moonShadow" clip-path="url(#MoonFullMask)">
		<circle 
            class="climacon_component climacon_component-stroke climacon_component-stroke_moon-shadow"
			fill="#000000" 
			cx="60" 
			cy="50" 
			r="7.998"/>
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

const MoonPhase = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default MoonPhase;
