import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudDrizzleFillAlt"
    class="climacon climacon_cloudDrizzleFillAlt"
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
        
        .climacon_component-stroke_drizzle {
            fill-opacity: 0;

            -webkit-animation-name: drizzleFall, fillOpacity2;
            -moz-animation-name: drizzleFall, fillOpacity2;
            -o-animation-name: drizzleFall, fillOpacity2;
            animation-name: drizzleFall, fillOpacity2;

            -webkit-animation-timing-function: ease-in;
            -moz-animation-timing-function: ease-in;
            -o-animation-timing-function: ease-in;
            animation-timing-function: ease-in;

            -webkit-animation-duration: 1s;
            -moz-animation-duration: 1s;
            -o-animation-duration: 1s;
            animation-duration: 1s;

        }

        .climacon_component-stroke_drizzle:nth-child(1) {
            -webkit-animation-delay: 0s;
            -moz-animation-delay: 0s;
            -o-animation-delay: 0s;
            animation-delay: 0s;
        }

        .climacon_component-stroke_drizzle:nth-child(2) {
            -webkit-animation-delay: 0.6s;
            -moz-animation-delay: 0.6s;
            -o-animation-delay: 0.6s;
            animation-delay: 0.6s;
        }

        .climacon_component-stroke_drizzle:nth-child(3) {
            -webkit-animation-delay: 1.2s;
            -moz-animation-delay: 1.2s;
            -o-animation-delay: 1.2s;
            animation-delay: 1.2s;
        } 

       @-webkit-keyframes drizzleFall {
          0% {
            -webkit-transform: translateY(0);
          }

          100% {
            -webkit-transform: translateY(21px);
          }
        }

        @-moz-keyframes drizzleFall {
          0% {
            -moz-transform: translateY(0);
          }

          100% {
            -moz-transform: translateY(21px);
          }
        }        

        @-o-keyframes drizzleFall {
          0% {
            -o-transform: translateY(0);
          }

          100% {
            -o-transform: translateY(21px);
          }
        }       

        @keyframes drizzleFall {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(21px);
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

        @-o-keyframes fillOpacity2 {
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
    <g class="climacon_iconWrap climacon_iconWrap-cloudDrizzleFillAlt">
        <g class="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left"
            id="Drizzle-Left_1_"
            d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z"/>
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle"
            d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z"/>
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right"
            d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z"/>
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
</svg><!-- cloudDrizzleFillAlt -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudDrizzleAltFill = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudDrizzleAltFill;
