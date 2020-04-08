import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `

<svg
    version="1.1"
    id="sunsetAltFill"
    class="climacon climacon_sunsetAltFill"
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

        .climacon_componentWrap-sunsetAlt {
            -webkit-animation-name: translateSunset;
            -moz-animation-name: translateSunset;
            -o-animation-name: translateSunset;
            animation-name: translateSunset;

            -webkit-animation-delay: 0;
            -moz-animation-delay: 0;
            -o-animation-delay: 0;
            animation-delay: 0;

            -webkit-animation-duration: 12s;
            -moz-animation-duration: 12s;
            -o-animation-duration: 12s;
            animation-duration: 12s;

            -webkit-animation-direction: normal;
            -moz-animation-direction: normal;
            -o-animation-direction: normal;
            animation-direction: normal;

            -webkit-animation-iteration-count: 1;
            -moz-animation-iteration-count: 1;
            -o-animation-iteration-count: 1;
            animation-iteration-count: 1;

            -webkit-animation-fill-mode: forwards;
            -moz-animation-fill-mode: forwards;
            -o-animation-fill-mode: forwards;
            animation-fill-mode: forwards;

        }

       .climacon_component-stroke_sunSpoke {
            -webkit-animation-name: scale;
            -moz-animation-name: scale;
            -o-animation-name: scale;
            animation-name: scale;

            -webkit-animation-direction: alternate;
            -moz-animation-direction: alternate;
            -o-animation-direction: alternate;
            animation-direction: alternate;

            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;

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

        .climacon_component-stroke_sunSpoke:nth-child(even) {
            -webkit-animation-delay: 3s;
            -moz-animation-delay: 3s;
            -o-animation-delay: 3s;
            animation-delay: 3s;
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

        @-webkit-keyframes translateSunset {
          0% {
            -webkit-transform: translateY(-16px);
          }

          25% {
            -webkit-transform: translateY(-4px);
          }

          100% {
            -webkit-transform: translateY(-4px);
          }
        }

        @-moz-keyframes translateSunset {
          0% {
            -moz-transform: translateY(-16px);
          }

          25% {
            -moz-transform: translateY(-4px);
          }

          100% {
            -moz-transform: translateY(-4px);
          }
        }

        @-o-keyframes translateSunset {
          0% {
            -o-transform: translateY(-16px);
          }

          25% {
            -o-transform: translateY(-4px);
          }

          100% {
            -o-transform: translateY(-4px);
          }
        }

        @keyframes translateSunset {
          0% {
            transform: translateY(-16px);
          }

          25% {
            transform: translateY(-4px);
          }

          100% {
            transform: translateY(-4px);
          }
        }

    ]]></style>
    <clipPath id="sunriseFillClip">
        <rect x="15" y="15" width="70" height="48.999"/>
    </clipPath>
    <g class="climacon_iconWrap climacon_iconWrap-sunsetAltFill">
        <g clip-path="url(#sunriseFillClip)">
            <g class="climacon_componentWrap climacon_componentWrap-sunset climacon_componentWrap-sunsetAlt">
                <g class="climacon_componentWrap climacon_componentWrap-sunSpoke">
                    <path 
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                    d="M72.31,77.999h-3.998c-1.104,0-2-0.896-2-1.999s0.896-2,2-2h3.998c1.104,0,2,0.896,2,2S73.416,77.999,72.31,77.999z"
                    />
                    <path 
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                    d="M64.455,64.688c-0.781,0.781-2.05,0.781-2.828,0c-0.781-0.78-0.781-2.047,0-2.828l2.828-2.827c0.778-0.781,2.047-0.781,2.828,0c0.778,0.78,0.778,2.047,0,2.827L64.455,64.688z"
                    />
                    <path 
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M50.313,60.002c-1.104,0-2-0.896-2-2v-3.999c0-1.104,0.896-2,2-2s2,0.896,2,2v3.999C52.313,59.105,51.416,60.002,50.313,60.002z"
                    />
                    <path 
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                    d="M36.172,64.688l-2.828-2.828c-0.781-0.78-0.781-2.047,0-2.827c0.781-0.781,2.047-0.781,2.828,0L39,61.859c0.781,0.781,0.781,2.048,0,2.828C38.22,65.469,36.954,65.469,36.172,64.688z"
                    />
                    <path 
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                    d="M34.314,76c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.999-0.896-1.999-1.999s0.896-2,1.999-2h4C33.419,74,34.314,74.896,34.314,76z"
                />
                </g>
                <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                    <circle 
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                    cx="50.313" 
                    cy="76" 
                    r="11.999"
                    />
                    <circle 
                    class="climacon_component climacon_component-fill climacon_component-fill_sunBody"
                    fill="#FFFFFF" 
                    cx="50.001" 
                    cy="76" 
                    r="7.999"
                    />
                </g>
            </g>
        </g>
        <g class="climacon_wrapperComponent climacon_wrapperComponent-horizonLine">
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_horizonLine"
            d="M40.001,63.998h19.998c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H40.001c-1.104,0-2-0.895-2-2C38.001,64.895,38.897,63.998,40.001,63.998z"
            />
        </g>
    </g>
</svg><!-- sunsetAltFill-->
`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const SunsetAltFill = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default SunsetAltFill;
