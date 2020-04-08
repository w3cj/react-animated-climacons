import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudFog"
    class="climacon climacon_cloudFog"
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
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -webkit-animation-duration: 12s;
            -webkit-animation-direction: normal;
            -moz-transform-origin: 50% 50%;
            -moz-animation-iteration-count: infinite;
            -moz-animation-timing-function: linear;
            -moz-animation-duration: 12s;
            -moz-animation-direction: normal;
            -o-transform-origin: 50% 50%;
            -o-animation-iteration-count: infinite;
            -o-animation-timing-function: linear;
            -o-animation-duration: 12s;
            -o-animation-direction: normal;
            transform-origin: 50% 50%;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-duration: 12s;
            animation-direction: normal;
        }

        /* FOG */
        .climacon_component-stroke_fogLine {
            
            fill-opacity: 0.5;
          
            -webkit-animation-name: translateFog, fillOpacityFog;
            -moz-animation-name: translateFog, fillOpacityFog;
            -o-animation-name: translateFog, fillOpacityFog;
            animation-name: translateFog, fillOpacityFog;

            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;

            -webkit-animation-direction: normal;
            -moz-animation-direction: normal;
            -o-animation-direction: normal;
            animation-direction: normal;

            -webkit-animation-timing-function: ease-in;
            -moz-animation-timing-function: ease-in;
            -o-animation-timing-function: ease-in;
            animation-timing-function: ease-in;

            -webkit-animation-duration: 12s;
            -moz-animation-duration: 12s;
            -o-animation-duration: 12s;
            animation-duration: 12s;

        }

        .climacon_component-stroke_fogLine:nth-child(even) {
            -webkit-animation-delay: 6s;
            -moz-animation-delay: 6s;
            -o-animation-delay: 6s;
            animation-delay: 6s;
        }


        @-webkit-keyframes translateFog {
          0% {
            -webkit-transform: translateY(0);
          }

          25% {
            -webkit-transform: translateX(2.5px);
          }

          75% {
            -webkit-transform: translateX(-2.5px);
          }

          100% {
            -webkit-transform: translateX(0);
          }
        }

        @-moz-keyframes translateFog {
          0% {
            -moz-transform: translateY(0);
          }

          25% {
            -moz-transform: translateX(2.5px);
          }

          75% {
            -moz-transform: translateX(-2.5px);
          }

          100% {
            -moz-transform: translateX(0);
          }
        }

        @-o-keyframes translateFog {
          0% {
            -o-transform: translateY(0);
          }

          25% {
            -o-transform: translateX(2.5px);
          }

          75% {
            -o-transform: translateX(-2.5px);
          }

          100% {
            -o-transform: translateX(0);
          }
        }

        @keyframes translateFog {
          0% {
            transform: translateY(0);
          }

          25% {
            transform: translateX(2.5px);
          }

          75% {
            transform: translateX(-2.5px);
          }

          100% {
            transform: translateX(0);
          }
        }
        @-webkit-keyframes fillOpacityFog {
          0% {
            fill-opacity: 0.5;
            stroke-opacity: 0.5;
          }

          50% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          100% {
            fill-opacity: 0.5;
            stroke-opacity: 0.5;
          }
        }

        @-moz-keyframes fillOpacityFog {
          0% {
            fill-opacity: 0.5;
            stroke-opacity: 0.5;
          }

          50% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          100% {
            fill-opacity: 0.5;
            stroke-opacity: 0.5;
          }
        }

        @-o-keyframes fillOpacityFog {
          0% {
            fill-opacity: 0.5;
            stroke-opacity: 0.5;
          }

          50% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          100% {
            fill-opacity: 0.5;
            stroke-opacity: 0.5;
          }
        }

        @keyframes fillOpacityFog {
          0% {
            fill-opacity: 0.5;
            stroke-opacity: 0.5;
          }

          50% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          100% {
            fill-opacity: 0.5;
            stroke-opacity: 0.5;
          }
        }

    ]]></style>

    <g class="climacon_iconWrap climacon_iconWrap-cloudFog">
        <g class="climacon_componentWrap climacon_componentWrap-Fog">
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-top"
            d="M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.104,57.641,69.998,57.641z"/>
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-middle"
            d="M69.998,65.641H30.003c-1.104,0-2-0.896-2-2s0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,64.744,71.104,65.641,69.998,65.641z"/>
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-bottom"
            d="M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z"/>
        </g>
        <g class="climacon_componentWrap climacon_componentWrap-cloud">
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.651,3.342,11.301,8h-4.381C65.535,47.253,62.958,45.643,59.999,45.643z"/>
        </g>
    </g>
</svg><!--cloudFog -->
`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudFog = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudFog;
