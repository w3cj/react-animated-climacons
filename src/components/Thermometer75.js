import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg 
	version="1.1" 
	id="thermometer" 
	xmlns="http://www.w3.org/2000/svg" 
	xmlns:xlink="http://www.w3.org/1999/xlink" 
	x="0px" 
	y="0px"
	viewBox="15 15 70 70" 
	enable-background="new 15 15 70 70" 
	xml:space="preserve">
    <style type="text/css"><![CDATA[

        svg{
            shape-rendering: geometricPrecision;
        }

        g, path, circle, rect{
            
            -webkit-transform-origin: 50% 50%;
            -moz-transform-origin: 50% 50%;
            -o-transform-origin: 50% 50%;
            transform-origin: 50% 50%;

            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;

            -moz-animation-timing-function: linear;
            -webkit-animation-timing-function: linear;
            -o-animation-timing-function: linear;
            animation-timing-function: linear;

            -webkit-animation-duration: 12s;
            -moz-animation-duration: 12s;
            -o-animation-duration: 12s;
            animation-duration: 12s;

            -webkit-animation-direction: normal;
            -moz-animation-direction: normal;
            -o-animation-direction: normal;
            animation-direction: normal;

        }

       .climacon_component-stroke_thermoLine{
            -webkit-animation-name: translateThermoline;
            -moz-animation-name: translateThermoline;
            -o-animation-name: translateThermoline;
            animation-name: translateThermoline;

            -webkit-animation-iteration-count: 1;
            -moz-animation-iteration-count: 1;
            -o-animation-iteration-count: 1;
            animation-iteration-count: 1;

            -webkit-animation-duration: 3s;
            -moz-animation-duration: 3s;
            -o-animation-duration: 3s;
            animation-duration: 3s;

            -webkit-animation-delay: 0;
            -moz-animation-delay: 0;
            -o-animation-delay: 0;
            animation-delay: 0;

            -webkit-animation-fill-mode: both;
            -moz-animation-fill-mode: both;
            -o-animation-fill-mode: both;
            animation-fill-mode: both;

        }

        @-webkit-keyframes translateThermoline {
          0% {
            -webkit-transform: translateY(0);
          }

          100% {
            -webkit-transform: translateY(-15px);
          }
        }

        @-moz-keyframes translateThermoline {
          0% {
            -moz-transform: translateY(0);
          }

          100% {
            -moz-transform: translateY(-15px);
          }
        }

        @-o-keyframes translateThermoline {
          0% {
            -o-transform: translateY(0);
          }

          100% {
            -o-transform: translateY(-15px);
          }
        }

        @keyframes translateThermoline {
          0% {
            transform: translateY(0);
          }

          100% {
         	transform: translateY(-15px);
          }
        }

    ]]></style>
    <clipPath id="thermolineClip">
		<rect 
			x="15" 
			y="15" 
			width="70" 
			height="42.375"
		/>
	</clipPath>
    <g class="climacon_iconWrap climacon_iconWrap-thermometer climacon_iconWrap-thermometer-100">
	   <g class="climacon_componentWrap climacon_componentWrap-sunriseAlt">
			<path 
				class="climacon_component-stroke climacon_component-stroke_thermoBody"
				d="M56,54.72V38.001c0-3.313-2.688-5.999-6-5.999c-3.312,0-5.999,2.686-5.999,5.999V54.72c-1.241,1.409-2,3.253-2,5.278c0,4.418,3.582,7.999,7.999,7.999c4.418,0,7.999-3.581,7.999-7.999C57.999,57.973,57.24,56.129,56,54.72z M50,63.997c-2.208,0-3.999-1.79-3.999-3.999c0-1.477,0.81-2.752,2-3.445v-4.292V42v-3.999c0-1.104,0.895-2,1.999-2c1.104,0,2,0.896,2,2V42v10.261v4.292c1.189,0.693,2,1.969,2,3.445C54,62.207,52.209,63.997,50,63.997z"
			/>
			<circle 
				class="climacon_component-stroke climacon_component-stroke_thermoBall"
				cx="50" 
				cy="59.998" 
				r="3"
			/>
			<g clip-path="url(#thermolineClip)">
				<path 
					class="climacon_component-stroke climacon_component-stroke_thermoLine"
					id="thermoline" 
					d="M50,82.995c-1.656,0-3-1.344-3-3c0-1.305,0.838-2.402,2-2.816V61.935v-3.937c0-0.554,0.447-1,1-1c0.553,0,1,0.446,1,1v3.937v15.244c1.162,0.414,2,1.512,2,2.816C53,81.651,51.656,82.995,50,82.995z"
				/>
			</g>
		</g>
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

const Thermometer75 = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default Thermometer75;
