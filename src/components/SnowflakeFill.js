import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="snowflakeFill"
    class="climacon climacon_snowflakeFill"
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
        
        .climacon_componentWrap-snowflake{
            -webkit-animation-name: rotate;
            -moz-animation-name: rotate;
            -o-animation-name: rotate;
            animation-name: rotate;
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

    ]]></style>
    <g class="climacon_iconWrap climacon_iconWrap-snowflakeFill">
        <g class="climacon_componentWrap climacon_componentWrap-snowflake">
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_snowflake"
            d="M59.659,46.733l-1.958,1.13c0.188,0.682,0.298,1.396,0.298,2.137c0,0.742-0.108,1.456-0.298,2.139l1.958,1.129c0.956,0.553,1.284,1.775,0.731,2.732c-0.553,0.956-1.774,1.284-2.731,0.73l-1.954-1.127c-1.003,1.02-2.277,1.766-3.705,2.133v2.263c0,1.104-0.896,2-2,2c-1.104,0-2-0.896-2-2v-2.263c-1.428-0.367-2.703-1.113-3.705-2.133l-1.954,1.127c-0.957,0.554-2.18,0.226-2.731-0.73c-0.553-0.957-0.225-2.18,0.731-2.732l1.958-1.129c-0.189-0.683-0.298-1.396-0.298-2.139c0-0.741,0.108-1.455,0.298-2.137l-1.958-1.13c-0.956-0.553-1.284-1.775-0.731-2.732c0.552-0.956,1.774-1.284,2.731-0.731l1.954,1.128c1.002-1.02,2.277-1.766,3.705-2.134v-2.262c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.262c1.428,0.368,2.702,1.114,3.705,2.134l1.954-1.128c0.957-0.553,2.18-0.225,2.731,0.731C60.943,44.958,60.615,46.181,59.659,46.733z"/>
            <circle
            class="climacon_component climacon_component-fill climacon_component-fill_snowflake"
            fill="#FFFFFF"
            cx="50"
            cy="50"
            r="4"/>
        </g>
    </g>
</svg><!-- snowflakeFill -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const SnowflakeFill = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default SnowflakeFill;
