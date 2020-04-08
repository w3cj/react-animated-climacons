import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="sun"
    class="climacon climacon_sun"
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

            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            animation-timing-function: linear;
            -o-animation-timing-function: linear;
  
            -o-animation-direction: normal;
            animation-direction: normal;
            -webkit-animation-direction: normal;
            -moz-animation-direction: normal;

            -moz-animation-iteration-count: infinite;
            -webkit-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;

            -moz-animation-duration: 12s;
            -webkit-animation-duration: 12s;
            -o-animation-duration: 12s;
            animation-duration: 12s;

        }

        .climacon_componentWrap-sun{
        
            -webkit-animation-name: rotate;
            -moz-animation-name: rotate;
            -o-animation-name: rotate;
            animation-name: rotate;
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

            -webkit-animation-duration: 3s;
            -moz-animation-duration: 3s;
            -o-animation-duration: 3s;
            animation-duration: 3s;

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
                -webkit-transform: scale(1,1);
            }
            100%{
                -webkit-transform: scale(.5,.5);
            }   
        }

        @-moz-keyframes scale{
            0%{
                -moz-transform: scale(1,1);
            }
            100%{
                -moz-transform: scale(.5,.5);
            }   
        }

        @-o-keyframes scale{
            0%{
                -o-transform: scale(1,1);
            }
            100%{
                -o-transform: scale(.5,.5);
            }   
        }

        @keyframes scale{
            0%{
                transform: scale(1,1);
            }
            100%{
                transform: scale(.5,.5);
            }   
        }

    ]]></style>
    <clipPath id="sunFillClip">
        <path
        d="M0,0v100h100V0H0z M50.001,57.999c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C57.999,54.417,54.418,57.999,50.001,57.999z"
        />
    </clipPath>
    <g class="climacon_iconWrap climacon_iconWrap-sun">
        <g class="climacon_componentWrap climacon_componentWrap-sun">
            <g class="climacon_componentWrap climacon_componentWrap-sunSpoke">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                d="M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                d="M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                d="M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                d="M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest"
                d="M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south"
                d="M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z"
                />
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast"
                d="M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z"
                />
            </g>
            <g class="climacon_componentWrap climacon_componentWrap_sunBody" clip-path="url(#sunFillClip)">
                <circle
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                cx="50.034"
                cy="50"
                r="11.999"
                />
            </g>
        </g>
    </g>
</svg><!-- sun -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const Sun = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default Sun;
