import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="sunriseAlt"
    class="climacon climacon_sunriseAlt"
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

        .climacon_componentWrap-sunriseAlt {

            -webkit-animation-name: translateSunrise, fillOpacity;
            -moz-animation-name: translateSunrise, fillOpacity;
            -o-animation-name: translateSunrise, fillOpacity;
            animation-name: translateSunrise, fillOpacity;

            -webkit-animation-duration: 12s, 6s;
            -moz-animation-duration: 12s, 6s;
            -o-animation-duration: 12s, 6s;
            animation-duration: 12s, 6s;

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

        @-webkit-keyframes translateSunrise {
          0% {
            -webkit-transform: translateY(0);
          }

          25% {
            -webkit-transform: translateY(-16.002px);
          }

          100% {
            -webkit-transform: translateY(-16.002px);
          }
        }

        @-moz-keyframes translateSunrise {
          0% {
            -moz-transform: translateY(0);
          }

          25% {
            -moz-transform: translateY(-16.002px);
          }

          100% {
            -moz-transform: translateY(-16.002px);
          }
        }

        @-o-keyframes translateSunrise {
          0% {
            -o-transform: translateY(0);
          }

          25% {
            -o-transform: translateY(-16.002px);
          }

          100% {
            -o-transform: translateY(-16.002px);
          }
        }

        @keyframes translateSunrise {
          0% {
            transform: translateY(0);
          }

          25% {
            transform: translateY(-16.002px);
          }

          100% {
            transform: translateY(-16.002px);
          }
        }
    ]]></style>


    <clipPath id="sunriseClip">
        <rect
        x="15"
        y="15"
        width="70"
        height="45"
        />
    </clipPath>
    <g class="climacon_iconWrap climacon_iconWrap-sunriseAlt">
        <g clip-path="url(#sunriseClip)">
            <g class="climacon_componentWrap climacon_componentWrap-sunriseAlt">
                <g class="climacon_componentWrap climacon_componentWrap-sunSpoke">
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                    d="M71.997,74.002h-3.999c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h3.999c1.104,0,2,0.895,2,2C73.997,73.105,73.104,74.002,71.997,74.002z"
                    />
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                    d="M64.141,60.689c-0.781,0.78-2.048,0.78-2.828,0c-0.779-0.781-0.779-2.047,0-2.828l2.828-2.828c0.78-0.78,2.047-0.78,2.828,0c0.78,0.781,0.78,2.047,0,2.828L64.141,60.689z"
                    />
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                    d="M50,56.003c-1.104,0-1.999-0.896-1.999-2v-3.999c0-1.104,0.896-2,1.999-2s2,0.896,2,2v3.999C52,55.107,51.104,56.003,50,56.003z"
                    />
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                    d="M35.86,60.689l-2.828-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.78,2.047-0.78,2.828,0l2.828,2.828c0.78,0.781,0.78,2.047,0,2.828C37.907,61.47,36.641,61.47,35.86,60.689z"
                    />
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                    d="M34.002,72.002c0,1.104-0.896,2-1.999,2h-4c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h4C33.106,70.002,34.002,70.896,34.002,72.002z"
                    />
                </g>
                <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                    <path
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                    d="M61.302,76h-4.381c0.683-1.176,1.078-2.539,1.078-3.998c0-4.418-3.581-8-7.999-8c-4.417,0-7.999,3.582-7.999,8c0,1.459,0.396,2.822,1.079,3.998h-4.381c-0.444-1.252-0.698-2.594-0.698-3.998c0-6.627,5.373-11.999,11.999-11.999c6.627,0,11.999,5.371,11.999,11.999C61.999,73.406,61.745,74.748,61.302,76z"
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
</svg><!-- sunriseAlt -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const SunriseAlt = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default SunriseAlt;
