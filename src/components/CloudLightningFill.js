import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudLightningFill"
    class="climacon climacon_cloudLightningFill"
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

        /* LIGHTNING */
        .climacon_component-stroke_lightning {
            fill-opacity: 0;
            -webkit-animation-name: fillOpacityLightning;
            -moz-animation-name: fillOpacityLightning;
            -o-animation-name: fillOpacityLightning;
            animation-name: fillOpacityLightning;

            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;

            -webkit-animation-direction: normal;
            -moz-animation-direction: normal;
            -o-animation-direction: normal;
            animation-direction: normal;

            -webkit-animation-timing-function: ease-out;
            -moz-animation-timing-function: ease-out;
            -o-animation-timing-function: ease-out;
            animation-timing-function: ease-out;

            -webkit-animation-duration: 12s;
            -moz-animation-duration: 12s;
            -o-animation-duration: 12s;
            animation-duration: 12s;

        }

        @-webkit-keyframes fillOpacityLightning {
          0% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          1% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          7% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          50% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          51% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          53% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          54% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          60% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          100% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }
        }

        @-moz-keyframes fillOpacityLightning {
          0% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          1% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          7% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          50% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          51% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          53% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          54% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          60% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          100% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }
        }

        @-o-keyframes fillOpacityLightning {
          0% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          1% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          7% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          50% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          51% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          53% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          54% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          60% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          100% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }
        }

        @keyframes fillOpacityLightning {
          0% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          1% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          7% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          50% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          51% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          53% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          54% {
            fill-opacity: 1;
            stroke-opacity: 1;
          }

          60% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }

          100% {
            fill-opacity: 0;
            stroke-opacity: 0;
          }
        }

    ]]></style>
    <g class="climacon_iconWrap climacon_iconWrap-cloudLightningFill">
        <g class="climacon_componentWrap climacon_componentWrap-lightning">
            <polygon
            class="climacon_component climacon_component-stroke climacon_component-stroke_lightning"
            points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 "/>
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
</svg><!--cloudLightningFill -->
`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudLightningFill = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudLightningFill;
