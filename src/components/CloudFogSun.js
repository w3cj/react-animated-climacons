import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudFogSun"
    class="climacon climacon_cloudFogSun"
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
    ]]></style>
    <clipPath id="cloudFillClip">
        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"/>
    </clipPath>
    <clipPath id="sunCloudFillClip">
        <path
        d="M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z"/>
    </clipPath>
    <clipPath id="cloudSunFillClip">
        <path
        d="M15,15v70h20.947V63.481c-4.778-2.767-8-7.922-8-13.84c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,5.262-3.394,9.723-8.107,11.341V85H85V15H15z"
        />
    </clipPath>
    <g class="climacon_iconWrap climacon_iconWrap-cloudFogSun">
        <g clip-path="url(#cloudSunFillClip)">
            <g class="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                <g class="climacon_componentWrap climacon_componentWrap_sunSpoke">
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
                <g class="climacon_componentWrap climacon_componentWrap-sunBody" clip-path="url(#sunCloudFillClip)">
                    <circle
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                    cx="58.033"
                    cy="41.612"
                    r="11.999"/>
                </g>
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
</svg><!--cloudFogSun -->
`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudFogSun = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudFogSun;
