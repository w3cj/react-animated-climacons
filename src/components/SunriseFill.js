import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="sunriseFill"
    class="climacon climacon_sunriseFill"
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

        .climacon_component-stroke_arrow-up {

            fill-opacity: 0;

            -webkit-animation-name: fillOpacity2, translateArrowUp;
            -moz-animation-name: fillOpacity2, translateArrowUp;
            -o-animation-name: fillOpacity2, translateArrowUp;
            animation-name: fillOpacity2, translateArrowUp;

            -webkit-animation-duration: 3s;
            -moz-animation-duration: 3s;
            -o-animation-duration: 3s;
            animation-duration: 3s;

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

        @-webkit-keyframes translateArrowUp {
          0% {
            -webkit-transform: translateY(-2.002px);
          }

          100% {
            -webkit-transform: translateY(-4.998px);
          }
        }


        @-moz-keyframes translateArrowUp {
          0% {
            -moz-transform: translateY(-2.002px);
          }

          100% {
            -moz-transform: translateY(-4.998px);
          }
        }


        @-o-keyframes translateArrowUp {
          0% {
            -o-transform: translateY(-2.002px);
          }

          100% {
            -o-transform: translateY(-4.998px);
          }
        }


        @keyframes translateArrowUp {
          0% {
            transform: translateY(-2.002px);
          }

          100% {
            transform: translateY(-4.998px);
          }
        }

    ]]></style>
    <g class="climacon_iconWrap climacon_iconWrap-sunriseFill">
        <g class="climacon_componentWrap climacon_componentWrap-sunrise">
            <g class="climacon_componentWrap climacon_componentWrap-sunSpoke">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                d="M71.997,57.999h-3.998c-1.104,0-2-0.896-2-1.999s0.896-2,2-2h3.998c1.104,0,2,0.896,2,2S73.104,57.999,71.997,57.999z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                d="M64.143,44.688c-0.781,0.781-2.05,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.778-0.781,2.047-0.781,2.828,0c0.778,0.781,0.778,2.047,0,2.828L64.143,44.688z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                d="M50.001,40.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.001,39.106,51.104,40.002,50.001,40.002z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                d="M35.86,44.688l-2.828-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.781-0.781,2.047-0.781,2.828,0l2.828,2.828c0.781,0.781,0.781,2.047,0,2.828C37.907,45.469,36.641,45.469,35.86,44.688z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                d="M34.002,56c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.999-0.896-1.999-1.999s0.896-2,1.999-2h4C33.107,54,34.002,54.896,34.002,56z"
                />
            </g>
            <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                <circle
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                cx="50.001"
                cy="56"
                r="11.999"
                />
                <circle
                class="climacon_component climacon_component-fill climacon_component-fill_sunBody"
                fill="#FFFFFF"
                cx="50.001"
                cy="56"
                r="7.999"
                />
            </g>
            <g class="climacon_wrapperComponent climacon_wrapperComponent-arrow">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_arrow climacon_component-stroke_arrow-up"
                d="M50.001,63.046c0.552,0,0.999-0.447,0.999-1v-3.827l2.536,2.535c0.39,0.391,1.022,0.391,1.414,0c0.39-0.391,0.39-1.023,0-1.414l-4.242-4.242c-0.391-0.391-1.024-0.391-1.414,0l-4.242,4.242c-0.391,0.391-0.391,1.023,0,1.414c0.391,0.391,1.023,0.391,1.414,0l2.535-2.535v3.827C49.001,62.599,49.448,63.046,50.001,63.046z"/>
            </g>
            <g class="climacon_wrapperComponent climacon_wrapperComponent-horizonLine">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_horizonLine"
                d="M59.999,63.999H40.001c-1.104,0-1.999,0.896-1.999,2s0.896,1.999,1.999,1.999h19.998c1.104,0,2-0.895,2-1.999S61.104,63.999,59.999,63.999z"
                />
            </g>
        </g>
    </g>
</svg><!-- sunriseFill -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const SunriseFill = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default SunriseFill;
