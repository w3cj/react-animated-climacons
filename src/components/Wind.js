import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="wind"
    class="climacon climacon_wind"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="15 15 70 70"
    enable-background="new 15 15 70 70"
    xml:space="preserve">
    <style type="text/css"><![CDATA[

        svg{
            shape-rendering: geometricPrecision
        }

        g, path, circle, rect{
        
            -webkit-transform-origin: 50% 50%;
            -moz-transform-origin: 50% 50%;
            -o-transform-origin: 50% 50%;
            transform-origin: 50% 50%;

            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            animation-timing-function: linear;
            -o-animation-timing-function: linear;
  
            -o-animation-direction: normal;
            animation-direction: normal;
            -webkit-animation-direction: normal;
            -moz-animation-direction: normal;

            -moz-animation-iteration-count: infinite;
            -webkit-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;

            -moz-animation-duration: 12s;
            -webkit-animation-duration: 12s;
            -o-animation-duration: 12s;
            animation-duration: 12s;

        }

        .climacon_componentWrap-wind{
          -webkit-animation-name: translateWind;
          -moz-animation-name: translateWind;
          -o-animation-name: translateWind;
          animation-name: translateWind;

          -webkit-animation-duration: 4s;
          -moz-animation-duration: 4s;
          -o-animation-duration: 4s;
          animation-duration: 4s;

          -webkit-animation-direction: alternate;
          -moz-animation-direction: alternate;
          -o-animation-direction: alternate;
          animation-direction: alternate;

          -webkit-animation-timing-function: ease-in-out;
          -moz-animation-timing-function: ease-in-out;
          -o-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
        }

        @-webkit-keyframes translateWind {
          0% {
            -webkit-transform: translateY(0);
          }

          25% {
            -webkit-transform: translateX(4.998px);
          }

          75% {
            -webkit-transform: translateX(-4.998px);
          }

          100% {
            -webkit-transform: translateX(0);
          }
        }

        @-moz-keyframes translateWind {
          0% {
            -moz-transform: translateY(0);
          }

          25% {
            -moz-transform: translateX(4.998px);
          }

          75% {
            -moz-transform: translateX(-4.998px);
          }

          100% {
            -moz-transform: translateX(0);
          }
        }

        @-o-keyframes translateWind {
          0% {
            -o-transform: translateY(0);
          }

          25% {
            -o-transform: translateX(4.998px);
          }

          75% {
            -o-transform: translateX(-4.998px);
          }

          100% {
            -o-transform: translateX(0);
          }
        }

        @keyframes translateWind {
          0% {
            transform: translateY(0);
          }

          25% {
            transform: translateX(4.998px);
          }

          75% {
            transform: translateX(-4.998px);
          }

          100% {
            transform: translateX(0);
          }
        }
    ]]></style>
    <g class="climacon_iconWrap climacon_iconWrap-wind">
        <g class="climacon_wrapperComponent climacon_componentWrap-wind">
            <path
            class="climacon_component climacon_component-stroke climacon_component-wind climacon_component-wind_curl"
            d="M65.999,52L65.999,52h-3c-1.104,0-2-0.895-2-1.999c0-1.104,0.896-2,2-2h3c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2s-2-0.896-2-2s0.896-2,2-2c0.138,0,0.271,0.014,0.401,0.041c3.121,0.211,5.597,2.783,5.597,5.959C71.997,49.314,69.312,52,65.999,52z"/>
            <path 
            class="climacon_component climacon_component-stroke climacon_component-wind"
            d="M55.999,48.001h-2h-6.998H34.002c-1.104,0-1.999,0.896-1.999,2c0,1.104,0.895,1.999,1.999,1.999h2h3.999h3h4h3h3.998h2c3.313,0,6,2.688,6,6c0,3.176-2.476,5.748-5.597,5.959C56.271,63.986,56.139,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2s2-0.896,2-2s-0.896-2-2-2h-2h-3.998h-3h-4h-3h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998h2c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2-0.895-2-2c0-1.104,0.896-2,2-2c0.14,0,0.272,0.015,0.403,0.041c3.121,0.211,5.597,2.783,5.597,5.959C61.999,45.314,59.312,48.001,55.999,48.001z"/>
        </g>
    </g>
</svg><!-- wind -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const Wind = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default Wind;
