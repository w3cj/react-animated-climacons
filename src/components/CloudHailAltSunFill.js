import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudHailAltSunFill"
    class="climacon climacon_cloudHailAltSunFill"
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

    .climacon_component-stroke_hailAlt {
        
        fill-opacity: 0;

        -webkit-animation-timing-function: ease-in;
        -moz-animation-timing-function: ease-in;
        -o-animation-timing-function: ease-in;
        animation-timing-function: ease-in;

        -webkit-animation-duration: 0.66667s;
        -moz-animation-duration: 0.66667s;
        -o-animation-duration: 0.66667s;
        animation-duration: 0.66667s;

    }

    .climacon_component-stroke_hailAlt-left {
      -webkit-animation-name: hailLeft, fillOpacity2;
      -moz-animation-name: hailLeft, fillOpacity2;
      -o-animation-name: hailLeft, fillOpacity2;
      animation-name: hailLeft, fillOpacity2;

    }

    .climacon_component-stroke_hailAlt-middle {
      -webkit-animation-name: hailMiddle, fillOpacity2;
      -moz-animation-name: hailMiddle, fillOpacity2;
      -o-animation-name: hailMiddle, fillOpacity2;
      animation-name: hailMiddle, fillOpacity2;

    }

    .climacon_component-stroke_hailAlt-middle:nth-child(2) {
      -webkit-animation-name: hailMiddle2, fillOpacity2;
      -moz-animation-name: hailMiddle2, fillOpacity2;
      -o-animation-name: hailMiddle2, fillOpacity2;
      animation-name: hailMiddle2, fillOpacity2;

    }

    .climacon_component-stroke_hailAlt-right {
      -webkit-animation-name: hailRight, fillOpacity2;
      -moz-animation-name: hailRight, fillOpacity2;
      -o-animation-name: hailRight, fillOpacity2;
      animation-name: hailRight, fillOpacity2;

    }

    .climacon_component-stroke_hailAlt:nth-child(1) {
      -webkit-animation-delay: 0s;
      -moz-animation-delay: 0s;
      -o-animation-delay: 0s;
      animation-delay: 0s;

    }

    .climacon_component-stroke_hailAlt:nth-child(2) {
      -webkit-animation-delay: 0.11111s;
      -moz-animation-delay: 0.11111s;
      -o-animation-delay: 0.11111s;
      animation-delay: 0.11111s;

    }

    .climacon_component-stroke_hailAlt:nth-child(3) {
      -webkit-animation-delay: 0.22222s;
      -moz-animation-delay: 0.22222s;
      -o-animation-delay: 0.22222s;
      animation-delay: 0.22222s;

    }

    .climacon_component-stroke_hailAlt:nth-child(4) {
      -webkit-animation-delay: 0.33333s;
      -moz-animation-delay: 0.33333s;
      -o-animation-delay: 0.33333s;
      animation-delay: 0.33333s;

    }

    .climacon_component-stroke_hailAlt:nth-child(5) {
      -webkit-animation-delay: 0.44444s;
      -moz-animation-delay: 0.44444s;
      -o-animation-delay: 0.44444s;
      animation-delay: 0.44444s;

    }

    .climacon_component-stroke_hailAlt:nth-child(6) {
      -webkit-animation-delay: 0.55556s;
      -moz-animation-delay: 0.55556s;
      -o-animation-delay: 0.55556s;
      animation-delay: 0.55556s;

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


    @-webkit-keyframes hailLeft {
      50% {
        -webkit-transform: translateY(17.5px);
      }

      51% {
        -webkit-transform: translateY(17.5px) translateX(-0.3px);
      }

      52% {
        -webkit-transform: translateY(16.95058px) translateX(-0.6px);
      }

      53% {
        -webkit-transform: translateY(16.40333px) translateX(-0.9px);
      }

      54% {
        -webkit-transform: translateY(15.86041px) translateX(-1.2px);
      }

      55% {
        -webkit-transform: translateY(15.32396px) translateX(-1.5px);
      }

      56% {
        -webkit-transform: translateY(14.7961px) translateX(-1.8px);
      }

      57% {
        -webkit-transform: translateY(14.27891px) translateX(-2.1px);
      }

      58% {
        -webkit-transform: translateY(13.77443px) translateX(-2.4px);
      }

      59% {
        -webkit-transform: translateY(13.28466px) translateX(-2.7px);
      }

      60% {
        -webkit-transform: translateY(12.81152px) translateX(-3px);
      }

      61% {
        -webkit-transform: translateY(12.35688px) translateX(-3.3px);
      }

      62% {
        -webkit-transform: translateY(11.92254px) translateX(-3.6px);
      }

      63% {
        -webkit-transform: translateY(11.51021px) translateX(-3.9px);
      }

      64% {
        -webkit-transform: translateY(11.12152px) translateX(-4.2px);
      }

      65% {
        -webkit-transform: translateY(10.75801px) translateX(-4.5px);
      }

      66% {
        -webkit-transform: translateY(10.4211px) translateX(-4.8px);
      }

      67% {
        -webkit-transform: translateY(10.11213px) translateX(-5.1px);
      }

      68% {
        -webkit-transform: translateY(9.83232px) translateX(-5.4px);
      }

      69% {
        -webkit-transform: translateY(9.58276px) translateX(-5.7px);
      }

      70% {
        -webkit-transform: translateY(9.36446px) translateX(-6px);
      }

      71% {
        -webkit-transform: translateY(9.17826px) translateX(-6.3px);
      }

      72% {
        -webkit-transform: translateY(9.0249px) translateX(-6.6px);
      }

      73% {
        -webkit-transform: translateY(8.90499px) translateX(-6.9px);
      }

      74% {
        -webkit-transform: translateY(8.819px) translateX(-7.2px);
      }

      75% {
        -webkit-transform: translateY(8.76727px) translateX(-7.5px);
      }

      76% {
        -webkit-transform: translateY(8.75px) translateX(-7.8px);
      }

      77% {
        -webkit-transform: translateY(8.76727px) translateX(-8.1px);
      }

      78% {
        -webkit-transform: translateY(8.819px) translateX(-8.4px);
      }

      79% {
        -webkit-transform: translateY(8.90499px) translateX(-8.7px);
      }

      80% {
        -webkit-transform: translateY(9.0249px) translateX(-9px);
      }

      81% {
        -webkit-transform: translateY(9.17826px) translateX(-9.3px);
      }

      82% {
        -webkit-transform: translateY(9.36446px) translateX(-9.6px);
      }

      83% {
        -webkit-transform: translateY(9.58276px) translateX(-9.9px);
      }

      84% {
        -webkit-transform: translateY(9.83232px) translateX(-10.2px);
      }

      85% {
        -webkit-transform: translateY(10.11213px) translateX(-10.5px);
      }

      86% {
        -webkit-transform: translateY(10.4211px) translateX(-10.8px);
      }

      87% {
        -webkit-transform: translateY(10.75801px) translateX(-11.1px);
      }

      88% {
        -webkit-transform: translateY(11.12152px) translateX(-11.4px);
      }

      89% {
        -webkit-transform: translateY(11.51021px) translateX(-11.7px);
      }

      90% {
        -webkit-transform: translateY(11.92254px) translateX(-12px);
      }

      91% {
        -webkit-transform: translateY(12.35688px) translateX(-12.3px);
      }

      92% {
        -webkit-transform: translateY(12.81152px) translateX(-12.6px);
      }

      93% {
        -webkit-transform: translateY(13.28466px) translateX(-12.9px);
      }

      94% {
        -webkit-transform: translateY(13.77443px) translateX(-13.2px);
      }

      95% {
        -webkit-transform: translateY(14.27891px) translateX(-13.5px);
      }

      96% {
        -webkit-transform: translateY(14.7961px) translateX(-13.8px);
      }

      97% {
        -webkit-transform: translateY(15.32396px) translateX(-14.1px);
      }

      98% {
        -webkit-transform: translateY(15.86041px) translateX(-14.4px);
      }

      99% {
        -webkit-transform: translateY(16.40333px) translateX(-14.7px);
      }

      100% {
        -webkit-transform: translateY(16.95058px) translateX(-15px);
      }
    }

    @-webkit-keyframes hailMiddle {
      50% {
        -webkit-transform: translateY(17.5px);
      }

      51% {
        -webkit-transform: translateY(17.5px) translateX(-0.15px);
      }

      52% {
        -webkit-transform: translateY(16.95058px) translateX(-0.3px);
      }

      53% {
        -webkit-transform: translateY(16.40333px) translateX(-0.45px);
      }

      54% {
        -webkit-transform: translateY(15.86041px) translateX(-0.6px);
      }

      55% {
        -webkit-transform: translateY(15.32396px) translateX(-0.75px);
      }

      56% {
        -webkit-transform: translateY(14.7961px) translateX(-0.9px);
      }

      57% {
        -webkit-transform: translateY(14.27891px) translateX(-1.05px);
      }

      58% {
        -webkit-transform: translateY(13.77443px) translateX(-1.2px);
      }

      59% {
        -webkit-transform: translateY(13.28466px) translateX(-1.35px);
      }

      60% {
        -webkit-transform: translateY(12.81152px) translateX(-1.5px);
      }

      61% {
        -webkit-transform: translateY(12.35688px) translateX(-1.65px);
      }

      62% {
        -webkit-transform: translateY(11.92254px) translateX(-1.8px);
      }

      63% {
        -webkit-transform: translateY(11.51021px) translateX(-1.95px);
      }

      64% {
        -webkit-transform: translateY(11.12152px) translateX(-2.1px);
      }

      65% {
        -webkit-transform: translateY(10.75801px) translateX(-2.25px);
      }

      66% {
        -webkit-transform: translateY(10.4211px) translateX(-2.4px);
      }

      67% {
        -webkit-transform: translateY(10.11213px) translateX(-2.55px);
      }

      68% {
        -webkit-transform: translateY(9.83232px) translateX(-2.7px);
      }

      69% {
        -webkit-transform: translateY(9.58276px) translateX(-2.85px);
      }

      70% {
        -webkit-transform: translateY(9.36446px) translateX(-3px);
      }

      71% {
        -webkit-transform: translateY(9.17826px) translateX(-3.15px);
      }

      72% {
        -webkit-transform: translateY(9.0249px) translateX(-3.3px);
      }

      73% {
        -webkit-transform: translateY(8.90499px) translateX(-3.45px);
      }

      74% {
        -webkit-transform: translateY(8.819px) translateX(-3.6px);
      }

      75% {
        -webkit-transform: translateY(8.76727px) translateX(-3.75px);
      }

      76% {
        -webkit-transform: translateY(8.75px) translateX(-3.9px);
      }

      77% {
        -webkit-transform: translateY(8.76727px) translateX(-4.05px);
      }

      78% {
        -webkit-transform: translateY(8.819px) translateX(-4.2px);
      }

      79% {
        -webkit-transform: translateY(8.90499px) translateX(-4.35px);
      }

      80% {
        -webkit-transform: translateY(9.0249px) translateX(-4.5px);
      }

      81% {
        -webkit-transform: translateY(9.17826px) translateX(-4.65px);
      }

      82% {
        -webkit-transform: translateY(9.36446px) translateX(-4.8px);
      }

      83% {
        -webkit-transform: translateY(9.58276px) translateX(-4.95px);
      }

      84% {
        -webkit-transform: translateY(9.83232px) translateX(-5.1px);
      }

      85% {
        -webkit-transform: translateY(10.11213px) translateX(-5.25px);
      }

      86% {
        -webkit-transform: translateY(10.4211px) translateX(-5.4px);
      }

      87% {
        -webkit-transform: translateY(10.75801px) translateX(-5.55px);
      }

      88% {
        -webkit-transform: translateY(11.12152px) translateX(-5.7px);
      }

      89% {
        -webkit-transform: translateY(11.51021px) translateX(-5.85px);
      }

      90% {
        -webkit-transform: translateY(11.92254px) translateX(-6px);
      }

      91% {
        -webkit-transform: translateY(12.35688px) translateX(-6.15px);
      }

      92% {
        -webkit-transform: translateY(12.81152px) translateX(-6.3px);
      }

      93% {
        -webkit-transform: translateY(13.28466px) translateX(-6.45px);
      }

      94% {
        -webkit-transform: translateY(13.77443px) translateX(-6.6px);
      }

      95% {
        -webkit-transform: translateY(14.27891px) translateX(-6.75px);
      }

      96% {
        -webkit-transform: translateY(14.7961px) translateX(-6.9px);
      }

      97% {
        -webkit-transform: translateY(15.32396px) translateX(-7.05px);
      }

      98% {
        -webkit-transform: translateY(15.86041px) translateX(-7.2px);
      }

      99% {
        -webkit-transform: translateY(16.40333px) translateX(-7.35px);
      }

      100% {
        -webkit-transform: translateY(16.95058px) translateX(-7.5px);
      }
    }

    @-webkit-keyframes hailMiddle2 {
      50% {
        -webkit-transform: translateY(17.5px);
      }

      51% {
        -webkit-transform: translateY(17.5px) translateX(0.15px);
      }

      52% {
        -webkit-transform: translateY(16.95058px) translateX(0.3px);
      }

      53% {
        -webkit-transform: translateY(16.40333px) translateX(0.45px);
      }

      54% {
        -webkit-transform: translateY(15.86041px) translateX(0.6px);
      }

      55% {
        -webkit-transform: translateY(15.32396px) translateX(0.75px);
      }

      56% {
        -webkit-transform: translateY(14.7961px) translateX(0.9px);
      }

      57% {
        -webkit-transform: translateY(14.27891px) translateX(1.05px);
      }

      58% {
        -webkit-transform: translateY(13.77443px) translateX(1.2px);
      }

      59% {
        -webkit-transform: translateY(13.28466px) translateX(1.35px);
      }

      60% {
        -webkit-transform: translateY(12.81152px) translateX(1.5px);
      }

      61% {
        -webkit-transform: translateY(12.35688px) translateX(1.65px);
      }

      62% {
        -webkit-transform: translateY(11.92254px) translateX(1.8px);
      }

      63% {
        -webkit-transform: translateY(11.51021px) translateX(1.95px);
      }

      64% {
        -webkit-transform: translateY(11.12152px) translateX(2.1px);
      }

      65% {
        -webkit-transform: translateY(10.75801px) translateX(2.25px);
      }

      66% {
        -webkit-transform: translateY(10.4211px) translateX(2.4px);
      }

      67% {
        -webkit-transform: translateY(10.11213px) translateX(2.55px);
      }

      68% {
        -webkit-transform: translateY(9.83232px) translateX(2.7px);
      }

      69% {
        -webkit-transform: translateY(9.58276px) translateX(2.85px);
      }

      70% {
        -webkit-transform: translateY(9.36446px) translateX(3px);
      }

      71% {
        -webkit-transform: translateY(9.17826px) translateX(3.15px);
      }

      72% {
        -webkit-transform: translateY(9.0249px) translateX(3.3px);
      }

      73% {
        -webkit-transform: translateY(8.90499px) translateX(3.45px);
      }

      74% {
        -webkit-transform: translateY(8.819px) translateX(3.6px);
      }

      75% {
        -webkit-transform: translateY(8.76727px) translateX(3.75px);
      }

      76% {
        -webkit-transform: translateY(8.75px) translateX(3.9px);
      }

      77% {
        -webkit-transform: translateY(8.76727px) translateX(4.05px);
      }

      78% {
        -webkit-transform: translateY(8.819px) translateX(4.2px);
      }

      79% {
        -webkit-transform: translateY(8.90499px) translateX(4.35px);
      }

      80% {
        -webkit-transform: translateY(9.0249px) translateX(4.5px);
      }

      81% {
        -webkit-transform: translateY(9.17826px) translateX(4.65px);
      }

      82% {
        -webkit-transform: translateY(9.36446px) translateX(4.8px);
      }

      83% {
        -webkit-transform: translateY(9.58276px) translateX(4.95px);
      }

      84% {
        -webkit-transform: translateY(9.83232px) translateX(5.1px);
      }

      85% {
        -webkit-transform: translateY(10.11213px) translateX(5.25px);
      }

      86% {
        -webkit-transform: translateY(10.4211px) translateX(5.4px);
      }

      87% {
        -webkit-transform: translateY(10.75801px) translateX(5.55px);
      }

      88% {
        -webkit-transform: translateY(11.12152px) translateX(5.7px);
      }

      89% {
        -webkit-transform: translateY(11.51021px) translateX(5.85px);
      }

      90% {
        -webkit-transform: translateY(11.92254px) translateX(6px);
      }

      91% {
        -webkit-transform: translateY(12.35688px) translateX(6.15px);
      }

      92% {
        -webkit-transform: translateY(12.81152px) translateX(6.3px);
      }

      93% {
        -webkit-transform: translateY(13.28466px) translateX(6.45px);
      }

      94% {
        -webkit-transform: translateY(13.77443px) translateX(6.6px);
      }

      95% {
        -webkit-transform: translateY(14.27891px) translateX(6.75px);
      }

      96% {
        -webkit-transform: translateY(14.7961px) translateX(6.9px);
      }

      97% {
        -webkit-transform: translateY(15.32396px) translateX(7.05px);
      }

      98% {
        -webkit-transform: translateY(15.86041px) translateX(7.2px);
      }

      99% {
        -webkit-transform: translateY(16.40333px) translateX(7.35px);
      }

      100% {
        -webkit-transform: translateY(16.95058px) translateX(7.5px);
      }
    }

    @-webkit-keyframes hailRight {
      50% {
        -webkit-transform: translateY(17.5px);
      }

      51% {
        -webkit-transform: translateY(17.5px) translateX(0.3px);
      }

      52% {
        -webkit-transform: translateY(16.95058px) translateX(0.6px);
      }

      53% {
        -webkit-transform: translateY(16.40333px) translateX(0.9px);
      }

      54% {
        -webkit-transform: translateY(15.86041px) translateX(1.2px);
      }

      55% {
        -webkit-transform: translateY(15.32396px) translateX(1.5px);
      }

      56% {
        -webkit-transform: translateY(14.7961px) translateX(1.8px);
      }

      57% {
        -webkit-transform: translateY(14.27891px) translateX(2.1px);
      }

      58% {
        -webkit-transform: translateY(13.77443px) translateX(2.4px);
      }

      59% {
        -webkit-transform: translateY(13.28466px) translateX(2.7px);
      }

      60% {
        -webkit-transform: translateY(12.81152px) translateX(3px);
      }

      61% {
        -webkit-transform: translateY(12.35688px) translateX(3.3px);
      }

      62% {
        -webkit-transform: translateY(11.92254px) translateX(3.6px);
      }

      63% {
        -webkit-transform: translateY(11.51021px) translateX(3.9px);
      }

      64% {
        -webkit-transform: translateY(11.12152px) translateX(4.2px);
      }

      65% {
        -webkit-transform: translateY(10.75801px) translateX(4.5px);
      }

      66% {
        -webkit-transform: translateY(10.4211px) translateX(4.8px);
      }

      67% {
        -webkit-transform: translateY(10.11213px) translateX(5.1px);
      }

      68% {
        -webkit-transform: translateY(9.83232px) translateX(5.4px);
      }

      69% {
        -webkit-transform: translateY(9.58276px) translateX(5.7px);
      }

      70% {
        -webkit-transform: translateY(9.36446px) translateX(6px);
      }

      71% {
        -webkit-transform: translateY(9.17826px) translateX(6.3px);
      }

      72% {
        -webkit-transform: translateY(9.0249px) translateX(6.6px);
      }

      73% {
        -webkit-transform: translateY(8.90499px) translateX(6.9px);
      }

      74% {
        -webkit-transform: translateY(8.819px) translateX(7.2px);
      }

      75% {
        -webkit-transform: translateY(8.76727px) translateX(7.5px);
      }

      76% {
        -webkit-transform: translateY(8.75px) translateX(7.8px);
      }

      77% {
        -webkit-transform: translateY(8.76727px) translateX(8.1px);
      }

      78% {
        -webkit-transform: translateY(8.819px) translateX(8.4px);
      }

      79% {
        -webkit-transform: translateY(8.90499px) translateX(8.7px);
      }

      80% {
        -webkit-transform: translateY(9.0249px) translateX(9px);
      }

      81% {
        -webkit-transform: translateY(9.17826px) translateX(9.3px);
      }

      82% {
        -webkit-transform: translateY(9.36446px) translateX(9.6px);
      }

      83% {
        -webkit-transform: translateY(9.58276px) translateX(9.9px);
      }

      84% {
        -webkit-transform: translateY(9.83232px) translateX(10.2px);
      }

      85% {
        -webkit-transform: translateY(10.11213px) translateX(10.5px);
      }

      86% {
        -webkit-transform: translateY(10.4211px) translateX(10.8px);
      }

      87% {
        -webkit-transform: translateY(10.75801px) translateX(11.1px);
      }

      88% {
        -webkit-transform: translateY(11.12152px) translateX(11.4px);
      }

      89% {
        -webkit-transform: translateY(11.51021px) translateX(11.7px);
      }

      90% {
        -webkit-transform: translateY(11.92254px) translateX(12px);
      }

      91% {
        -webkit-transform: translateY(12.35688px) translateX(12.3px);
      }

      92% {
        -webkit-transform: translateY(12.81152px) translateX(12.6px);
      }

      93% {
        -webkit-transform: translateY(13.28466px) translateX(12.9px);
      }

      94% {
        -webkit-transform: translateY(13.77443px) translateX(13.2px);
      }

      95% {
        -webkit-transform: translateY(14.27891px) translateX(13.5px);
      }

      96% {
        -webkit-transform: translateY(14.7961px) translateX(13.8px);
      }

      97% {
        -webkit-transform: translateY(15.32396px) translateX(14.1px);
      }

      98% {
        -webkit-transform: translateY(15.86041px) translateX(14.4px);
      }

      99% {
        -webkit-transform: translateY(16.40333px) translateX(14.7px);
      }

      100% {
        -webkit-transform: translateY(16.95058px) translateX(15px);
      }
    }

    @-moz-keyframes hailLeft {
      50% {
        -moz-transform: translateY(17.5px);
      }

      51% {
        -moz-transform: translateY(17.5px) translateX(-0.3px);
      }

      52% {
        -moz-transform: translateY(16.95058px) translateX(-0.6px);
      }

      53% {
        -moz-transform: translateY(16.40333px) translateX(-0.9px);
      }

      54% {
        -moz-transform: translateY(15.86041px) translateX(-1.2px);
      }

      55% {
        -moz-transform: translateY(15.32396px) translateX(-1.5px);
      }

      56% {
        -moz-transform: translateY(14.7961px) translateX(-1.8px);
      }

      57% {
        -moz-transform: translateY(14.27891px) translateX(-2.1px);
      }

      58% {
        -moz-transform: translateY(13.77443px) translateX(-2.4px);
      }

      59% {
        -moz-transform: translateY(13.28466px) translateX(-2.7px);
      }

      60% {
        -moz-transform: translateY(12.81152px) translateX(-3px);
      }

      61% {
        -moz-transform: translateY(12.35688px) translateX(-3.3px);
      }

      62% {
        -moz-transform: translateY(11.92254px) translateX(-3.6px);
      }

      63% {
        -moz-transform: translateY(11.51021px) translateX(-3.9px);
      }

      64% {
        -moz-transform: translateY(11.12152px) translateX(-4.2px);
      }

      65% {
        -moz-transform: translateY(10.75801px) translateX(-4.5px);
      }

      66% {
        -moz-transform: translateY(10.4211px) translateX(-4.8px);
      }

      67% {
        -moz-transform: translateY(10.11213px) translateX(-5.1px);
      }

      68% {
        -moz-transform: translateY(9.83232px) translateX(-5.4px);
      }

      69% {
        -moz-transform: translateY(9.58276px) translateX(-5.7px);
      }

      70% {
        -moz-transform: translateY(9.36446px) translateX(-6px);
      }

      71% {
        -moz-transform: translateY(9.17826px) translateX(-6.3px);
      }

      72% {
        -moz-transform: translateY(9.0249px) translateX(-6.6px);
      }

      73% {
        -moz-transform: translateY(8.90499px) translateX(-6.9px);
      }

      74% {
        -moz-transform: translateY(8.819px) translateX(-7.2px);
      }

      75% {
        -moz-transform: translateY(8.76727px) translateX(-7.5px);
      }

      76% {
        -moz-transform: translateY(8.75px) translateX(-7.8px);
      }

      77% {
        -moz-transform: translateY(8.76727px) translateX(-8.1px);
      }

      78% {
        -moz-transform: translateY(8.819px) translateX(-8.4px);
      }

      79% {
        -moz-transform: translateY(8.90499px) translateX(-8.7px);
      }

      80% {
        -moz-transform: translateY(9.0249px) translateX(-9px);
      }

      81% {
        -moz-transform: translateY(9.17826px) translateX(-9.3px);
      }

      82% {
        -moz-transform: translateY(9.36446px) translateX(-9.6px);
      }

      83% {
        -moz-transform: translateY(9.58276px) translateX(-9.9px);
      }

      84% {
        -moz-transform: translateY(9.83232px) translateX(-10.2px);
      }

      85% {
        -moz-transform: translateY(10.11213px) translateX(-10.5px);
      }

      86% {
        -moz-transform: translateY(10.4211px) translateX(-10.8px);
      }

      87% {
        -moz-transform: translateY(10.75801px) translateX(-11.1px);
      }

      88% {
        -moz-transform: translateY(11.12152px) translateX(-11.4px);
      }

      89% {
        -moz-transform: translateY(11.51021px) translateX(-11.7px);
      }

      90% {
        -moz-transform: translateY(11.92254px) translateX(-12px);
      }

      91% {
        -moz-transform: translateY(12.35688px) translateX(-12.3px);
      }

      92% {
        -moz-transform: translateY(12.81152px) translateX(-12.6px);
      }

      93% {
        -moz-transform: translateY(13.28466px) translateX(-12.9px);
      }

      94% {
        -moz-transform: translateY(13.77443px) translateX(-13.2px);
      }

      95% {
        -moz-transform: translateY(14.27891px) translateX(-13.5px);
      }

      96% {
        -moz-transform: translateY(14.7961px) translateX(-13.8px);
      }

      97% {
        -moz-transform: translateY(15.32396px) translateX(-14.1px);
      }

      98% {
        -moz-transform: translateY(15.86041px) translateX(-14.4px);
      }

      99% {
        -moz-transform: translateY(16.40333px) translateX(-14.7px);
      }

      100% {
        -moz-transform: translateY(16.95058px) translateX(-15px);
      }
    }

    @-moz-keyframes hailMiddle {
      50% {
        -moz-transform: translateY(17.5px);
      }

      51% {
        -moz-transform: translateY(17.5px) translateX(-0.15px);
      }

      52% {
        -moz-transform: translateY(16.95058px) translateX(-0.3px);
      }

      53% {
        -moz-transform: translateY(16.40333px) translateX(-0.45px);
      }

      54% {
        -moz-transform: translateY(15.86041px) translateX(-0.6px);
      }

      55% {
        -moz-transform: translateY(15.32396px) translateX(-0.75px);
      }

      56% {
        -moz-transform: translateY(14.7961px) translateX(-0.9px);
      }

      57% {
        -moz-transform: translateY(14.27891px) translateX(-1.05px);
      }

      58% {
        -moz-transform: translateY(13.77443px) translateX(-1.2px);
      }

      59% {
        -moz-transform: translateY(13.28466px) translateX(-1.35px);
      }

      60% {
        -moz-transform: translateY(12.81152px) translateX(-1.5px);
      }

      61% {
        -moz-transform: translateY(12.35688px) translateX(-1.65px);
      }

      62% {
        -moz-transform: translateY(11.92254px) translateX(-1.8px);
      }

      63% {
        -moz-transform: translateY(11.51021px) translateX(-1.95px);
      }

      64% {
        -moz-transform: translateY(11.12152px) translateX(-2.1px);
      }

      65% {
        -moz-transform: translateY(10.75801px) translateX(-2.25px);
      }

      66% {
        -moz-transform: translateY(10.4211px) translateX(-2.4px);
      }

      67% {
        -moz-transform: translateY(10.11213px) translateX(-2.55px);
      }

      68% {
        -moz-transform: translateY(9.83232px) translateX(-2.7px);
      }

      69% {
        -moz-transform: translateY(9.58276px) translateX(-2.85px);
      }

      70% {
        -moz-transform: translateY(9.36446px) translateX(-3px);
      }

      71% {
        -moz-transform: translateY(9.17826px) translateX(-3.15px);
      }

      72% {
        -moz-transform: translateY(9.0249px) translateX(-3.3px);
      }

      73% {
        -moz-transform: translateY(8.90499px) translateX(-3.45px);
      }

      74% {
        -moz-transform: translateY(8.819px) translateX(-3.6px);
      }

      75% {
        -moz-transform: translateY(8.76727px) translateX(-3.75px);
      }

      76% {
        -moz-transform: translateY(8.75px) translateX(-3.9px);
      }

      77% {
        -moz-transform: translateY(8.76727px) translateX(-4.05px);
      }

      78% {
        -moz-transform: translateY(8.819px) translateX(-4.2px);
      }

      79% {
        -moz-transform: translateY(8.90499px) translateX(-4.35px);
      }

      80% {
        -moz-transform: translateY(9.0249px) translateX(-4.5px);
      }

      81% {
        -moz-transform: translateY(9.17826px) translateX(-4.65px);
      }

      82% {
        -moz-transform: translateY(9.36446px) translateX(-4.8px);
      }

      83% {
        -moz-transform: translateY(9.58276px) translateX(-4.95px);
      }

      84% {
        -moz-transform: translateY(9.83232px) translateX(-5.1px);
      }

      85% {
        -moz-transform: translateY(10.11213px) translateX(-5.25px);
      }

      86% {
        -moz-transform: translateY(10.4211px) translateX(-5.4px);
      }

      87% {
        -moz-transform: translateY(10.75801px) translateX(-5.55px);
      }

      88% {
        -moz-transform: translateY(11.12152px) translateX(-5.7px);
      }

      89% {
        -moz-transform: translateY(11.51021px) translateX(-5.85px);
      }

      90% {
        -moz-transform: translateY(11.92254px) translateX(-6px);
      }

      91% {
        -moz-transform: translateY(12.35688px) translateX(-6.15px);
      }

      92% {
        -moz-transform: translateY(12.81152px) translateX(-6.3px);
      }

      93% {
        -moz-transform: translateY(13.28466px) translateX(-6.45px);
      }

      94% {
        -moz-transform: translateY(13.77443px) translateX(-6.6px);
      }

      95% {
        -moz-transform: translateY(14.27891px) translateX(-6.75px);
      }

      96% {
        -moz-transform: translateY(14.7961px) translateX(-6.9px);
      }

      97% {
        -moz-transform: translateY(15.32396px) translateX(-7.05px);
      }

      98% {
        -moz-transform: translateY(15.86041px) translateX(-7.2px);
      }

      99% {
        -moz-transform: translateY(16.40333px) translateX(-7.35px);
      }

      100% {
        -moz-transform: translateY(16.95058px) translateX(-7.5px);
      }
    }

    @-moz-keyframes hailMiddle2 {
      50% {
        -moz-transform: translateY(17.5px);
      }

      51% {
        -moz-transform: translateY(17.5px) translateX(0.15px);
      }

      52% {
        -moz-transform: translateY(16.95058px) translateX(0.3px);
      }

      53% {
        -moz-transform: translateY(16.40333px) translateX(0.45px);
      }

      54% {
        -moz-transform: translateY(15.86041px) translateX(0.6px);
      }

      55% {
        -moz-transform: translateY(15.32396px) translateX(0.75px);
      }

      56% {
        -moz-transform: translateY(14.7961px) translateX(0.9px);
      }

      57% {
        -moz-transform: translateY(14.27891px) translateX(1.05px);
      }

      58% {
        -moz-transform: translateY(13.77443px) translateX(1.2px);
      }

      59% {
        -moz-transform: translateY(13.28466px) translateX(1.35px);
      }

      60% {
        -moz-transform: translateY(12.81152px) translateX(1.5px);
      }

      61% {
        -moz-transform: translateY(12.35688px) translateX(1.65px);
      }

      62% {
        -moz-transform: translateY(11.92254px) translateX(1.8px);
      }

      63% {
        -moz-transform: translateY(11.51021px) translateX(1.95px);
      }

      64% {
        -moz-transform: translateY(11.12152px) translateX(2.1px);
      }

      65% {
        -moz-transform: translateY(10.75801px) translateX(2.25px);
      }

      66% {
        -moz-transform: translateY(10.4211px) translateX(2.4px);
      }

      67% {
        -moz-transform: translateY(10.11213px) translateX(2.55px);
      }

      68% {
        -moz-transform: translateY(9.83232px) translateX(2.7px);
      }

      69% {
        -moz-transform: translateY(9.58276px) translateX(2.85px);
      }

      70% {
        -moz-transform: translateY(9.36446px) translateX(3px);
      }

      71% {
        -moz-transform: translateY(9.17826px) translateX(3.15px);
      }

      72% {
        -moz-transform: translateY(9.0249px) translateX(3.3px);
      }

      73% {
        -moz-transform: translateY(8.90499px) translateX(3.45px);
      }

      74% {
        -moz-transform: translateY(8.819px) translateX(3.6px);
      }

      75% {
        -moz-transform: translateY(8.76727px) translateX(3.75px);
      }

      76% {
        -moz-transform: translateY(8.75px) translateX(3.9px);
      }

      77% {
        -moz-transform: translateY(8.76727px) translateX(4.05px);
      }

      78% {
        -moz-transform: translateY(8.819px) translateX(4.2px);
      }

      79% {
        -moz-transform: translateY(8.90499px) translateX(4.35px);
      }

      80% {
        -moz-transform: translateY(9.0249px) translateX(4.5px);
      }

      81% {
        -moz-transform: translateY(9.17826px) translateX(4.65px);
      }

      82% {
        -moz-transform: translateY(9.36446px) translateX(4.8px);
      }

      83% {
        -moz-transform: translateY(9.58276px) translateX(4.95px);
      }

      84% {
        -moz-transform: translateY(9.83232px) translateX(5.1px);
      }

      85% {
        -moz-transform: translateY(10.11213px) translateX(5.25px);
      }

      86% {
        -moz-transform: translateY(10.4211px) translateX(5.4px);
      }

      87% {
        -moz-transform: translateY(10.75801px) translateX(5.55px);
      }

      88% {
        -moz-transform: translateY(11.12152px) translateX(5.7px);
      }

      89% {
        -moz-transform: translateY(11.51021px) translateX(5.85px);
      }

      90% {
        -moz-transform: translateY(11.92254px) translateX(6px);
      }

      91% {
        -moz-transform: translateY(12.35688px) translateX(6.15px);
      }

      92% {
        -moz-transform: translateY(12.81152px) translateX(6.3px);
      }

      93% {
        -moz-transform: translateY(13.28466px) translateX(6.45px);
      }

      94% {
        -moz-transform: translateY(13.77443px) translateX(6.6px);
      }

      95% {
        -moz-transform: translateY(14.27891px) translateX(6.75px);
      }

      96% {
        -moz-transform: translateY(14.7961px) translateX(6.9px);
      }

      97% {
        -moz-transform: translateY(15.32396px) translateX(7.05px);
      }

      98% {
        -moz-transform: translateY(15.86041px) translateX(7.2px);
      }

      99% {
        -moz-transform: translateY(16.40333px) translateX(7.35px);
      }

      100% {
        -moz-transform: translateY(16.95058px) translateX(7.5px);
      }
    }

    @-moz-keyframes hailRight {
      50% {
        -moz-transform: translateY(17.5px);
      }

      51% {
        -moz-transform: translateY(17.5px) translateX(0.3px);
      }

      52% {
        -moz-transform: translateY(16.95058px) translateX(0.6px);
      }

      53% {
        -moz-transform: translateY(16.40333px) translateX(0.9px);
      }

      54% {
        -moz-transform: translateY(15.86041px) translateX(1.2px);
      }

      55% {
        -moz-transform: translateY(15.32396px) translateX(1.5px);
      }

      56% {
        -moz-transform: translateY(14.7961px) translateX(1.8px);
      }

      57% {
        -moz-transform: translateY(14.27891px) translateX(2.1px);
      }

      58% {
        -moz-transform: translateY(13.77443px) translateX(2.4px);
      }

      59% {
        -moz-transform: translateY(13.28466px) translateX(2.7px);
      }

      60% {
        -moz-transform: translateY(12.81152px) translateX(3px);
      }

      61% {
        -moz-transform: translateY(12.35688px) translateX(3.3px);
      }

      62% {
        -moz-transform: translateY(11.92254px) translateX(3.6px);
      }

      63% {
        -moz-transform: translateY(11.51021px) translateX(3.9px);
      }

      64% {
        -moz-transform: translateY(11.12152px) translateX(4.2px);
      }

      65% {
        -moz-transform: translateY(10.75801px) translateX(4.5px);
      }

      66% {
        -moz-transform: translateY(10.4211px) translateX(4.8px);
      }

      67% {
        -moz-transform: translateY(10.11213px) translateX(5.1px);
      }

      68% {
        -moz-transform: translateY(9.83232px) translateX(5.4px);
      }

      69% {
        -moz-transform: translateY(9.58276px) translateX(5.7px);
      }

      70% {
        -moz-transform: translateY(9.36446px) translateX(6px);
      }

      71% {
        -moz-transform: translateY(9.17826px) translateX(6.3px);
      }

      72% {
        -moz-transform: translateY(9.0249px) translateX(6.6px);
      }

      73% {
        -moz-transform: translateY(8.90499px) translateX(6.9px);
      }

      74% {
        -moz-transform: translateY(8.819px) translateX(7.2px);
      }

      75% {
        -moz-transform: translateY(8.76727px) translateX(7.5px);
      }

      76% {
        -moz-transform: translateY(8.75px) translateX(7.8px);
      }

      77% {
        -moz-transform: translateY(8.76727px) translateX(8.1px);
      }

      78% {
        -moz-transform: translateY(8.819px) translateX(8.4px);
      }

      79% {
        -moz-transform: translateY(8.90499px) translateX(8.7px);
      }

      80% {
        -moz-transform: translateY(9.0249px) translateX(9px);
      }

      81% {
        -moz-transform: translateY(9.17826px) translateX(9.3px);
      }

      82% {
        -moz-transform: translateY(9.36446px) translateX(9.6px);
      }

      83% {
        -moz-transform: translateY(9.58276px) translateX(9.9px);
      }

      84% {
        -moz-transform: translateY(9.83232px) translateX(10.2px);
      }

      85% {
        -moz-transform: translateY(10.11213px) translateX(10.5px);
      }

      86% {
        -moz-transform: translateY(10.4211px) translateX(10.8px);
      }

      87% {
        -moz-transform: translateY(10.75801px) translateX(11.1px);
      }

      88% {
        -moz-transform: translateY(11.12152px) translateX(11.4px);
      }

      89% {
        -moz-transform: translateY(11.51021px) translateX(11.7px);
      }

      90% {
        -moz-transform: translateY(11.92254px) translateX(12px);
      }

      91% {
        -moz-transform: translateY(12.35688px) translateX(12.3px);
      }

      92% {
        -moz-transform: translateY(12.81152px) translateX(12.6px);
      }

      93% {
        -moz-transform: translateY(13.28466px) translateX(12.9px);
      }

      94% {
        -moz-transform: translateY(13.77443px) translateX(13.2px);
      }

      95% {
        -moz-transform: translateY(14.27891px) translateX(13.5px);
      }

      96% {
        -moz-transform: translateY(14.7961px) translateX(13.8px);
      }

      97% {
        -moz-transform: translateY(15.32396px) translateX(14.1px);
      }

      98% {
        -moz-transform: translateY(15.86041px) translateX(14.4px);
      }

      99% {
        -moz-transform: translateY(16.40333px) translateX(14.7px);
      }

      100% {
        -moz-transform: translateY(16.95058px) translateX(15px);
      }
    }

    @-o-keyframes hailLeft {
      50% {
        -o-transform: translateY(17.5px);
      }

      51% {
        -o-transform: translateY(17.5px) translateX(-0.3px);
      }

      52% {
        -o-transform: translateY(16.95058px) translateX(-0.6px);
      }

      53% {
        -o-transform: translateY(16.40333px) translateX(-0.9px);
      }

      54% {
        -o-transform: translateY(15.86041px) translateX(-1.2px);
      }

      55% {
        -o-transform: translateY(15.32396px) translateX(-1.5px);
      }

      56% {
        -o-transform: translateY(14.7961px) translateX(-1.8px);
      }

      57% {
        -o-transform: translateY(14.27891px) translateX(-2.1px);
      }

      58% {
        -o-transform: translateY(13.77443px) translateX(-2.4px);
      }

      59% {
        -o-transform: translateY(13.28466px) translateX(-2.7px);
      }

      60% {
        -o-transform: translateY(12.81152px) translateX(-3px);
      }

      61% {
        -o-transform: translateY(12.35688px) translateX(-3.3px);
      }

      62% {
        -o-transform: translateY(11.92254px) translateX(-3.6px);
      }

      63% {
        -o-transform: translateY(11.51021px) translateX(-3.9px);
      }

      64% {
        -o-transform: translateY(11.12152px) translateX(-4.2px);
      }

      65% {
        -o-transform: translateY(10.75801px) translateX(-4.5px);
      }

      66% {
        -o-transform: translateY(10.4211px) translateX(-4.8px);
      }

      67% {
        -o-transform: translateY(10.11213px) translateX(-5.1px);
      }

      68% {
        -o-transform: translateY(9.83232px) translateX(-5.4px);
      }

      69% {
        -o-transform: translateY(9.58276px) translateX(-5.7px);
      }

      70% {
        -o-transform: translateY(9.36446px) translateX(-6px);
      }

      71% {
        -o-transform: translateY(9.17826px) translateX(-6.3px);
      }

      72% {
        -o-transform: translateY(9.0249px) translateX(-6.6px);
      }

      73% {
        -o-transform: translateY(8.90499px) translateX(-6.9px);
      }

      74% {
        -o-transform: translateY(8.819px) translateX(-7.2px);
      }

      75% {
        -o-transform: translateY(8.76727px) translateX(-7.5px);
      }

      76% {
        -o-transform: translateY(8.75px) translateX(-7.8px);
      }

      77% {
        -o-transform: translateY(8.76727px) translateX(-8.1px);
      }

      78% {
        -o-transform: translateY(8.819px) translateX(-8.4px);
      }

      79% {
        -o-transform: translateY(8.90499px) translateX(-8.7px);
      }

      80% {
        -o-transform: translateY(9.0249px) translateX(-9px);
      }

      81% {
        -o-transform: translateY(9.17826px) translateX(-9.3px);
      }

      82% {
        -o-transform: translateY(9.36446px) translateX(-9.6px);
      }

      83% {
        -o-transform: translateY(9.58276px) translateX(-9.9px);
      }

      84% {
        -o-transform: translateY(9.83232px) translateX(-10.2px);
      }

      85% {
        -o-transform: translateY(10.11213px) translateX(-10.5px);
      }

      86% {
        -o-transform: translateY(10.4211px) translateX(-10.8px);
      }

      87% {
        -o-transform: translateY(10.75801px) translateX(-11.1px);
      }

      88% {
        -o-transform: translateY(11.12152px) translateX(-11.4px);
      }

      89% {
        -o-transform: translateY(11.51021px) translateX(-11.7px);
      }

      90% {
        -o-transform: translateY(11.92254px) translateX(-12px);
      }

      91% {
        -o-transform: translateY(12.35688px) translateX(-12.3px);
      }

      92% {
        -o-transform: translateY(12.81152px) translateX(-12.6px);
      }

      93% {
        -o-transform: translateY(13.28466px) translateX(-12.9px);
      }

      94% {
        -o-transform: translateY(13.77443px) translateX(-13.2px);
      }

      95% {
        -o-transform: translateY(14.27891px) translateX(-13.5px);
      }

      96% {
        -o-transform: translateY(14.7961px) translateX(-13.8px);
      }

      97% {
        -o-transform: translateY(15.32396px) translateX(-14.1px);
      }

      98% {
        -o-transform: translateY(15.86041px) translateX(-14.4px);
      }

      99% {
        -o-transform: translateY(16.40333px) translateX(-14.7px);
      }

      100% {
        -o-transform: translateY(16.95058px) translateX(-15px);
      }
    }

    @-o-keyframes hailMiddle {
      50% {
        -o-transform: translateY(17.5px);
      }

      51% {
        -o-transform: translateY(17.5px) translateX(-0.15px);
      }

      52% {
        -o-transform: translateY(16.95058px) translateX(-0.3px);
      }

      53% {
        -o-transform: translateY(16.40333px) translateX(-0.45px);
      }

      54% {
        -o-transform: translateY(15.86041px) translateX(-0.6px);
      }

      55% {
        -o-transform: translateY(15.32396px) translateX(-0.75px);
      }

      56% {
        -o-transform: translateY(14.7961px) translateX(-0.9px);
      }

      57% {
        -o-transform: translateY(14.27891px) translateX(-1.05px);
      }

      58% {
        -o-transform: translateY(13.77443px) translateX(-1.2px);
      }

      59% {
        -o-transform: translateY(13.28466px) translateX(-1.35px);
      }

      60% {
        -o-transform: translateY(12.81152px) translateX(-1.5px);
      }

      61% {
        -o-transform: translateY(12.35688px) translateX(-1.65px);
      }

      62% {
        -o-transform: translateY(11.92254px) translateX(-1.8px);
      }

      63% {
        -o-transform: translateY(11.51021px) translateX(-1.95px);
      }

      64% {
        -o-transform: translateY(11.12152px) translateX(-2.1px);
      }

      65% {
        -o-transform: translateY(10.75801px) translateX(-2.25px);
      }

      66% {
        -o-transform: translateY(10.4211px) translateX(-2.4px);
      }

      67% {
        -o-transform: translateY(10.11213px) translateX(-2.55px);
      }

      68% {
        -o-transform: translateY(9.83232px) translateX(-2.7px);
      }

      69% {
        -o-transform: translateY(9.58276px) translateX(-2.85px);
      }

      70% {
        -o-transform: translateY(9.36446px) translateX(-3px);
      }

      71% {
        -o-transform: translateY(9.17826px) translateX(-3.15px);
      }

      72% {
        -o-transform: translateY(9.0249px) translateX(-3.3px);
      }

      73% {
        -o-transform: translateY(8.90499px) translateX(-3.45px);
      }

      74% {
        -o-transform: translateY(8.819px) translateX(-3.6px);
      }

      75% {
        -o-transform: translateY(8.76727px) translateX(-3.75px);
      }

      76% {
        -o-transform: translateY(8.75px) translateX(-3.9px);
      }

      77% {
        -o-transform: translateY(8.76727px) translateX(-4.05px);
      }

      78% {
        -o-transform: translateY(8.819px) translateX(-4.2px);
      }

      79% {
        -o-transform: translateY(8.90499px) translateX(-4.35px);
      }

      80% {
        -o-transform: translateY(9.0249px) translateX(-4.5px);
      }

      81% {
        -o-transform: translateY(9.17826px) translateX(-4.65px);
      }

      82% {
        -o-transform: translateY(9.36446px) translateX(-4.8px);
      }

      83% {
        -o-transform: translateY(9.58276px) translateX(-4.95px);
      }

      84% {
        -o-transform: translateY(9.83232px) translateX(-5.1px);
      }

      85% {
        -o-transform: translateY(10.11213px) translateX(-5.25px);
      }

      86% {
        -o-transform: translateY(10.4211px) translateX(-5.4px);
      }

      87% {
        -o-transform: translateY(10.75801px) translateX(-5.55px);
      }

      88% {
        -o-transform: translateY(11.12152px) translateX(-5.7px);
      }

      89% {
        -o-transform: translateY(11.51021px) translateX(-5.85px);
      }

      90% {
        -o-transform: translateY(11.92254px) translateX(-6px);
      }

      91% {
        -o-transform: translateY(12.35688px) translateX(-6.15px);
      }

      92% {
        -o-transform: translateY(12.81152px) translateX(-6.3px);
      }

      93% {
        -o-transform: translateY(13.28466px) translateX(-6.45px);
      }

      94% {
        -o-transform: translateY(13.77443px) translateX(-6.6px);
      }

      95% {
        -o-transform: translateY(14.27891px) translateX(-6.75px);
      }

      96% {
        -o-transform: translateY(14.7961px) translateX(-6.9px);
      }

      97% {
        -o-transform: translateY(15.32396px) translateX(-7.05px);
      }

      98% {
        -o-transform: translateY(15.86041px) translateX(-7.2px);
      }

      99% {
        -o-transform: translateY(16.40333px) translateX(-7.35px);
      }

      100% {
        -o-transform: translateY(16.95058px) translateX(-7.5px);
      }
    }

    @-o-keyframes hailMiddle2 {
      50% {
        -o-transform: translateY(17.5px);
      }

      51% {
        -o-transform: translateY(17.5px) translateX(0.15px);
      }

      52% {
        -o-transform: translateY(16.95058px) translateX(0.3px);
      }

      53% {
        -o-transform: translateY(16.40333px) translateX(0.45px);
      }

      54% {
        -o-transform: translateY(15.86041px) translateX(0.6px);
      }

      55% {
        -o-transform: translateY(15.32396px) translateX(0.75px);
      }

      56% {
        -o-transform: translateY(14.7961px) translateX(0.9px);
      }

      57% {
        -o-transform: translateY(14.27891px) translateX(1.05px);
      }

      58% {
        -o-transform: translateY(13.77443px) translateX(1.2px);
      }

      59% {
        -o-transform: translateY(13.28466px) translateX(1.35px);
      }

      60% {
        -o-transform: translateY(12.81152px) translateX(1.5px);
      }

      61% {
        -o-transform: translateY(12.35688px) translateX(1.65px);
      }

      62% {
        -o-transform: translateY(11.92254px) translateX(1.8px);
      }

      63% {
        -o-transform: translateY(11.51021px) translateX(1.95px);
      }

      64% {
        -o-transform: translateY(11.12152px) translateX(2.1px);
      }

      65% {
        -o-transform: translateY(10.75801px) translateX(2.25px);
      }

      66% {
        -o-transform: translateY(10.4211px) translateX(2.4px);
      }

      67% {
        -o-transform: translateY(10.11213px) translateX(2.55px);
      }

      68% {
        -o-transform: translateY(9.83232px) translateX(2.7px);
      }

      69% {
        -o-transform: translateY(9.58276px) translateX(2.85px);
      }

      70% {
        -o-transform: translateY(9.36446px) translateX(3px);
      }

      71% {
        -o-transform: translateY(9.17826px) translateX(3.15px);
      }

      72% {
        -o-transform: translateY(9.0249px) translateX(3.3px);
      }

      73% {
        -o-transform: translateY(8.90499px) translateX(3.45px);
      }

      74% {
        -o-transform: translateY(8.819px) translateX(3.6px);
      }

      75% {
        -o-transform: translateY(8.76727px) translateX(3.75px);
      }

      76% {
        -o-transform: translateY(8.75px) translateX(3.9px);
      }

      77% {
        -o-transform: translateY(8.76727px) translateX(4.05px);
      }

      78% {
        -o-transform: translateY(8.819px) translateX(4.2px);
      }

      79% {
        -o-transform: translateY(8.90499px) translateX(4.35px);
      }

      80% {
        -o-transform: translateY(9.0249px) translateX(4.5px);
      }

      81% {
        -o-transform: translateY(9.17826px) translateX(4.65px);
      }

      82% {
        -o-transform: translateY(9.36446px) translateX(4.8px);
      }

      83% {
        -o-transform: translateY(9.58276px) translateX(4.95px);
      }

      84% {
        -o-transform: translateY(9.83232px) translateX(5.1px);
      }

      85% {
        -o-transform: translateY(10.11213px) translateX(5.25px);
      }

      86% {
        -o-transform: translateY(10.4211px) translateX(5.4px);
      }

      87% {
        -o-transform: translateY(10.75801px) translateX(5.55px);
      }

      88% {
        -o-transform: translateY(11.12152px) translateX(5.7px);
      }

      89% {
        -o-transform: translateY(11.51021px) translateX(5.85px);
      }

      90% {
        -o-transform: translateY(11.92254px) translateX(6px);
      }

      91% {
        -o-transform: translateY(12.35688px) translateX(6.15px);
      }

      92% {
        -o-transform: translateY(12.81152px) translateX(6.3px);
      }

      93% {
        -o-transform: translateY(13.28466px) translateX(6.45px);
      }

      94% {
        -o-transform: translateY(13.77443px) translateX(6.6px);
      }

      95% {
        -o-transform: translateY(14.27891px) translateX(6.75px);
      }

      96% {
        -o-transform: translateY(14.7961px) translateX(6.9px);
      }

      97% {
        -o-transform: translateY(15.32396px) translateX(7.05px);
      }

      98% {
        -o-transform: translateY(15.86041px) translateX(7.2px);
      }

      99% {
        -o-transform: translateY(16.40333px) translateX(7.35px);
      }

      100% {
        -o-transform: translateY(16.95058px) translateX(7.5px);
      }
    }

    @-o-keyframes hailRight {
      50% {
        -o-transform: translateY(17.5px);
      }

      51% {
        -o-transform: translateY(17.5px) translateX(0.3px);
      }

      52% {
        -o-transform: translateY(16.95058px) translateX(0.6px);
      }

      53% {
        -o-transform: translateY(16.40333px) translateX(0.9px);
      }

      54% {
        -o-transform: translateY(15.86041px) translateX(1.2px);
      }

      55% {
        -o-transform: translateY(15.32396px) translateX(1.5px);
      }

      56% {
        -o-transform: translateY(14.7961px) translateX(1.8px);
      }

      57% {
        -o-transform: translateY(14.27891px) translateX(2.1px);
      }

      58% {
        -o-transform: translateY(13.77443px) translateX(2.4px);
      }

      59% {
        -o-transform: translateY(13.28466px) translateX(2.7px);
      }

      60% {
        -o-transform: translateY(12.81152px) translateX(3px);
      }

      61% {
        -o-transform: translateY(12.35688px) translateX(3.3px);
      }

      62% {
        -o-transform: translateY(11.92254px) translateX(3.6px);
      }

      63% {
        -o-transform: translateY(11.51021px) translateX(3.9px);
      }

      64% {
        -o-transform: translateY(11.12152px) translateX(4.2px);
      }

      65% {
        -o-transform: translateY(10.75801px) translateX(4.5px);
      }

      66% {
        -o-transform: translateY(10.4211px) translateX(4.8px);
      }

      67% {
        -o-transform: translateY(10.11213px) translateX(5.1px);
      }

      68% {
        -o-transform: translateY(9.83232px) translateX(5.4px);
      }

      69% {
        -o-transform: translateY(9.58276px) translateX(5.7px);
      }

      70% {
        -o-transform: translateY(9.36446px) translateX(6px);
      }

      71% {
        -o-transform: translateY(9.17826px) translateX(6.3px);
      }

      72% {
        -o-transform: translateY(9.0249px) translateX(6.6px);
      }

      73% {
        -o-transform: translateY(8.90499px) translateX(6.9px);
      }

      74% {
        -o-transform: translateY(8.819px) translateX(7.2px);
      }

      75% {
        -o-transform: translateY(8.76727px) translateX(7.5px);
      }

      76% {
        -o-transform: translateY(8.75px) translateX(7.8px);
      }

      77% {
        -o-transform: translateY(8.76727px) translateX(8.1px);
      }

      78% {
        -o-transform: translateY(8.819px) translateX(8.4px);
      }

      79% {
        -o-transform: translateY(8.90499px) translateX(8.7px);
      }

      80% {
        -o-transform: translateY(9.0249px) translateX(9px);
      }

      81% {
        -o-transform: translateY(9.17826px) translateX(9.3px);
      }

      82% {
        -o-transform: translateY(9.36446px) translateX(9.6px);
      }

      83% {
        -o-transform: translateY(9.58276px) translateX(9.9px);
      }

      84% {
        -o-transform: translateY(9.83232px) translateX(10.2px);
      }

      85% {
        -o-transform: translateY(10.11213px) translateX(10.5px);
      }

      86% {
        -o-transform: translateY(10.4211px) translateX(10.8px);
      }

      87% {
        -o-transform: translateY(10.75801px) translateX(11.1px);
      }

      88% {
        -o-transform: translateY(11.12152px) translateX(11.4px);
      }

      89% {
        -o-transform: translateY(11.51021px) translateX(11.7px);
      }

      90% {
        -o-transform: translateY(11.92254px) translateX(12px);
      }

      91% {
        -o-transform: translateY(12.35688px) translateX(12.3px);
      }

      92% {
        -o-transform: translateY(12.81152px) translateX(12.6px);
      }

      93% {
        -o-transform: translateY(13.28466px) translateX(12.9px);
      }

      94% {
        -o-transform: translateY(13.77443px) translateX(13.2px);
      }

      95% {
        -o-transform: translateY(14.27891px) translateX(13.5px);
      }

      96% {
        -o-transform: translateY(14.7961px) translateX(13.8px);
      }

      97% {
        -o-transform: translateY(15.32396px) translateX(14.1px);
      }

      98% {
        -o-transform: translateY(15.86041px) translateX(14.4px);
      }

      99% {
        -o-transform: translateY(16.40333px) translateX(14.7px);
      }

      100% {
        -o-transform: translateY(16.95058px) translateX(15px);
      }
    }

    @keyframes hailLeft {
      50% {
        transform: translateY(17.5px);
      }

      51% {
        transform: translateY(17.5px) translateX(-0.3px);
      }

      52% {
        transform: translateY(16.95058px) translateX(-0.6px);
      }

      53% {
        transform: translateY(16.40333px) translateX(-0.9px);
      }

      54% {
        transform: translateY(15.86041px) translateX(-1.2px);
      }

      55% {
        transform: translateY(15.32396px) translateX(-1.5px);
      }

      56% {
        transform: translateY(14.7961px) translateX(-1.8px);
      }

      57% {
        transform: translateY(14.27891px) translateX(-2.1px);
      }

      58% {
        transform: translateY(13.77443px) translateX(-2.4px);
      }

      59% {
        transform: translateY(13.28466px) translateX(-2.7px);
      }

      60% {
        transform: translateY(12.81152px) translateX(-3px);
      }

      61% {
        transform: translateY(12.35688px) translateX(-3.3px);
      }

      62% {
        transform: translateY(11.92254px) translateX(-3.6px);
      }

      63% {
        transform: translateY(11.51021px) translateX(-3.9px);
      }

      64% {
        transform: translateY(11.12152px) translateX(-4.2px);
      }

      65% {
        transform: translateY(10.75801px) translateX(-4.5px);
      }

      66% {
        transform: translateY(10.4211px) translateX(-4.8px);
      }

      67% {
        transform: translateY(10.11213px) translateX(-5.1px);
      }

      68% {
        transform: translateY(9.83232px) translateX(-5.4px);
      }

      69% {
        transform: translateY(9.58276px) translateX(-5.7px);
      }

      70% {
        transform: translateY(9.36446px) translateX(-6px);
      }

      71% {
        transform: translateY(9.17826px) translateX(-6.3px);
      }

      72% {
        transform: translateY(9.0249px) translateX(-6.6px);
      }

      73% {
        transform: translateY(8.90499px) translateX(-6.9px);
      }

      74% {
        transform: translateY(8.819px) translateX(-7.2px);
      }

      75% {
        transform: translateY(8.76727px) translateX(-7.5px);
      }

      76% {
        transform: translateY(8.75px) translateX(-7.8px);
      }

      77% {
        transform: translateY(8.76727px) translateX(-8.1px);
      }

      78% {
        transform: translateY(8.819px) translateX(-8.4px);
      }

      79% {
        transform: translateY(8.90499px) translateX(-8.7px);
      }

      80% {
        transform: translateY(9.0249px) translateX(-9px);
      }

      81% {
        transform: translateY(9.17826px) translateX(-9.3px);
      }

      82% {
        transform: translateY(9.36446px) translateX(-9.6px);
      }

      83% {
        transform: translateY(9.58276px) translateX(-9.9px);
      }

      84% {
        transform: translateY(9.83232px) translateX(-10.2px);
      }

      85% {
        transform: translateY(10.11213px) translateX(-10.5px);
      }

      86% {
        transform: translateY(10.4211px) translateX(-10.8px);
      }

      87% {
        transform: translateY(10.75801px) translateX(-11.1px);
      }

      88% {
        transform: translateY(11.12152px) translateX(-11.4px);
      }

      89% {
        transform: translateY(11.51021px) translateX(-11.7px);
      }

      90% {
        transform: translateY(11.92254px) translateX(-12px);
      }

      91% {
        transform: translateY(12.35688px) translateX(-12.3px);
      }

      92% {
        transform: translateY(12.81152px) translateX(-12.6px);
      }

      93% {
        transform: translateY(13.28466px) translateX(-12.9px);
      }

      94% {
        transform: translateY(13.77443px) translateX(-13.2px);
      }

      95% {
        transform: translateY(14.27891px) translateX(-13.5px);
      }

      96% {
        transform: translateY(14.7961px) translateX(-13.8px);
      }

      97% {
        transform: translateY(15.32396px) translateX(-14.1px);
      }

      98% {
        transform: translateY(15.86041px) translateX(-14.4px);
      }

      99% {
        transform: translateY(16.40333px) translateX(-14.7px);
      }

      100% {
        transform: translateY(16.95058px) translateX(-15px);
      }
    }

    @keyframes hailMiddle {
      50% {
        transform: translateY(17.5px);
      }

      51% {
        transform: translateY(17.5px) translateX(-0.15px);
      }

      52% {
        transform: translateY(16.95058px) translateX(-0.3px);
      }

      53% {
        transform: translateY(16.40333px) translateX(-0.45px);
      }

      54% {
        transform: translateY(15.86041px) translateX(-0.6px);
      }

      55% {
        transform: translateY(15.32396px) translateX(-0.75px);
      }

      56% {
        transform: translateY(14.7961px) translateX(-0.9px);
      }

      57% {
        transform: translateY(14.27891px) translateX(-1.05px);
      }

      58% {
        transform: translateY(13.77443px) translateX(-1.2px);
      }

      59% {
        transform: translateY(13.28466px) translateX(-1.35px);
      }

      60% {
        transform: translateY(12.81152px) translateX(-1.5px);
      }

      61% {
        transform: translateY(12.35688px) translateX(-1.65px);
      }

      62% {
        transform: translateY(11.92254px) translateX(-1.8px);
      }

      63% {
        transform: translateY(11.51021px) translateX(-1.95px);
      }

      64% {
        transform: translateY(11.12152px) translateX(-2.1px);
      }

      65% {
        transform: translateY(10.75801px) translateX(-2.25px);
      }

      66% {
        transform: translateY(10.4211px) translateX(-2.4px);
      }

      67% {
        transform: translateY(10.11213px) translateX(-2.55px);
      }

      68% {
        transform: translateY(9.83232px) translateX(-2.7px);
      }

      69% {
        transform: translateY(9.58276px) translateX(-2.85px);
      }

      70% {
        transform: translateY(9.36446px) translateX(-3px);
      }

      71% {
        transform: translateY(9.17826px) translateX(-3.15px);
      }

      72% {
        transform: translateY(9.0249px) translateX(-3.3px);
      }

      73% {
        transform: translateY(8.90499px) translateX(-3.45px);
      }

      74% {
        transform: translateY(8.819px) translateX(-3.6px);
      }

      75% {
        transform: translateY(8.76727px) translateX(-3.75px);
      }

      76% {
        transform: translateY(8.75px) translateX(-3.9px);
      }

      77% {
        transform: translateY(8.76727px) translateX(-4.05px);
      }

      78% {
        transform: translateY(8.819px) translateX(-4.2px);
      }

      79% {
        transform: translateY(8.90499px) translateX(-4.35px);
      }

      80% {
        transform: translateY(9.0249px) translateX(-4.5px);
      }

      81% {
        transform: translateY(9.17826px) translateX(-4.65px);
      }

      82% {
        transform: translateY(9.36446px) translateX(-4.8px);
      }

      83% {
        transform: translateY(9.58276px) translateX(-4.95px);
      }

      84% {
        transform: translateY(9.83232px) translateX(-5.1px);
      }

      85% {
        transform: translateY(10.11213px) translateX(-5.25px);
      }

      86% {
        transform: translateY(10.4211px) translateX(-5.4px);
      }

      87% {
        transform: translateY(10.75801px) translateX(-5.55px);
      }

      88% {
        transform: translateY(11.12152px) translateX(-5.7px);
      }

      89% {
        transform: translateY(11.51021px) translateX(-5.85px);
      }

      90% {
        transform: translateY(11.92254px) translateX(-6px);
      }

      91% {
        transform: translateY(12.35688px) translateX(-6.15px);
      }

      92% {
        transform: translateY(12.81152px) translateX(-6.3px);
      }

      93% {
        transform: translateY(13.28466px) translateX(-6.45px);
      }

      94% {
        transform: translateY(13.77443px) translateX(-6.6px);
      }

      95% {
        transform: translateY(14.27891px) translateX(-6.75px);
      }

      96% {
        transform: translateY(14.7961px) translateX(-6.9px);
      }

      97% {
        transform: translateY(15.32396px) translateX(-7.05px);
      }

      98% {
        transform: translateY(15.86041px) translateX(-7.2px);
      }

      99% {
        transform: translateY(16.40333px) translateX(-7.35px);
      }

      100% {
        transform: translateY(16.95058px) translateX(-7.5px);
      }
    }

    @keyframes hailMiddle2 {
      50% {
        transform: translateY(17.5px);
      }

      51% {
        transform: translateY(17.5px) translateX(0.15px);
      }

      52% {
        transform: translateY(16.95058px) translateX(0.3px);
      }

      53% {
        transform: translateY(16.40333px) translateX(0.45px);
      }

      54% {
        transform: translateY(15.86041px) translateX(0.6px);
      }

      55% {
        transform: translateY(15.32396px) translateX(0.75px);
      }

      56% {
        transform: translateY(14.7961px) translateX(0.9px);
      }

      57% {
        transform: translateY(14.27891px) translateX(1.05px);
      }

      58% {
        transform: translateY(13.77443px) translateX(1.2px);
      }

      59% {
        transform: translateY(13.28466px) translateX(1.35px);
      }

      60% {
        transform: translateY(12.81152px) translateX(1.5px);
      }

      61% {
        transform: translateY(12.35688px) translateX(1.65px);
      }

      62% {
        transform: translateY(11.92254px) translateX(1.8px);
      }

      63% {
        transform: translateY(11.51021px) translateX(1.95px);
      }

      64% {
        transform: translateY(11.12152px) translateX(2.1px);
      }

      65% {
        transform: translateY(10.75801px) translateX(2.25px);
      }

      66% {
        transform: translateY(10.4211px) translateX(2.4px);
      }

      67% {
        transform: translateY(10.11213px) translateX(2.55px);
      }

      68% {
        transform: translateY(9.83232px) translateX(2.7px);
      }

      69% {
        transform: translateY(9.58276px) translateX(2.85px);
      }

      70% {
        transform: translateY(9.36446px) translateX(3px);
      }

      71% {
        transform: translateY(9.17826px) translateX(3.15px);
      }

      72% {
        transform: translateY(9.0249px) translateX(3.3px);
      }

      73% {
        transform: translateY(8.90499px) translateX(3.45px);
      }

      74% {
        transform: translateY(8.819px) translateX(3.6px);
      }

      75% {
        transform: translateY(8.76727px) translateX(3.75px);
      }

      76% {
        transform: translateY(8.75px) translateX(3.9px);
      }

      77% {
        transform: translateY(8.76727px) translateX(4.05px);
      }

      78% {
        transform: translateY(8.819px) translateX(4.2px);
      }

      79% {
        transform: translateY(8.90499px) translateX(4.35px);
      }

      80% {
        transform: translateY(9.0249px) translateX(4.5px);
      }

      81% {
        transform: translateY(9.17826px) translateX(4.65px);
      }

      82% {
        transform: translateY(9.36446px) translateX(4.8px);
      }

      83% {
        transform: translateY(9.58276px) translateX(4.95px);
      }

      84% {
        transform: translateY(9.83232px) translateX(5.1px);
      }

      85% {
        transform: translateY(10.11213px) translateX(5.25px);
      }

      86% {
        transform: translateY(10.4211px) translateX(5.4px);
      }

      87% {
        transform: translateY(10.75801px) translateX(5.55px);
      }

      88% {
        transform: translateY(11.12152px) translateX(5.7px);
      }

      89% {
        transform: translateY(11.51021px) translateX(5.85px);
      }

      90% {
        transform: translateY(11.92254px) translateX(6px);
      }

      91% {
        transform: translateY(12.35688px) translateX(6.15px);
      }

      92% {
        transform: translateY(12.81152px) translateX(6.3px);
      }

      93% {
        transform: translateY(13.28466px) translateX(6.45px);
      }

      94% {
        transform: translateY(13.77443px) translateX(6.6px);
      }

      95% {
        transform: translateY(14.27891px) translateX(6.75px);
      }

      96% {
        transform: translateY(14.7961px) translateX(6.9px);
      }

      97% {
        transform: translateY(15.32396px) translateX(7.05px);
      }

      98% {
        transform: translateY(15.86041px) translateX(7.2px);
      }

      99% {
        transform: translateY(16.40333px) translateX(7.35px);
      }

      100% {
        transform: translateY(16.95058px) translateX(7.5px);
      }
    }

    @keyframes hailRight {
      50% {
        transform: translateY(17.5px);
      }

      51% {
        transform: translateY(17.5px) translateX(0.3px);
      }

      52% {
        transform: translateY(16.95058px) translateX(0.6px);
      }

      53% {
        transform: translateY(16.40333px) translateX(0.9px);
      }

      54% {
        transform: translateY(15.86041px) translateX(1.2px);
      }

      55% {
        transform: translateY(15.32396px) translateX(1.5px);
      }

      56% {
        transform: translateY(14.7961px) translateX(1.8px);
      }

      57% {
        transform: translateY(14.27891px) translateX(2.1px);
      }

      58% {
        transform: translateY(13.77443px) translateX(2.4px);
      }

      59% {
        transform: translateY(13.28466px) translateX(2.7px);
      }

      60% {
        transform: translateY(12.81152px) translateX(3px);
      }

      61% {
        transform: translateY(12.35688px) translateX(3.3px);
      }

      62% {
        transform: translateY(11.92254px) translateX(3.6px);
      }

      63% {
        transform: translateY(11.51021px) translateX(3.9px);
      }

      64% {
        transform: translateY(11.12152px) translateX(4.2px);
      }

      65% {
        transform: translateY(10.75801px) translateX(4.5px);
      }

      66% {
        transform: translateY(10.4211px) translateX(4.8px);
      }

      67% {
        transform: translateY(10.11213px) translateX(5.1px);
      }

      68% {
        transform: translateY(9.83232px) translateX(5.4px);
      }

      69% {
        transform: translateY(9.58276px) translateX(5.7px);
      }

      70% {
        transform: translateY(9.36446px) translateX(6px);
      }

      71% {
        transform: translateY(9.17826px) translateX(6.3px);
      }

      72% {
        transform: translateY(9.0249px) translateX(6.6px);
      }

      73% {
        transform: translateY(8.90499px) translateX(6.9px);
      }

      74% {
        transform: translateY(8.819px) translateX(7.2px);
      }

      75% {
        transform: translateY(8.76727px) translateX(7.5px);
      }

      76% {
        transform: translateY(8.75px) translateX(7.8px);
      }

      77% {
        transform: translateY(8.76727px) translateX(8.1px);
      }

      78% {
        transform: translateY(8.819px) translateX(8.4px);
      }

      79% {
        transform: translateY(8.90499px) translateX(8.7px);
      }

      80% {
        transform: translateY(9.0249px) translateX(9px);
      }

      81% {
        transform: translateY(9.17826px) translateX(9.3px);
      }

      82% {
        transform: translateY(9.36446px) translateX(9.6px);
      }

      83% {
        transform: translateY(9.58276px) translateX(9.9px);
      }

      84% {
        transform: translateY(9.83232px) translateX(10.2px);
      }

      85% {
        transform: translateY(10.11213px) translateX(10.5px);
      }

      86% {
        transform: translateY(10.4211px) translateX(10.8px);
      }

      87% {
        transform: translateY(10.75801px) translateX(11.1px);
      }

      88% {
        transform: translateY(11.12152px) translateX(11.4px);
      }

      89% {
        transform: translateY(11.51021px) translateX(11.7px);
      }

      90% {
        transform: translateY(11.92254px) translateX(12px);
      }

      91% {
        transform: translateY(12.35688px) translateX(12.3px);
      }

      92% {
        transform: translateY(12.81152px) translateX(12.6px);
      }

      93% {
        transform: translateY(13.28466px) translateX(12.9px);
      }

      94% {
        transform: translateY(13.77443px) translateX(13.2px);
      }

      95% {
        transform: translateY(14.27891px) translateX(13.5px);
      }

      96% {
        transform: translateY(14.7961px) translateX(13.8px);
      }

      97% {
        transform: translateY(15.32396px) translateX(14.1px);
      }

      98% {
        transform: translateY(15.86041px) translateX(14.4px);
      }

      99% {
        transform: translateY(16.40333px) translateX(14.7px);
      }

      100% {
        transform: translateY(16.95058px) translateX(15px);
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
    <g class="climacon_iconWrap climacon_iconWrap-cloudHailAltSunFill">
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
            <g class="climacon_componentWrap climacon_componentWrap-sunBody">
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
        <g class="climacon_componentWrap climacon_componentWrap-hailAlt">
            <g class="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                <circle cx="42" cy="65.498" r="2"/>
            </g>
            <g class="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                <circle cx="49.999" cy="65.498" r="2"/>
            </g>
            <g class="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                <circle cx="57.998" cy="65.498" r="2"/>
            </g>
            <g class="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                <circle cx="42" cy="65.498" r="2"/>
            </g>
            <g class="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                <circle cx="49.999" cy="65.498" r="2"/>
            </g>
            <g class="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                <circle cx="57.998" cy="65.498" r="2"/>
            </g>
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
</svg><!-- cloudHailAltSunFill -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudHailAltSunFill = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudHailAltSunFill;
