import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudFogMoon"
    class="climacon climacon_cloudFogMoon"
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
    <clipPath id="moonCloudFillClip">
        <path
        d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"/>
    </clipPath>
    <clipPath id="cloudFillClip">
        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"/>
    </clipPath>
    <g class="climacon_iconWrap climacon_iconWrap-cloudFogMoon">
        <g clip-path="url(#cloudFillClip)">
            <g class="climacon_componentWrap climacon_componentWrap-moon climacon_componentWrap-moon_cloud" clip-path="url(#moonCloudFillClip)">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"/>
            </g>
        </g>
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
</svg><!-- cloudFogMoon -->
`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudFogMoon = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudFogMoon;
