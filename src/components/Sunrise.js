import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="sunrise"
    class="climacon climacon_sunrise"
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


    <g class="climacon_iconWrap climacon_iconWrap-sunrise">
        <g class="climacon_componentWrap climacon_componentWrap-sunrise">
            <g class="climacon_componentWrap climacon_componentWrap-sunSpoke">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                d="M32.003,54h-4c-1.104,0-2,0.896-2,2s0.896,2,2,2h4c1.104,0,2-0.896,2-2S33.106,54,32.003,54z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                d="M38.688,41.859l-2.828-2.828c-0.781-0.78-2.047-0.78-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l2.828,2.828c0.781,0.781,2.047,0.781,2.828,0C39.469,43.906,39.469,42.641,38.688,41.859z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M50.001,40.002c1.104,0,1.999-0.896,1.999-2v-3.999c0-1.104-0.896-2-1.999-2c-1.105,0-2,0.896-2,2v3.999C48.001,39.106,48.896,40.002,50.001,40.002z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                d="M66.969,39.031c-0.779-0.78-2.048-0.78-2.828,0l-2.828,2.828c-0.779,0.781-0.779,2.047,0,2.828c0.781,0.781,2.049,0.781,2.828,0l2.828-2.828C67.749,41.078,67.749,39.812,66.969,39.031z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                d="M71.997,54h-3.999c-1.104,0-1.999,0.896-1.999,2s0.896,2,1.999,2h3.999c1.104,0,2-0.896,2-2S73.104,54,71.997,54z"
                />
            </g>
            <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                d="M50.001,44.002c-6.627,0-11.999,5.371-11.999,11.998c0,1.404,0.254,2.747,0.697,3.999h4.381c-0.683-1.177-1.079-2.54-1.079-3.999c0-4.418,3.582-7.999,8-7.999c4.417,0,7.998,3.581,7.998,7.999c0,1.459-0.396,2.822-1.078,3.999h4.381c0.443-1.252,0.697-2.595,0.697-3.999C61.999,49.373,56.627,44.002,50.001,44.002z"
                />
            </g>
            <g class="climacon_wrapperComponent climacon_wrapperComponent-arrow">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_arrow climacon_component-stroke_arrow-up"
                d="M50.001,63.046c0.552,0,0.999-0.447,0.999-1v-3.827l2.536,2.535c0.39,0.391,1.022,0.391,1.414,0c0.39-0.391,0.39-1.023,0-1.414l-4.242-4.242c-0.391-0.391-1.024-0.391-1.414,0l-4.242,4.242c-0.391,0.391-0.391,1.023,0,1.414c0.391,0.391,1.023,0.391,1.414,0l2.535-2.535v3.827C49.001,62.599,49.448,63.046,50.001,63.046z"
                />
            </g>
            <g class="climacon_wrapperComponent climacon_wrapperComponent-horizonLine">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_horizonLine"
                d="M59.999,63.999H40.001c-1.104,0-1.999,0.896-1.999,2s0.896,1.999,1.999,1.999h19.998c1.104,0,2-0.895,2-1.999S61.104,63.999,59.999,63.999z"
                />
            </g>
        </g>
    </g>
</svg><!-- sunrise -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const Sunrise = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default Sunrise;
