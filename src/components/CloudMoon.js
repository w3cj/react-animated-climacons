import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudMoon"
    class="climacon climacon_cloudMoon"
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

       .climacon_componentWrap-moon_cloud {
            -webkit-animation-name: behindCloudMove, wobble;
            -moz-animation-name: behindCloudMove, wobble;
            -o-animation-name: behindCloudMove, wobble;
            animation-name: behindCloudMove, wobble;

            -webkit-animation-iteration-count: 1, infinite;
            -moz-animation-iteration-count: 1, infinite;
            -o-animation-iteration-count: 1, infinite;
            animation-iteration-count: 1, infinite;

            -webkit-animation-timing-function: ease-out, linear;
            -moz-animation-timing-function: ease-out, linear;
            -o-animation-timing-function: ease-out, linear;
            animation-timing-function: ease-out, linear;

            -webkit-animation-delay: 0, 3s;
            -moz-animation-delay: 0, 3s;
            -o-animation-delay: 0, 3s;
            animation-delay: 0, 3s;

            -webkit-animation-duration: 3s, 12s;
            -moz-animation-duration: 3s, 12s;
            -o-animation-duration: 3s, 12s;
            animation-duration: 3s, 12s;
        }
        
     @-webkit-keyframes wobble{
            0%{
                -webkit-transform: rotate(0);
            }
            25%{
                -webkit-transform: rotate(-15deg);
            }
            50%{
                -webkit-transform: rotate(0);
            }
            75%{
                -webkit-transform: rotate(15deg);
            }
            100%{
                -webkit-transform: rotate(0deg);
            }
        }

        @-moz-keyframes wobble{
            0%{
                -moz-transform: rotate(0);
            }
            25%{
                -moz-transform: rotate(-15deg);
            }
            50%{
                -moz-transform: rotate(0);
            }
            75%{
                -moz-transform: rotate(15deg);
            }
            100%{
                -moz-transform: rotate(0deg);
            }
        }

        @-o-keyframes wobble{

            0%{
                -o-transform: rotate(0);
            }
            25%{
                -o-transform: rotate(-15deg);
            }
            50%{
                -o-transform: rotate(0);
            }
            75%{
                -o-transform: rotate(15deg);
            }
            100%{
                -o-transform: rotate(0deg);
            }
        }

        @keyframes wobble{
            0%{
                transform: rotate(0);
            }
            25%{
                transform: rotate(-15deg);
            }
            50%{
                transform: rotate(0);
            }
            75%{
                transform: rotate(15deg);
            }
            100%{
                transform: rotate(0deg);
            }
        }

        @-webkit-keyframes behindCloudMove {
            0% {
                -webkit-transform: translateX(-1.75px) translateY(1.75px);
            }

            100% {
                -webkit-transform: translateX(0) translateY(0);
            }
        }

            @-moz-keyframes behindCloudMove {
            0% {
                -moz-transform: translateX(-1.75px) translateY(1.75px);
            }

            100% {
                -moz-transform: translateX(0) translateY(0);
            }
         }

         @-o-keyframes behindCloudMove {
            0% {
                -o-transform: translateX(-1.75px) translateY(1.75px);
            }

            100% {
                -o-transform: translateX(0) translateY(0);
            }
        }

        @keyframes behindCloudMove {
            0% {
                transform: translateX(-1.75px) translateY(1.75px);
            }
            100% {
                transform: translateX(0) translateY(0);
            }
        }


    ]]></style>
    <clipPath id="cloudFillClip">
        <path
        d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"/>
    </clipPath>
    <clipPath id="moonCloudFillClip">
        <path
        d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"/>
    </clipPath>
    <g class="climacon_iconWrap climacon_iconWrap-cloudMoon">
        <g clip-path="url(#cloudFillClip)">
            <g class="climacon_componentWrap climacon_componentWrap-moon climacon_componentWrap-moon_cloud" clip-path="url(#moonCloudFillClip)">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_moon"
                d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"/>
            </g>
        </g>
        <g class="climacon_componentWrap climacon_componentWrap-cloud" clip-path="url(#cloudFillClip)">
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z"/>
        </g>
    </g>
</svg><!-- cloudMoon -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudMoon = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudMoon;
