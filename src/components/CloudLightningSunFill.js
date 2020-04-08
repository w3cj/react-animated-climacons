import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudLightningSunFill"
    class="climacon climacon_cloudLightningSunFill"
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
      .climacon_componentWrap-sun_cloud {

          -webkit-animation-name: behindCloudMove, rotate;
          -moz-animation-name: behindCloudMove, rotate;
          -o-animation-name: behindCloudMove, rotate;
          animation-name: behindCloudMove, rotate;

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

      .climacon_component-stroke_sunSpoke {
          fill-opacity: 0;
          -webkit-animation-name: fillOpacity, scale;
          -moz-animation-name: fillOpacity, scale;
          -o-animation-name: fillOpacity, scale;
          animation-name: fillOpacity, scale;

          -webkit-animation-direction: alternate;
          -moz-animation-direction: alternate;
          -o-animation-direction: alternate;
          animation-direction: alternate;

          -webkit-animation-iteration-count: 1, infinite;
          -moz-animation-iteration-count: 1, infinite;
          -o-animation-iteration-count: 1, infinite;
          animation-iteration-count: 1, infinite;

          -webkit-animation-delay: 3s, 0;
          -moz-animation-delay: 3s, 0;
          -o-animation-delay: 3s, 0;
          animation-delay: 3s, 0;

          -webkit-animation-duration: 3s;
          -moz-animation-duration: 3s;
          -o-animation-duration: 3s;
          animation-duration: 3s;

          -webkit-animation-fill-mode: both;
          -moz-animation-fill-mode: both;
          -o-animation-fill-mode: both;
          animation-fill-mode: both;

      }

      .climacon_component-stroke_sunSpoke:nth-child(even) {
          -webkit-animation-delay: 3s;
          -moz-animation-delay: 3s;
          -o-animation-delay: 3s;
          animation-delay: 3s;

      }
          @-webkit-keyframes rotate{
              0%{
                  -webkit-transform: rotate(0);
              }
              100%{
                  -webkit-transform: rotate(360deg);
              }   
          }


          @-moz-keyframes rotate{
              0%{
                  -moz-transform: rotate(0);
              }
              100%{
                  -moz-transform: rotate(360deg);
              }   
          }


          @-o-keyframes rotate{
              0%{
                  -o-transform: rotate(0);
              }
              100%{
                  -o-transform: rotate(360deg);
              }   
          }

          @keyframes rotate{
              0%{
                  transform: rotate(0);
              }
              100%{
                  transform: rotate(360deg);
              }   
          }

          @-webkit-keyframes scale{
              0%{
                  -webkit-transform: scale(1,1)
              }
              100%{
                  -webkit-transform: scale(.5,.5)
              }   
          }

          @-moz-keyframes scale{
              0%{
                  -moz-transform: scale(1,1)
              }
              100%{
                  -moz-transform: scale(.5,.5)
              }   
          }

          @-o-keyframes scale{
              0%{
                  -o-transform: scale(1,1)
              }
              100%{
                  -o-transform: scale(.5,.5)
              }   
          }

          @keyframes scale{
              0%{
                  transform: scale(1,1)
              }
              100%{
                  transform: scale(.5,.5)
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

          @-webkit-keyframes fillOpacity {
            0% {
              fill-opacity: 0;
              stroke-opacity: 0;
            }

            100% {
              fill-opacity: 1;
              stroke-opacity: 1;
            }
          }

          @-moz-keyframes fillOpacity {
            0% {
              fill-opacity: 0;
              stroke-opacity: 0;
            }

            100% {
              fill-opacity: 1;
              stroke-opacity: 1;
            }
          }

          @-o-keyframes fillOpacity {
            0% {
              fill-opacity: 0;
              stroke-opacity: 0;
            }

            100% {
              fill-opacity: 1;
              stroke-opacity: 1;
            }
          }

          @keyframes fillOpacity {
            0% {
              fill-opacity: 0;
              stroke-opacity: 0;
            }

            100% {
              fill-opacity: 1;
              stroke-opacity: 1;
            }
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

    <g class="climacon_iconWrap climacon_iconWrap-cloudLightning">
        <g clip-path="url(#clip)">
            <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                <g class="climacon_componentWrap climacon_componentWrap_sunSpoke" >
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z"/>
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z"/>
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z"/>
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z"/>
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z"/>
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z"/>
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z"/>
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z"/>
                </g>
                <g class="climacon_componentWrap climacon_componentWrap-sunBody" >
                    <circle
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                    cx="58.033"
                    cy="41.612"
                    r="11.999"/>
                    <circle
                    class="climacon_component climacon_component-fill climacon_component-fill_sunBody"
                    fill="#FFFFFF"
                    cx="58.033"
                    cy="41.612" r="7.999"/>
                </g>
            </g>
        </g>
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
</svg><!--cloudLightningSunFill -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudLightningSunFill = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudLightningSunFill;
