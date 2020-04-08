import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudRainAltFill"
    class="climacon climacon_cloudRainAltFill"
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

        /* RAIN */
        .climacon_component-stroke_rain {
          fill-opacity: 0;
          -webkit-animation-name: rainFall, fillOpacity2;
          -webkit-animation-timing-function: ease-in;
          -webkit-animation-duration: 2s;

          -moz-animation-name: rainFall, fillOpacity2;
          -moz-animation-timing-function: ease-in;
          -moz-animation-duration: 2s;

          -o-animation-name: rainFall, fillOpacity2;
          -o-animation-timing-function: ease-in;
          -o-animation-duration: 2s;

          animation-name: rainFall, fillOpacity2;
          animation-timing-function: ease-in;
          animation-duration: 2s;
        }

        .climacon_component-stroke_rain:nth-child(n+4) {
          -webkit-animation-delay: 1s;
          -moz-animation-delay: 1s;
          -o-animation-delay: 1s;
          animation-delay: 1s;
        
        }

        .climacon_component-stroke_rain_alt:nth-child(2) {
          -webkit-animation-delay: 1s;
          -moz-animation-delay: 1s;
          -o-animation-delay: 1s;
          animation-delay: 1s;

        }

        @-webkit-keyframes rainFall {
          0% {
            -webkit-transform: translateY(0);
          }

          100% {
            -webkit-transform: translateY(14px);
          }
        }

        @-moz-keyframes rainFall {
          0% {
            -moz-transform: translateY(0);
          }

          100% {
            -moz-transform: translateY(14px);
          }
        }

        @-o-keyframes rainFall {
          0% {
            -o-transform: translateY(0);
          }

          100% {
            -o-transform: translateY(14px);
          }
        }

        @keyframes rainFall {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(14px);
          }
        }


        @-webkit-keyframes rainFall2 {
          0% {
            -webkit-transform: translateY(0);
          }

          50% {
            -webkit-transform: translateY(14px);
          }

          100% {
            -webkit-transform: translateX(14px) translateY(14px);
          }
        }

        @-moz-keyframes rainFall2 {
          0% {
            -moz-transform: translateY(0);
          }

          50% {
            -moz-transform: translateY(14px);
          }

          100% {
            -moz-transform: translateX(14px) translateY(14px);
          }
        }

        @-o-keyframes rainFall2 {
          0% {
            -o-transform: translateY(0);
          }

          50% {
            -o-transform: translateY(14px);
          }

          100% {
            -o-transform: translateX(14px) translateY(14px);
          }
        }

        @keyframes rainFall2 {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(14px);
          }

          100% {
            transform: translateX(14px) translateY(14px);
          }
        }

        @-webkit-keyframes fillOpacity2 {
          0% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          50% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          100% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }
        }

        @-moz-keyframes fillOpacity2 {
          0% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          50% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          100% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }
        }

        @keyframes fillOpacity2 {
          0% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          50% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          100% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }
        }

        @keyframes fillOpacity2 {
          0% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          50% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          100% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }
        }

    ]]></style>
    <g class="climacon_iconWrap climacon_iconWrap-cloudRainAltFill">
        <g class="climacon_componentWrap climacon_componentWrap-rain climacon_componentWrap-rain_alt">
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- alt"
            d="M50.001,58.568l3.535,3.535c1.95,1.953,1.95,5.119,0,7.07c-1.953,1.953-5.119,1.953-7.07,0c-1.953-1.951-1.953-5.117,0-7.07L50.001,58.568z"/>
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- alt"
            d="M50.001,58.568l3.535,3.535c1.95,1.953,1.95,5.119,0,7.07c-1.953,1.953-5.119,1.953-7.07,0c-1.953-1.951-1.953-5.117,0-7.07L50.001,58.568z"/>
        </g>
        <g class="climacon_componentWrap climacon_componentWrap_cloud">
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"/>
            <path
            class="climacon_component climacon_component-fill climacon_component-fill_cloud"
            fill="#FFFFFF"
            d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"/>
        </g>
    </g>
</svg><!-- cloudRainAltFill -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudRainAltFill = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudRainAltFill;
