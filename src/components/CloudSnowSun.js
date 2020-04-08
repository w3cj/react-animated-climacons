import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudSnowSun"
    class="climacon climacon_cloudSnowSun"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="15 15 70 70"
    enable-background="new 15 15 70 70"
    xml:space="preserve">
    <style type="text/css"><![CDATA[

        svg {
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

        .climacon_component-stroke_snow {
            fill-opacity: 0;

            -webkit-animation-name: snowFall, fillOpacity2;
            -moz-animation-name: snowFall, fillOpacity2;
            -o-animation-name: snowFall, fillOpacity2;
            animation-name: snowFall, fillOpacity2;

            -webkit-animation-timing-function: ease-in-out;
            -moz-animation-timing-function: ease-in-out;
            -o-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;

            -webkit-animation-duration: 6s;
            -moz-animation-duration: 6s;
            -o-animation-duration: 6s;
            animation-duration: 6s;
        }

        .climacon_component-stroke_snow:nth-child(3) {
            -webkit-animation-name: snowFall2, fillOpacity2;
            -moz-animation-name: snowFall2, fillOpacity2;
            -o-animation-name: snowFall2, fillOpacity2;
            animation-name: snowFall2, fillOpacity2;
        }

        .climacon_component-stroke_snow:nth-child(1) {
            -webkit-animation-delay: 0s;
            -moz-animation-delay: 0s;
            -o-animation-delay: 0s;
            animation-delay: 0s;
        }

        .climacon_component-stroke_snow:nth-child(2) {
            -webkit-animation-delay: 2s;
            -moz-animation-delay: 2s;
            -o-animation-delay: 2s;
            animation-delay: 2s;
        }

        .climacon_component-stroke_snow:nth-child(3) {
            -webkit-animation-delay: 4s;
            -moz-animation-delay: 4s;
            -o-animation-delay: 4s;
            animation-delay: 4s;
        }

        @-webkit-keyframes snowFall {
            0% {
            -webkit-transform: translateY(0px) translateX(0px);
            }

            1% {
            -webkit-transform: translateY(0.175px) translateX(0.38478px);
            }

            2% {
            -webkit-transform: translateY(0.35px) translateX(0.75349px);
            }

            3% {
            -webkit-transform: translateY(0.525px) translateX(1.10577px);
            }

            4% {
            -webkit-transform: translateY(0.7px) translateX(1.44133px);
            }

            5% {
            -webkit-transform: translateY(0.875px) translateX(1.75989px);
            }

            6% {
            -webkit-transform: translateY(1.05px) translateX(2.06119px);
            }

            7% {
            -webkit-transform: translateY(1.225px) translateX(2.34504px);
            }

            8% {
            -webkit-transform: translateY(1.4px) translateX(2.61124px);
            }

            9% {
            -webkit-transform: translateY(1.575px) translateX(2.85966px);
            }

            10% {
            -webkit-transform: translateY(1.75px) translateX(3.09017px);
            }

            11% {
            -webkit-transform: translateY(1.925px) translateX(3.30269px);
            }

            12% {
            -webkit-transform: translateY(2.1px) translateX(3.49718px);
            }

            13% {
            -webkit-transform: translateY(2.275px) translateX(3.67362px);
            }

            14% {
            -webkit-transform: translateY(2.45px) translateX(3.83201px);
            }

            15% {
            -webkit-transform: translateY(2.625px) translateX(3.97242px);
            }

            16% {
            -webkit-transform: translateY(2.8px) translateX(4.09491px);
            }

            17% {
            -webkit-transform: translateY(2.975px) translateX(4.19959px);
            }

            18% {
            -webkit-transform: translateY(3.15px) translateX(4.28661px);
            }

            19% {
            -webkit-transform: translateY(3.325px) translateX(4.35615px);
            }

            20% {
            -webkit-transform: translateY(3.5px) translateX(4.40839px);
            }

            21% {
            -webkit-transform: translateY(3.675px) translateX(4.44358px);
            }

            22% {
            -webkit-transform: translateY(3.85px) translateX(4.46197px);
            }

            23% {
            -webkit-transform: translateY(4.025px) translateX(4.46386px);
            }

            24% {
            -webkit-transform: translateY(4.2px) translateX(4.44956px);
            }

            25% {
            -webkit-transform: translateY(4.375px) translateX(4.41942px);
            }

            26% {
            -webkit-transform: translateY(4.55px) translateX(4.37381px);
            }

            27% {
            -webkit-transform: translateY(4.725px) translateX(4.31314px);
            }

            28% {
            -webkit-transform: translateY(4.9px) translateX(4.23782px);
            }

            29% {
            -webkit-transform: translateY(5.075px) translateX(4.14831px);
            }

            30% {
            -webkit-transform: translateY(5.25px) translateX(4.04508px);
            }

            31% {
            -webkit-transform: translateY(5.425px) translateX(3.92863px);
            }

            32% {
            -webkit-transform: translateY(5.6px) translateX(3.79948px);
            }

            33% {
            -webkit-transform: translateY(5.775px) translateX(3.65815px);
            }

            34% {
            -webkit-transform: translateY(5.95px) translateX(3.50523px);
            }

            35% {
            -webkit-transform: translateY(6.125px) translateX(3.34127px);
            }

            36% {
            -webkit-transform: translateY(6.3px) translateX(3.16689px);
            }

            37% {
            -webkit-transform: translateY(6.475px) translateX(2.9827px);
            }

            38% {
            -webkit-transform: translateY(6.65px) translateX(2.78933px);
            }

            39% {
            -webkit-transform: translateY(6.825px) translateX(2.58742px);
            }

            40% {
            -webkit-transform: translateY(7px) translateX(2.37764px);
            }

            41% {
            -webkit-transform: translateY(7.175px) translateX(2.16066px);
            }

            42% {
            -webkit-transform: translateY(7.35px) translateX(1.93717px);
            }

            43% {
            -webkit-transform: translateY(7.525px) translateX(1.70785px);
            }

            44% {
            -webkit-transform: translateY(7.7px) translateX(1.47343px);
            }

            45% {
            -webkit-transform: translateY(7.875px) translateX(1.23461px);
            }

            46% {
            -webkit-transform: translateY(8.05px) translateX(0.99211px);
            }

            47% {
            -webkit-transform: translateY(8.225px) translateX(0.74667px);
            }

            48% {
            -webkit-transform: translateY(8.4px) translateX(0.49901px);
            }

            49% {
            -webkit-transform: translateY(8.575px) translateX(0.24988px);
            }

            50% {
            -webkit-transform: translateY(8.75px) translateX(0px);
            }

            51% {
            -webkit-transform: translateY(8.925px) translateX(-0.24988px);
            }

            52% {
            -webkit-transform: translateY(9.1px) translateX(-0.49901px);
            }

            53% {
            -webkit-transform: translateY(9.275px) translateX(-0.74667px);
            }

            54% {
            -webkit-transform: translateY(9.45px) translateX(-0.99211px);
            }

            55% {
            -webkit-transform: translateY(9.625px) translateX(-1.23461px);
            }

            56% {
            -webkit-transform: translateY(9.8px) translateX(-1.47343px);
            }

            57% {
            -webkit-transform: translateY(9.975px) translateX(-1.70785px);
            }

            58% {
            -webkit-transform: translateY(10.15px) translateX(-1.93717px);
            }

            59% {
            -webkit-transform: translateY(10.325px) translateX(-2.16066px);
            }

            60% {
            -webkit-transform: translateY(10.5px) translateX(-2.37764px);
            }

            61% {
            -webkit-transform: translateY(10.675px) translateX(-2.58742px);
            }

            62% {
            -webkit-transform: translateY(10.85px) translateX(-2.78933px);
            }

            63% {
            -webkit-transform: translateY(11.025px) translateX(-2.9827px);
            }

            64% {
            -webkit-transform: translateY(11.2px) translateX(-3.16689px);
            }

            65% {
            -webkit-transform: translateY(11.375px) translateX(-3.34127px);
            }

            66% {
            -webkit-transform: translateY(11.55px) translateX(-3.50523px);
            }

            67% {
            -webkit-transform: translateY(11.725px) translateX(-3.65815px);
            }

            68% {
            -webkit-transform: translateY(11.9px) translateX(-3.79948px);
            }

            69% {
            -webkit-transform: translateY(12.075px) translateX(-3.92863px);
            }

            70% {
            -webkit-transform: translateY(12.25px) translateX(-4.04508px);
            }

            71% {
            -webkit-transform: translateY(12.425px) translateX(-4.14831px);
            }

            72% {
            -webkit-transform: translateY(12.6px) translateX(-4.23782px);
            }

            73% {
            -webkit-transform: translateY(12.775px) translateX(-4.31314px);
            }

            74% {
            -webkit-transform: translateY(12.95px) translateX(-4.37381px);
            }

            75% {
            -webkit-transform: translateY(13.125px) translateX(-4.41942px);
            }

            76% {
            -webkit-transform: translateY(13.3px) translateX(-4.44956px);
            }

            77% {
            -webkit-transform: translateY(13.475px) translateX(-4.46386px);
            }

            78% {
            -webkit-transform: translateY(13.65px) translateX(-4.46197px);
            }

            79% {
            -webkit-transform: translateY(13.825px) translateX(-4.44358px);
            }

            80% {
            -webkit-transform: translateY(14px) translateX(-4.40839px);
            }

            81% {
            -webkit-transform: translateY(14.175px) translateX(-4.35615px);
            }

            82% {
            -webkit-transform: translateY(14.35px) translateX(-4.28661px);
            }

            83% {
            -webkit-transform: translateY(14.525px) translateX(-4.19959px);
            }

            84% {
            -webkit-transform: translateY(14.7px) translateX(-4.09491px);
            }

            85% {
            -webkit-transform: translateY(14.875px) translateX(-3.97242px);
            }

            86% {
            -webkit-transform: translateY(15.05px) translateX(-3.83201px);
            }

            87% {
            -webkit-transform: translateY(15.225px) translateX(-3.67362px);
            }

            88% {
            -webkit-transform: translateY(15.4px) translateX(-3.49718px);
            }

            89% {
            -webkit-transform: translateY(15.575px) translateX(-3.30269px);
            }

            90% {
            -webkit-transform: translateY(15.75px) translateX(-3.09017px);
            }

            91% {
            -webkit-transform: translateY(15.925px) translateX(-2.85966px);
            }

            92% {
            -webkit-transform: translateY(16.1px) translateX(-2.61124px);
            }

            93% {
            -webkit-transform: translateY(16.275px) translateX(-2.34504px);
            }

            94% {
            -webkit-transform: translateY(16.45px) translateX(-2.06119px);
            }

            95% {
            -webkit-transform: translateY(16.625px) translateX(-1.75989px);
            }

            96% {
            -webkit-transform: translateY(16.8px) translateX(-1.44133px);
            }

            97% {
            -webkit-transform: translateY(16.975px) translateX(-1.10577px);
            }

            98% {
            -webkit-transform: translateY(17.15px) translateX(-0.75349px);
            }

            99% {
            -webkit-transform: translateY(17.325px) translateX(-0.38478px);
            }

            100% {
            -webkit-transform: translateY(17.5px) translateX(0.0px);
            }
        }

        @-moz-keyframes snowFall {
            0% {
            -moz-transform: translateY(0px) translateX(0px);
            }

            1% {
            -moz-transform: translateY(0.175px) translateX(0.38478px);
            }

            2% {
            -moz-transform: translateY(0.35px) translateX(0.75349px);
            }

            3% {
            -moz-transform: translateY(0.525px) translateX(1.10577px);
            }

            4% {
            -moz-transform: translateY(0.7px) translateX(1.44133px);
            }

            5% {
            -moz-transform: translateY(0.875px) translateX(1.75989px);
            }

            6% {
            -moz-transform: translateY(1.05px) translateX(2.06119px);
            }

            7% {
            -moz-transform: translateY(1.225px) translateX(2.34504px);
            }

            8% {
            -moz-transform: translateY(1.4px) translateX(2.61124px);
            }

            9% {
            -moz-transform: translateY(1.575px) translateX(2.85966px);
            }

            10% {
            -moz-transform: translateY(1.75px) translateX(3.09017px);
            }

            11% {
            -moz-transform: translateY(1.925px) translateX(3.30269px);
            }

            12% {
            -moz-transform: translateY(2.1px) translateX(3.49718px);
            }

            13% {
            -moz-transform: translateY(2.275px) translateX(3.67362px);
            }

            14% {
            -moz-transform: translateY(2.45px) translateX(3.83201px);
            }

            15% {
            -moz-transform: translateY(2.625px) translateX(3.97242px);
            }

            16% {
            -moz-transform: translateY(2.8px) translateX(4.09491px);
            }

            17% {
            -moz-transform: translateY(2.975px) translateX(4.19959px);
            }

            18% {
            -moz-transform: translateY(3.15px) translateX(4.28661px);
            }

            19% {
            -moz-transform: translateY(3.325px) translateX(4.35615px);
            }

            20% {
            -moz-transform: translateY(3.5px) translateX(4.40839px);
            }

            21% {
            -moz-transform: translateY(3.675px) translateX(4.44358px);
            }

            22% {
            -moz-transform: translateY(3.85px) translateX(4.46197px);
            }

            23% {
            -moz-transform: translateY(4.025px) translateX(4.46386px);
            }

            24% {
            -moz-transform: translateY(4.2px) translateX(4.44956px);
            }

            25% {
            -moz-transform: translateY(4.375px) translateX(4.41942px);
            }

            26% {
            -moz-transform: translateY(4.55px) translateX(4.37381px);
            }

            27% {
            -moz-transform: translateY(4.725px) translateX(4.31314px);
            }

            28% {
            -moz-transform: translateY(4.9px) translateX(4.23782px);
            }

            29% {
            -moz-transform: translateY(5.075px) translateX(4.14831px);
            }

            30% {
            -moz-transform: translateY(5.25px) translateX(4.04508px);
            }

            31% {
            -moz-transform: translateY(5.425px) translateX(3.92863px);
            }

            32% {
            -moz-transform: translateY(5.6px) translateX(3.79948px);
            }

            33% {
            -moz-transform: translateY(5.775px) translateX(3.65815px);
            }

            34% {
            -moz-transform: translateY(5.95px) translateX(3.50523px);
            }

            35% {
            -moz-transform: translateY(6.125px) translateX(3.34127px);
            }

            36% {
            -moz-transform: translateY(6.3px) translateX(3.16689px);
            }

            37% {
            -moz-transform: translateY(6.475px) translateX(2.9827px);
            }

            38% {
            -moz-transform: translateY(6.65px) translateX(2.78933px);
            }

            39% {
            -moz-transform: translateY(6.825px) translateX(2.58742px);
            }

            40% {
            -moz-transform: translateY(7px) translateX(2.37764px);
            }

            41% {
            -moz-transform: translateY(7.175px) translateX(2.16066px);
            }

            42% {
            -moz-transform: translateY(7.35px) translateX(1.93717px);
            }

            43% {
            -moz-transform: translateY(7.525px) translateX(1.70785px);
            }

            44% {
            -moz-transform: translateY(7.7px) translateX(1.47343px);
            }

            45% {
            -moz-transform: translateY(7.875px) translateX(1.23461px);
            }

            46% {
            -moz-transform: translateY(8.05px) translateX(0.99211px);
            }

            47% {
            -moz-transform: translateY(8.225px) translateX(0.74667px);
            }

            48% {
            -moz-transform: translateY(8.4px) translateX(0.49901px);
            }

            49% {
            -moz-transform: translateY(8.575px) translateX(0.24988px);
            }

            50% {
            -moz-transform: translateY(8.75px) translateX(0px);
            }

            51% {
            -moz-transform: translateY(8.925px) translateX(-0.24988px);
            }

            52% {
            -moz-transform: translateY(9.1px) translateX(-0.49901px);
            }

            53% {
            -moz-transform: translateY(9.275px) translateX(-0.74667px);
            }

            54% {
            -moz-transform: translateY(9.45px) translateX(-0.99211px);
            }

            55% {
            -moz-transform: translateY(9.625px) translateX(-1.23461px);
            }

            56% {
            -moz-transform: translateY(9.8px) translateX(-1.47343px);
            }

            57% {
            -moz-transform: translateY(9.975px) translateX(-1.70785px);
            }

            58% {
            -moz-transform: translateY(10.15px) translateX(-1.93717px);
            }

            59% {
            -moz-transform: translateY(10.325px) translateX(-2.16066px);
            }

            60% {
            -moz-transform: translateY(10.5px) translateX(-2.37764px);
            }

            61% {
            -moz-transform: translateY(10.675px) translateX(-2.58742px);
            }

            62% {
            -moz-transform: translateY(10.85px) translateX(-2.78933px);
            }

            63% {
            -moz-transform: translateY(11.025px) translateX(-2.9827px);
            }

            64% {
            -moz-transform: translateY(11.2px) translateX(-3.16689px);
            }

            65% {
            -moz-transform: translateY(11.375px) translateX(-3.34127px);
            }

            66% {
            -moz-transform: translateY(11.55px) translateX(-3.50523px);
            }

            67% {
            -moz-transform: translateY(11.725px) translateX(-3.65815px);
            }

            68% {
            -moz-transform: translateY(11.9px) translateX(-3.79948px);
            }

            69% {
            -moz-transform: translateY(12.075px) translateX(-3.92863px);
            }

            70% {
            -moz-transform: translateY(12.25px) translateX(-4.04508px);
            }

            71% {
            -moz-transform: translateY(12.425px) translateX(-4.14831px);
            }

            72% {
            -moz-transform: translateY(12.6px) translateX(-4.23782px);
            }

            73% {
            -moz-transform: translateY(12.775px) translateX(-4.31314px);
            }

            74% {
            -moz-transform: translateY(12.95px) translateX(-4.37381px);
            }

            75% {
            -moz-transform: translateY(13.125px) translateX(-4.41942px);
            }

            76% {
            -moz-transform: translateY(13.3px) translateX(-4.44956px);
            }

            77% {
            -moz-transform: translateY(13.475px) translateX(-4.46386px);
            }

            78% {
            -moz-transform: translateY(13.65px) translateX(-4.46197px);
            }

            79% {
            -moz-transform: translateY(13.825px) translateX(-4.44358px);
            }

            80% {
            -moz-transform: translateY(14px) translateX(-4.40839px);
            }

            81% {
            -moz-transform: translateY(14.175px) translateX(-4.35615px);
            }

            82% {
            -moz-transform: translateY(14.35px) translateX(-4.28661px);
            }

            83% {
            -moz-transform: translateY(14.525px) translateX(-4.19959px);
            }

            84% {
            -moz-transform: translateY(14.7px) translateX(-4.09491px);
            }

            85% {
            -moz-transform: translateY(14.875px) translateX(-3.97242px);
            }

            86% {
            -moz-transform: translateY(15.05px) translateX(-3.83201px);
            }

            87% {
            -moz-transform: translateY(15.225px) translateX(-3.67362px);
            }

            88% {
            -moz-transform: translateY(15.4px) translateX(-3.49718px);
            }

            89% {
            -moz-transform: translateY(15.575px) translateX(-3.30269px);
            }

            90% {
            -moz-transform: translateY(15.75px) translateX(-3.09017px);
            }

            91% {
            -moz-transform: translateY(15.925px) translateX(-2.85966px);
            }

            92% {
            -moz-transform: translateY(16.1px) translateX(-2.61124px);
            }

            93% {
            -moz-transform: translateY(16.275px) translateX(-2.34504px);
            }

            94% {
            -moz-transform: translateY(16.45px) translateX(-2.06119px);
            }

            95% {
            -moz-transform: translateY(16.625px) translateX(-1.75989px);
            }

            96% {
            -moz-transform: translateY(16.8px) translateX(-1.44133px);
            }

            97% {
            -moz-transform: translateY(16.975px) translateX(-1.10577px);
            }

            98% {
            -moz-transform: translateY(17.15px) translateX(-0.75349px);
            }

            99% {
            -moz-transform: translateY(17.325px) translateX(-0.38478px);
            }

            100% {
            -moz-transform: translateY(17.5px) translateX(0.0px);
            }
        }

        @-o-keyframes snowFall {
            0% {
            -o-transform: translateY(0px) translateX(0px);
            }

            1% {
            -o-transform: translateY(0.175px) translateX(0.38478px);
            }

            2% {
            -o-transform: translateY(0.35px) translateX(0.75349px);
            }

            3% {
            -o-transform: translateY(0.525px) translateX(1.10577px);
            }

            4% {
            -o-transform: translateY(0.7px) translateX(1.44133px);
            }

            5% {
            -o-transform: translateY(0.875px) translateX(1.75989px);
            }

            6% {
            -o-transform: translateY(1.05px) translateX(2.06119px);
            }

            7% {
            -o-transform: translateY(1.225px) translateX(2.34504px);
            }

            8% {
            -o-transform: translateY(1.4px) translateX(2.61124px);
            }

            9% {
            -o-transform: translateY(1.575px) translateX(2.85966px);
            }

            10% {
            -o-transform: translateY(1.75px) translateX(3.09017px);
            }

            11% {
            -o-transform: translateY(1.925px) translateX(3.30269px);
            }

            12% {
            -o-transform: translateY(2.1px) translateX(3.49718px);
            }

            13% {
            -o-transform: translateY(2.275px) translateX(3.67362px);
            }

            14% {
            -o-transform: translateY(2.45px) translateX(3.83201px);
            }

            15% {
            -o-transform: translateY(2.625px) translateX(3.97242px);
            }

            16% {
            -o-transform: translateY(2.8px) translateX(4.09491px);
            }

            17% {
            -o-transform: translateY(2.975px) translateX(4.19959px);
            }

            18% {
            -o-transform: translateY(3.15px) translateX(4.28661px);
            }

            19% {
            -o-transform: translateY(3.325px) translateX(4.35615px);
            }

            20% {
            -o-transform: translateY(3.5px) translateX(4.40839px);
            }

            21% {
            -o-transform: translateY(3.675px) translateX(4.44358px);
            }

            22% {
            -o-transform: translateY(3.85px) translateX(4.46197px);
            }

            23% {
            -o-transform: translateY(4.025px) translateX(4.46386px);
            }

            24% {
            -o-transform: translateY(4.2px) translateX(4.44956px);
            }

            25% {
            -o-transform: translateY(4.375px) translateX(4.41942px);
            }

            26% {
            -o-transform: translateY(4.55px) translateX(4.37381px);
            }

            27% {
            -o-transform: translateY(4.725px) translateX(4.31314px);
            }

            28% {
            -o-transform: translateY(4.9px) translateX(4.23782px);
            }

            29% {
            -o-transform: translateY(5.075px) translateX(4.14831px);
            }

            30% {
            -o-transform: translateY(5.25px) translateX(4.04508px);
            }

            31% {
            -o-transform: translateY(5.425px) translateX(3.92863px);
            }

            32% {
            -o-transform: translateY(5.6px) translateX(3.79948px);
            }

            33% {
            -o-transform: translateY(5.775px) translateX(3.65815px);
            }

            34% {
            -o-transform: translateY(5.95px) translateX(3.50523px);
            }

            35% {
            -o-transform: translateY(6.125px) translateX(3.34127px);
            }

            36% {
            -o-transform: translateY(6.3px) translateX(3.16689px);
            }

            37% {
            -o-transform: translateY(6.475px) translateX(2.9827px);
            }

            38% {
            -o-transform: translateY(6.65px) translateX(2.78933px);
            }

            39% {
            -o-transform: translateY(6.825px) translateX(2.58742px);
            }

            40% {
            -o-transform: translateY(7px) translateX(2.37764px);
            }

            41% {
            -o-transform: translateY(7.175px) translateX(2.16066px);
            }

            42% {
            -o-transform: translateY(7.35px) translateX(1.93717px);
            }

            43% {
            -o-transform: translateY(7.525px) translateX(1.70785px);
            }

            44% {
            -o-transform: translateY(7.7px) translateX(1.47343px);
            }

            45% {
            -o-transform: translateY(7.875px) translateX(1.23461px);
            }

            46% {
            -o-transform: translateY(8.05px) translateX(0.99211px);
            }

            47% {
            -o-transform: translateY(8.225px) translateX(0.74667px);
            }

            48% {
            -o-transform: translateY(8.4px) translateX(0.49901px);
            }

            49% {
            -o-transform: translateY(8.575px) translateX(0.24988px);
            }

            50% {
            -o-transform: translateY(8.75px) translateX(0px);
            }

            51% {
            -o-transform: translateY(8.925px) translateX(-0.24988px);
            }

            52% {
            -o-transform: translateY(9.1px) translateX(-0.49901px);
            }

            53% {
            -o-transform: translateY(9.275px) translateX(-0.74667px);
            }

            54% {
            -o-transform: translateY(9.45px) translateX(-0.99211px);
            }

            55% {
            -o-transform: translateY(9.625px) translateX(-1.23461px);
            }

            56% {
            -o-transform: translateY(9.8px) translateX(-1.47343px);
            }

            57% {
            -o-transform: translateY(9.975px) translateX(-1.70785px);
            }

            58% {
            -o-transform: translateY(10.15px) translateX(-1.93717px);
            }

            59% {
            -o-transform: translateY(10.325px) translateX(-2.16066px);
            }

            60% {
            -o-transform: translateY(10.5px) translateX(-2.37764px);
            }

            61% {
            -o-transform: translateY(10.675px) translateX(-2.58742px);
            }

            62% {
            -o-transform: translateY(10.85px) translateX(-2.78933px);
            }

            63% {
            -o-transform: translateY(11.025px) translateX(-2.9827px);
            }

            64% {
            -o-transform: translateY(11.2px) translateX(-3.16689px);
            }

            65% {
            -o-transform: translateY(11.375px) translateX(-3.34127px);
            }

            66% {
            -o-transform: translateY(11.55px) translateX(-3.50523px);
            }

            67% {
            -o-transform: translateY(11.725px) translateX(-3.65815px);
            }

            68% {
            -o-transform: translateY(11.9px) translateX(-3.79948px);
            }

            69% {
            -o-transform: translateY(12.075px) translateX(-3.92863px);
            }

            70% {
            -o-transform: translateY(12.25px) translateX(-4.04508px);
            }

            71% {
            -o-transform: translateY(12.425px) translateX(-4.14831px);
            }

            72% {
            -o-transform: translateY(12.6px) translateX(-4.23782px);
            }

            73% {
            -o-transform: translateY(12.775px) translateX(-4.31314px);
            }

            74% {
            -o-transform: translateY(12.95px) translateX(-4.37381px);
            }

            75% {
            -o-transform: translateY(13.125px) translateX(-4.41942px);
            }

            76% {
            -o-transform: translateY(13.3px) translateX(-4.44956px);
            }

            77% {
            -o-transform: translateY(13.475px) translateX(-4.46386px);
            }

            78% {
            -o-transform: translateY(13.65px) translateX(-4.46197px);
            }

            79% {
            -o-transform: translateY(13.825px) translateX(-4.44358px);
            }

            80% {
            -o-transform: translateY(14px) translateX(-4.40839px);
            }

            81% {
            -o-transform: translateY(14.175px) translateX(-4.35615px);
            }

            82% {
            -o-transform: translateY(14.35px) translateX(-4.28661px);
            }

            83% {
            -o-transform: translateY(14.525px) translateX(-4.19959px);
            }

            84% {
            -o-transform: translateY(14.7px) translateX(-4.09491px);
            }

            85% {
            -o-transform: translateY(14.875px) translateX(-3.97242px);
            }

            86% {
            -o-transform: translateY(15.05px) translateX(-3.83201px);
            }

            87% {
            -o-transform: translateY(15.225px) translateX(-3.67362px);
            }

            88% {
            -o-transform: translateY(15.4px) translateX(-3.49718px);
            }

            89% {
            -o-transform: translateY(15.575px) translateX(-3.30269px);
            }

            90% {
            -o-transform: translateY(15.75px) translateX(-3.09017px);
            }

            91% {
            -o-transform: translateY(15.925px) translateX(-2.85966px);
            }

            92% {
            -o-transform: translateY(16.1px) translateX(-2.61124px);
            }

            93% {
            -o-transform: translateY(16.275px) translateX(-2.34504px);
            }

            94% {
            -o-transform: translateY(16.45px) translateX(-2.06119px);
            }

            95% {
            -o-transform: translateY(16.625px) translateX(-1.75989px);
            }

            96% {
            -o-transform: translateY(16.8px) translateX(-1.44133px);
            }

            97% {
            -o-transform: translateY(16.975px) translateX(-1.10577px);
            }

            98% {
            -o-transform: translateY(17.15px) translateX(-0.75349px);
            }

            99% {
            -o-transform: translateY(17.325px) translateX(-0.38478px);
            }

            100% {
            -o-transform: translateY(17.5px) translateX(0.0px);
            }
        }

        @keyframes snowFall {
            0% {
            transform: translateY(0px) translateX(0px);
            }

            1% {
            transform: translateY(0.175px) translateX(0.38478px);
            }

            2% {
            transform: translateY(0.35px) translateX(0.75349px);
            }

            3% {
            transform: translateY(0.525px) translateX(1.10577px);
            }

            4% {
            transform: translateY(0.7px) translateX(1.44133px);
            }

            5% {
            transform: translateY(0.875px) translateX(1.75989px);
            }

            6% {
            transform: translateY(1.05px) translateX(2.06119px);
            }

            7% {
            transform: translateY(1.225px) translateX(2.34504px);
            }

            8% {
            transform: translateY(1.4px) translateX(2.61124px);
            }

            9% {
            transform: translateY(1.575px) translateX(2.85966px);
            }

            10% {
            transform: translateY(1.75px) translateX(3.09017px);
            }

            11% {
            transform: translateY(1.925px) translateX(3.30269px);
            }

            12% {
            transform: translateY(2.1px) translateX(3.49718px);
            }

            13% {
            transform: translateY(2.275px) translateX(3.67362px);
            }

            14% {
            transform: translateY(2.45px) translateX(3.83201px);
            }

            15% {
            transform: translateY(2.625px) translateX(3.97242px);
            }

            16% {
            transform: translateY(2.8px) translateX(4.09491px);
            }

            17% {
            transform: translateY(2.975px) translateX(4.19959px);
            }

            18% {
            transform: translateY(3.15px) translateX(4.28661px);
            }

            19% {
            transform: translateY(3.325px) translateX(4.35615px);
            }

            20% {
            transform: translateY(3.5px) translateX(4.40839px);
            }

            21% {
            transform: translateY(3.675px) translateX(4.44358px);
            }

            22% {
            transform: translateY(3.85px) translateX(4.46197px);
            }

            23% {
            transform: translateY(4.025px) translateX(4.46386px);
            }

            24% {
            transform: translateY(4.2px) translateX(4.44956px);
            }

            25% {
            transform: translateY(4.375px) translateX(4.41942px);
            }

            26% {
            transform: translateY(4.55px) translateX(4.37381px);
            }

            27% {
            transform: translateY(4.725px) translateX(4.31314px);
            }

            28% {
            transform: translateY(4.9px) translateX(4.23782px);
            }

            29% {
            transform: translateY(5.075px) translateX(4.14831px);
            }

            30% {
            transform: translateY(5.25px) translateX(4.04508px);
            }

            31% {
            transform: translateY(5.425px) translateX(3.92863px);
            }

            32% {
            transform: translateY(5.6px) translateX(3.79948px);
            }

            33% {
            transform: translateY(5.775px) translateX(3.65815px);
            }

            34% {
            transform: translateY(5.95px) translateX(3.50523px);
            }

            35% {
            transform: translateY(6.125px) translateX(3.34127px);
            }

            36% {
            transform: translateY(6.3px) translateX(3.16689px);
            }

            37% {
            transform: translateY(6.475px) translateX(2.9827px);
            }

            38% {
            transform: translateY(6.65px) translateX(2.78933px);
            }

            39% {
            transform: translateY(6.825px) translateX(2.58742px);
            }

            40% {
            transform: translateY(7px) translateX(2.37764px);
            }

            41% {
            transform: translateY(7.175px) translateX(2.16066px);
            }

            42% {
            transform: translateY(7.35px) translateX(1.93717px);
            }

            43% {
            transform: translateY(7.525px) translateX(1.70785px);
            }

            44% {
            transform: translateY(7.7px) translateX(1.47343px);
            }

            45% {
            transform: translateY(7.875px) translateX(1.23461px);
            }

            46% {
            transform: translateY(8.05px) translateX(0.99211px);
            }

            47% {
            transform: translateY(8.225px) translateX(0.74667px);
            }

            48% {
            transform: translateY(8.4px) translateX(0.49901px);
            }

            49% {
            transform: translateY(8.575px) translateX(0.24988px);
            }

            50% {
            transform: translateY(8.75px) translateX(0px);
            }

            51% {
            transform: translateY(8.925px) translateX(-0.24988px);
            }

            52% {
            transform: translateY(9.1px) translateX(-0.49901px);
            }

            53% {
            transform: translateY(9.275px) translateX(-0.74667px);
            }

            54% {
            transform: translateY(9.45px) translateX(-0.99211px);
            }

            55% {
            transform: translateY(9.625px) translateX(-1.23461px);
            }

            56% {
            transform: translateY(9.8px) translateX(-1.47343px);
            }

            57% {
            transform: translateY(9.975px) translateX(-1.70785px);
            }

            58% {
            transform: translateY(10.15px) translateX(-1.93717px);
            }

            59% {
            transform: translateY(10.325px) translateX(-2.16066px);
            }

            60% {
            transform: translateY(10.5px) translateX(-2.37764px);
            }

            61% {
            transform: translateY(10.675px) translateX(-2.58742px);
            }

            62% {
            transform: translateY(10.85px) translateX(-2.78933px);
            }

            63% {
            transform: translateY(11.025px) translateX(-2.9827px);
            }

            64% {
            transform: translateY(11.2px) translateX(-3.16689px);
            }

            65% {
            transform: translateY(11.375px) translateX(-3.34127px);
            }

            66% {
            transform: translateY(11.55px) translateX(-3.50523px);
            }

            67% {
            transform: translateY(11.725px) translateX(-3.65815px);
            }

            68% {
            transform: translateY(11.9px) translateX(-3.79948px);
            }

            69% {
            transform: translateY(12.075px) translateX(-3.92863px);
            }

            70% {
            transform: translateY(12.25px) translateX(-4.04508px);
            }

            71% {
            transform: translateY(12.425px) translateX(-4.14831px);
            }

            72% {
            transform: translateY(12.6px) translateX(-4.23782px);
            }

            73% {
            transform: translateY(12.775px) translateX(-4.31314px);
            }

            74% {
            transform: translateY(12.95px) translateX(-4.37381px);
            }

            75% {
            transform: translateY(13.125px) translateX(-4.41942px);
            }

            76% {
            transform: translateY(13.3px) translateX(-4.44956px);
            }

            77% {
            transform: translateY(13.475px) translateX(-4.46386px);
            }

            78% {
            transform: translateY(13.65px) translateX(-4.46197px);
            }

            79% {
            transform: translateY(13.825px) translateX(-4.44358px);
            }

            80% {
            transform: translateY(14px) translateX(-4.40839px);
            }

            81% {
            transform: translateY(14.175px) translateX(-4.35615px);
            }

            82% {
            transform: translateY(14.35px) translateX(-4.28661px);
            }

            83% {
            transform: translateY(14.525px) translateX(-4.19959px);
            }

            84% {
            transform: translateY(14.7px) translateX(-4.09491px);
            }

            85% {
            transform: translateY(14.875px) translateX(-3.97242px);
            }

            86% {
            transform: translateY(15.05px) translateX(-3.83201px);
            }

            87% {
            transform: translateY(15.225px) translateX(-3.67362px);
            }

            88% {
            transform: translateY(15.4px) translateX(-3.49718px);
            }

            89% {
            transform: translateY(15.575px) translateX(-3.30269px);
            }

            90% {
            transform: translateY(15.75px) translateX(-3.09017px);
            }

            91% {
            transform: translateY(15.925px) translateX(-2.85966px);
            }

            92% {
            transform: translateY(16.1px) translateX(-2.61124px);
            }

            93% {
            transform: translateY(16.275px) translateX(-2.34504px);
            }

            94% {
            transform: translateY(16.45px) translateX(-2.06119px);
            }

            95% {
            transform: translateY(16.625px) translateX(-1.75989px);
            }

            96% {
            transform: translateY(16.8px) translateX(-1.44133px);
            }

            97% {
            transform: translateY(16.975px) translateX(-1.10577px);
            }

            98% {
            transform: translateY(17.15px) translateX(-0.75349px);
            }

            99% {
            transform: translateY(17.325px) translateX(-0.38478px);
            }

            100% {
            transform: translateY(17.5px) translateX(0.0px);
            }
        }

        @-webkit-keyframes snowFall2 {
            0% {
            -webkit-transform: translateY(0px) translateX(0px);
            }

            1% {
            -webkit-transform: translateY(0.175px) translateX(-0.38478px);
            }

            2% {
            -webkit-transform: translateY(0.35px) translateX(-0.75349px);
            }

            3% {
            -webkit-transform: translateY(0.525px) translateX(-1.10577px);
            }

            4% {
            -webkit-transform: translateY(0.7px) translateX(-1.44133px);
            }

            5% {
            -webkit-transform: translateY(0.875px) translateX(-1.75989px);
            }

            6% {
            -webkit-transform: translateY(1.05px) translateX(-2.06119px);
            }

            7% {
            -webkit-transform: translateY(1.225px) translateX(-2.34504px);
            }

            8% {
            -webkit-transform: translateY(1.4px) translateX(-2.61124px);
            }

            9% {
            -webkit-transform: translateY(1.575px) translateX(-2.85966px);
            }

            10% {
            -webkit-transform: translateY(1.75px) translateX(-3.09017px);
            }

            11% {
            -webkit-transform: translateY(1.925px) translateX(-3.30269px);
            }

            12% {
            -webkit-transform: translateY(2.1px) translateX(-3.49718px);
            }

            13% {
            -webkit-transform: translateY(2.275px) translateX(-3.67362px);
            }

            14% {
            -webkit-transform: translateY(2.45px) translateX(-3.83201px);
            }

            15% {
            -webkit-transform: translateY(2.625px) translateX(-3.97242px);
            }

            16% {
            -webkit-transform: translateY(2.8px) translateX(-4.09491px);
            }

            17% {
            -webkit-transform: translateY(2.975px) translateX(-4.19959px);
            }

            18% {
            -webkit-transform: translateY(3.15px) translateX(-4.28661px);
            }

            19% {
            -webkit-transform: translateY(3.325px) translateX(-4.35615px);
            }

            20% {
            -webkit-transform: translateY(3.5px) translateX(-4.40839px);
            }

            21% {
            -webkit-transform: translateY(3.675px) translateX(-4.44358px);
            }

            22% {
            -webkit-transform: translateY(3.85px) translateX(-4.46197px);
            }

            23% {
            -webkit-transform: translateY(4.025px) translateX(-4.46386px);
            }

            24% {
            -webkit-transform: translateY(4.2px) translateX(-4.44956px);
            }

            25% {
            -webkit-transform: translateY(4.375px) translateX(-4.41942px);
            }

            26% {
            -webkit-transform: translateY(4.55px) translateX(-4.37381px);
            }

            27% {
            -webkit-transform: translateY(4.725px) translateX(-4.31314px);
            }

            28% {
            -webkit-transform: translateY(4.9px) translateX(-4.23782px);
            }

            29% {
            -webkit-transform: translateY(5.075px) translateX(-4.14831px);
            }

            30% {
            -webkit-transform: translateY(5.25px) translateX(-4.04508px);
            }

            31% {
            -webkit-transform: translateY(5.425px) translateX(-3.92863px);
            }

            32% {
            -webkit-transform: translateY(5.6px) translateX(-3.79948px);
            }

            33% {
            -webkit-transform: translateY(5.775px) translateX(-3.65815px);
            }

            34% {
            -webkit-transform: translateY(5.95px) translateX(-3.50523px);
            }

            35% {
            -webkit-transform: translateY(6.125px) translateX(-3.34127px);
            }

            36% {
            -webkit-transform: translateY(6.3px) translateX(-3.16689px);
            }

            37% {
            -webkit-transform: translateY(6.475px) translateX(-2.9827px);
            }

            38% {
            -webkit-transform: translateY(6.65px) translateX(-2.78933px);
            }

            39% {
            -webkit-transform: translateY(6.825px) translateX(-2.58742px);
            }

            40% {
            -webkit-transform: translateY(7px) translateX(-2.37764px);
            }

            41% {
            -webkit-transform: translateY(7.175px) translateX(-2.16066px);
            }

            42% {
            -webkit-transform: translateY(7.35px) translateX(-1.93717px);
            }

            43% {
            -webkit-transform: translateY(7.525px) translateX(-1.70785px);
            }

            44% {
            -webkit-transform: translateY(7.7px) translateX(-1.47343px);
            }

            45% {
            -webkit-transform: translateY(7.875px) translateX(-1.23461px);
            }

            46% {
            -webkit-transform: translateY(8.05px) translateX(-0.99211px);
            }

            47% {
            -webkit-transform: translateY(8.225px) translateX(-0.74667px);
            }

            48% {
            -webkit-transform: translateY(8.4px) translateX(-0.49901px);
            }

            49% {
            -webkit-transform: translateY(8.575px) translateX(-0.24988px);
            }

            50% {
            -webkit-transform: translateY(8.75px) translateX(0px);
            }

            51% {
            -webkit-transform: translateY(8.925px) translateX(0.24988px);
            }

            52% {
            -webkit-transform: translateY(9.1px) translateX(0.49901px);
            }

            53% {
            -webkit-transform: translateY(9.275px) translateX(0.74667px);
            }

            54% {
            -webkit-transform: translateY(9.45px) translateX(0.99211px);
            }

            55% {
            -webkit-transform: translateY(9.625px) translateX(1.23461px);
            }

            56% {
            -webkit-transform: translateY(9.8px) translateX(1.47343px);
            }

            57% {
            -webkit-transform: translateY(9.975px) translateX(1.70785px);
            }

            58% {
            -webkit-transform: translateY(10.15px) translateX(1.93717px);
            }

            59% {
            -webkit-transform: translateY(10.325px) translateX(2.16066px);
            }

            60% {
            -webkit-transform: translateY(10.5px) translateX(2.37764px);
            }

            61% {
            -webkit-transform: translateY(10.675px) translateX(2.58742px);
            }

            62% {
            -webkit-transform: translateY(10.85px) translateX(2.78933px);
            }

            63% {
            -webkit-transform: translateY(11.025px) translateX(2.9827px);
            }

            64% {
            -webkit-transform: translateY(11.2px) translateX(3.16689px);
            }

            65% {
            -webkit-transform: translateY(11.375px) translateX(3.34127px);
            }

            66% {
            -webkit-transform: translateY(11.55px) translateX(3.50523px);
            }

            67% {
            -webkit-transform: translateY(11.725px) translateX(3.65815px);
            }

            68% {
            -webkit-transform: translateY(11.9px) translateX(3.79948px);
            }

            69% {
            -webkit-transform: translateY(12.075px) translateX(3.92863px);
            }

            70% {
            -webkit-transform: translateY(12.25px) translateX(4.04508px);
            }

            71% {
            -webkit-transform: translateY(12.425px) translateX(4.14831px);
            }

            72% {
            -webkit-transform: translateY(12.6px) translateX(4.23782px);
            }

            73% {
            -webkit-transform: translateY(12.775px) translateX(4.31314px);
            }

            74% {
            -webkit-transform: translateY(12.95px) translateX(4.37381px);
            }

            75% {
            -webkit-transform: translateY(13.125px) translateX(4.41942px);
            }

            76% {
            -webkit-transform: translateY(13.3px) translateX(4.44956px);
            }

            77% {
            -webkit-transform: translateY(13.475px) translateX(4.46386px);
            }

            78% {
            -webkit-transform: translateY(13.65px) translateX(4.46197px);
            }

            79% {
            -webkit-transform: translateY(13.825px) translateX(4.44358px);
            }

            80% {
            -webkit-transform: translateY(14px) translateX(4.40839px);
            }

            81% {
            -webkit-transform: translateY(14.175px) translateX(4.35615px);
            }

            82% {
            -webkit-transform: translateY(14.35px) translateX(4.28661px);
            }

            83% {
            -webkit-transform: translateY(14.525px) translateX(4.19959px);
            }

            84% {
            -webkit-transform: translateY(14.7px) translateX(4.09491px);
            }

            85% {
            -webkit-transform: translateY(14.875px) translateX(3.97242px);
            }

            86% {
            -webkit-transform: translateY(15.05px) translateX(3.83201px);
            }

            87% {
            -webkit-transform: translateY(15.225px) translateX(3.67362px);
            }

            88% {
            -webkit-transform: translateY(15.4px) translateX(3.49718px);
            }

            89% {
            -webkit-transform: translateY(15.575px) translateX(3.30269px);
            }

            90% {
            -webkit-transform: translateY(15.75px) translateX(3.09017px);
            }

            91% {
            -webkit-transform: translateY(15.925px) translateX(2.85966px);
            }

            92% {
            -webkit-transform: translateY(16.1px) translateX(2.61124px);
            }

            93% {
            -webkit-transform: translateY(16.275px) translateX(2.34504px);
            }

            94% {
            -webkit-transform: translateY(16.45px) translateX(2.06119px);
            }

            95% {
            -webkit-transform: translateY(16.625px) translateX(1.75989px);
            }

            96% {
            -webkit-transform: translateY(16.8px) translateX(1.44133px);
            }

            97% {
            -webkit-transform: translateY(16.975px) translateX(1.10577px);
            }

            98% {
            -webkit-transform: translateY(17.15px) translateX(0.75349px);
            }

            99% {
            -webkit-transform: translateY(17.325px) translateX(0.38478px);
            }

            100% {
            -webkit-transform: translateY(17.5px) translateX(0.0px);
            }
        }

        @-moz-keyframes snowFall2 {
            0% {
            -moz-transform: translateY(0px) translateX(0px);
            }

            1% {
            -moz-transform: translateY(0.175px) translateX(-0.38478px);
            }

            2% {
            -moz-transform: translateY(0.35px) translateX(-0.75349px);
            }

            3% {
            -moz-transform: translateY(0.525px) translateX(-1.10577px);
            }

            4% {
            -moz-transform: translateY(0.7px) translateX(-1.44133px);
            }

            5% {
            -moz-transform: translateY(0.875px) translateX(-1.75989px);
            }

            6% {
            -moz-transform: translateY(1.05px) translateX(-2.06119px);
            }

            7% {
            -moz-transform: translateY(1.225px) translateX(-2.34504px);
            }

            8% {
            -moz-transform: translateY(1.4px) translateX(-2.61124px);
            }

            9% {
            -moz-transform: translateY(1.575px) translateX(-2.85966px);
            }

            10% {
            -moz-transform: translateY(1.75px) translateX(-3.09017px);
            }

            11% {
            -moz-transform: translateY(1.925px) translateX(-3.30269px);
            }

            12% {
            -moz-transform: translateY(2.1px) translateX(-3.49718px);
            }

            13% {
            -moz-transform: translateY(2.275px) translateX(-3.67362px);
            }

            14% {
            -moz-transform: translateY(2.45px) translateX(-3.83201px);
            }

            15% {
            -moz-transform: translateY(2.625px) translateX(-3.97242px);
            }

            16% {
            -moz-transform: translateY(2.8px) translateX(-4.09491px);
            }

            17% {
            -moz-transform: translateY(2.975px) translateX(-4.19959px);
            }

            18% {
            -moz-transform: translateY(3.15px) translateX(-4.28661px);
            }

            19% {
            -moz-transform: translateY(3.325px) translateX(-4.35615px);
            }

            20% {
            -moz-transform: translateY(3.5px) translateX(-4.40839px);
            }

            21% {
            -moz-transform: translateY(3.675px) translateX(-4.44358px);
            }

            22% {
            -moz-transform: translateY(3.85px) translateX(-4.46197px);
            }

            23% {
            -moz-transform: translateY(4.025px) translateX(-4.46386px);
            }

            24% {
            -moz-transform: translateY(4.2px) translateX(-4.44956px);
            }

            25% {
            -moz-transform: translateY(4.375px) translateX(-4.41942px);
            }

            26% {
            -moz-transform: translateY(4.55px) translateX(-4.37381px);
            }

            27% {
            -moz-transform: translateY(4.725px) translateX(-4.31314px);
            }

            28% {
            -moz-transform: translateY(4.9px) translateX(-4.23782px);
            }

            29% {
            -moz-transform: translateY(5.075px) translateX(-4.14831px);
            }

            30% {
            -moz-transform: translateY(5.25px) translateX(-4.04508px);
            }

            31% {
            -moz-transform: translateY(5.425px) translateX(-3.92863px);
            }

            32% {
            -moz-transform: translateY(5.6px) translateX(-3.79948px);
            }

            33% {
            -moz-transform: translateY(5.775px) translateX(-3.65815px);
            }

            34% {
            -moz-transform: translateY(5.95px) translateX(-3.50523px);
            }

            35% {
            -moz-transform: translateY(6.125px) translateX(-3.34127px);
            }

            36% {
            -moz-transform: translateY(6.3px) translateX(-3.16689px);
            }

            37% {
            -moz-transform: translateY(6.475px) translateX(-2.9827px);
            }

            38% {
            -moz-transform: translateY(6.65px) translateX(-2.78933px);
            }

            39% {
            -moz-transform: translateY(6.825px) translateX(-2.58742px);
            }

            40% {
            -moz-transform: translateY(7px) translateX(-2.37764px);
            }

            41% {
            -moz-transform: translateY(7.175px) translateX(-2.16066px);
            }

            42% {
            -moz-transform: translateY(7.35px) translateX(-1.93717px);
            }

            43% {
            -moz-transform: translateY(7.525px) translateX(-1.70785px);
            }

            44% {
            -moz-transform: translateY(7.7px) translateX(-1.47343px);
            }

            45% {
            -moz-transform: translateY(7.875px) translateX(-1.23461px);
            }

            46% {
            -moz-transform: translateY(8.05px) translateX(-0.99211px);
            }

            47% {
            -moz-transform: translateY(8.225px) translateX(-0.74667px);
            }

            48% {
            -moz-transform: translateY(8.4px) translateX(-0.49901px);
            }

            49% {
            -moz-transform: translateY(8.575px) translateX(-0.24988px);
            }

            50% {
            -moz-transform: translateY(8.75px) translateX(0px);
            }

            51% {
            -moz-transform: translateY(8.925px) translateX(0.24988px);
            }

            52% {
            -moz-transform: translateY(9.1px) translateX(0.49901px);
            }

            53% {
            -moz-transform: translateY(9.275px) translateX(0.74667px);
            }

            54% {
            -moz-transform: translateY(9.45px) translateX(0.99211px);
            }

            55% {
            -moz-transform: translateY(9.625px) translateX(1.23461px);
            }

            56% {
            -moz-transform: translateY(9.8px) translateX(1.47343px);
            }

            57% {
            -moz-transform: translateY(9.975px) translateX(1.70785px);
            }

            58% {
            -moz-transform: translateY(10.15px) translateX(1.93717px);
            }

            59% {
            -moz-transform: translateY(10.325px) translateX(2.16066px);
            }

            60% {
            -moz-transform: translateY(10.5px) translateX(2.37764px);
            }

            61% {
            -moz-transform: translateY(10.675px) translateX(2.58742px);
            }

            62% {
            -moz-transform: translateY(10.85px) translateX(2.78933px);
            }

            63% {
            -moz-transform: translateY(11.025px) translateX(2.9827px);
            }

            64% {
            -moz-transform: translateY(11.2px) translateX(3.16689px);
            }

            65% {
            -moz-transform: translateY(11.375px) translateX(3.34127px);
            }

            66% {
            -moz-transform: translateY(11.55px) translateX(3.50523px);
            }

            67% {
            -moz-transform: translateY(11.725px) translateX(3.65815px);
            }

            68% {
            -moz-transform: translateY(11.9px) translateX(3.79948px);
            }

            69% {
            -moz-transform: translateY(12.075px) translateX(3.92863px);
            }

            70% {
            -moz-transform: translateY(12.25px) translateX(4.04508px);
            }

            71% {
            -moz-transform: translateY(12.425px) translateX(4.14831px);
            }

            72% {
            -moz-transform: translateY(12.6px) translateX(4.23782px);
            }

            73% {
            -moz-transform: translateY(12.775px) translateX(4.31314px);
            }

            74% {
            -moz-transform: translateY(12.95px) translateX(4.37381px);
            }

            75% {
            -moz-transform: translateY(13.125px) translateX(4.41942px);
            }

            76% {
            -moz-transform: translateY(13.3px) translateX(4.44956px);
            }

            77% {
            -moz-transform: translateY(13.475px) translateX(4.46386px);
            }

            78% {
            -moz-transform: translateY(13.65px) translateX(4.46197px);
            }

            79% {
            -moz-transform: translateY(13.825px) translateX(4.44358px);
            }

            80% {
            -moz-transform: translateY(14px) translateX(4.40839px);
            }

            81% {
            -moz-transform: translateY(14.175px) translateX(4.35615px);
            }

            82% {
            -moz-transform: translateY(14.35px) translateX(4.28661px);
            }

            83% {
            -moz-transform: translateY(14.525px) translateX(4.19959px);
            }

            84% {
            -moz-transform: translateY(14.7px) translateX(4.09491px);
            }

            85% {
            -moz-transform: translateY(14.875px) translateX(3.97242px);
            }

            86% {
            -moz-transform: translateY(15.05px) translateX(3.83201px);
            }

            87% {
            -moz-transform: translateY(15.225px) translateX(3.67362px);
            }

            88% {
            -moz-transform: translateY(15.4px) translateX(3.49718px);
            }

            89% {
            -moz-transform: translateY(15.575px) translateX(3.30269px);
            }

            90% {
            -moz-transform: translateY(15.75px) translateX(3.09017px);
            }

            91% {
            -moz-transform: translateY(15.925px) translateX(2.85966px);
            }

            92% {
            -moz-transform: translateY(16.1px) translateX(2.61124px);
            }

            93% {
            -moz-transform: translateY(16.275px) translateX(2.34504px);
            }

            94% {
            -moz-transform: translateY(16.45px) translateX(2.06119px);
            }

            95% {
            -moz-transform: translateY(16.625px) translateX(1.75989px);
            }

            96% {
            -moz-transform: translateY(16.8px) translateX(1.44133px);
            }

            97% {
            -moz-transform: translateY(16.975px) translateX(1.10577px);
            }

            98% {
            -moz-transform: translateY(17.15px) translateX(0.75349px);
            }

            99% {
            -moz-transform: translateY(17.325px) translateX(0.38478px);
            }

            100% {
            -moz-transform: translateY(17.5px) translateX(0.0px);
            }
        }


        @-o-keyframes snowFall2 {
            0% {
            -o-transform: translateY(0px) translateX(0px);
            }

            1% {
            -o-transform: translateY(0.175px) translateX(-0.38478px);
            }

            2% {
            -o-transform: translateY(0.35px) translateX(-0.75349px);
            }

            3% {
            -o-transform: translateY(0.525px) translateX(-1.10577px);
            }

            4% {
            -o-transform: translateY(0.7px) translateX(-1.44133px);
            }

            5% {
            -o-transform: translateY(0.875px) translateX(-1.75989px);
            }

            6% {
            -o-transform: translateY(1.05px) translateX(-2.06119px);
            }

            7% {
            -o-transform: translateY(1.225px) translateX(-2.34504px);
            }

            8% {
            -o-transform: translateY(1.4px) translateX(-2.61124px);
            }

            9% {
            -o-transform: translateY(1.575px) translateX(-2.85966px);
            }

            10% {
            -o-transform: translateY(1.75px) translateX(-3.09017px);
            }

            11% {
            -o-transform: translateY(1.925px) translateX(-3.30269px);
            }

            12% {
            -o-transform: translateY(2.1px) translateX(-3.49718px);
            }

            13% {
            -o-transform: translateY(2.275px) translateX(-3.67362px);
            }

            14% {
            -o-transform: translateY(2.45px) translateX(-3.83201px);
            }

            15% {
            -o-transform: translateY(2.625px) translateX(-3.97242px);
            }

            16% {
            -o-transform: translateY(2.8px) translateX(-4.09491px);
            }

            17% {
            -o-transform: translateY(2.975px) translateX(-4.19959px);
            }

            18% {
            -o-transform: translateY(3.15px) translateX(-4.28661px);
            }

            19% {
            -o-transform: translateY(3.325px) translateX(-4.35615px);
            }

            20% {
            -o-transform: translateY(3.5px) translateX(-4.40839px);
            }

            21% {
            -o-transform: translateY(3.675px) translateX(-4.44358px);
            }

            22% {
            -o-transform: translateY(3.85px) translateX(-4.46197px);
            }

            23% {
            -o-transform: translateY(4.025px) translateX(-4.46386px);
            }

            24% {
            -o-transform: translateY(4.2px) translateX(-4.44956px);
            }

            25% {
            -o-transform: translateY(4.375px) translateX(-4.41942px);
            }

            26% {
            -o-transform: translateY(4.55px) translateX(-4.37381px);
            }

            27% {
            -o-transform: translateY(4.725px) translateX(-4.31314px);
            }

            28% {
            -o-transform: translateY(4.9px) translateX(-4.23782px);
            }

            29% {
            -o-transform: translateY(5.075px) translateX(-4.14831px);
            }

            30% {
            -o-transform: translateY(5.25px) translateX(-4.04508px);
            }

            31% {
            -o-transform: translateY(5.425px) translateX(-3.92863px);
            }

            32% {
            -o-transform: translateY(5.6px) translateX(-3.79948px);
            }

            33% {
            -o-transform: translateY(5.775px) translateX(-3.65815px);
            }

            34% {
            -o-transform: translateY(5.95px) translateX(-3.50523px);
            }

            35% {
            -o-transform: translateY(6.125px) translateX(-3.34127px);
            }

            36% {
            -o-transform: translateY(6.3px) translateX(-3.16689px);
            }

            37% {
            -o-transform: translateY(6.475px) translateX(-2.9827px);
            }

            38% {
            -o-transform: translateY(6.65px) translateX(-2.78933px);
            }

            39% {
            -o-transform: translateY(6.825px) translateX(-2.58742px);
            }

            40% {
            -o-transform: translateY(7px) translateX(-2.37764px);
            }

            41% {
            -o-transform: translateY(7.175px) translateX(-2.16066px);
            }

            42% {
            -o-transform: translateY(7.35px) translateX(-1.93717px);
            }

            43% {
            -o-transform: translateY(7.525px) translateX(-1.70785px);
            }

            44% {
            -o-transform: translateY(7.7px) translateX(-1.47343px);
            }

            45% {
            -o-transform: translateY(7.875px) translateX(-1.23461px);
            }

            46% {
            -o-transform: translateY(8.05px) translateX(-0.99211px);
            }

            47% {
            -o-transform: translateY(8.225px) translateX(-0.74667px);
            }

            48% {
            -o-transform: translateY(8.4px) translateX(-0.49901px);
            }

            49% {
            -o-transform: translateY(8.575px) translateX(-0.24988px);
            }

            50% {
            -o-transform: translateY(8.75px) translateX(0px);
            }

            51% {
            -o-transform: translateY(8.925px) translateX(0.24988px);
            }

            52% {
            -o-transform: translateY(9.1px) translateX(0.49901px);
            }

            53% {
            -o-transform: translateY(9.275px) translateX(0.74667px);
            }

            54% {
            -o-transform: translateY(9.45px) translateX(0.99211px);
            }

            55% {
            -o-transform: translateY(9.625px) translateX(1.23461px);
            }

            56% {
            -o-transform: translateY(9.8px) translateX(1.47343px);
            }

            57% {
            -o-transform: translateY(9.975px) translateX(1.70785px);
            }

            58% {
            -o-transform: translateY(10.15px) translateX(1.93717px);
            }

            59% {
            -o-transform: translateY(10.325px) translateX(2.16066px);
            }

            60% {
            -o-transform: translateY(10.5px) translateX(2.37764px);
            }

            61% {
            -o-transform: translateY(10.675px) translateX(2.58742px);
            }

            62% {
            -o-transform: translateY(10.85px) translateX(2.78933px);
            }

            63% {
            -o-transform: translateY(11.025px) translateX(2.9827px);
            }

            64% {
            -o-transform: translateY(11.2px) translateX(3.16689px);
            }

            65% {
            -o-transform: translateY(11.375px) translateX(3.34127px);
            }

            66% {
            -o-transform: translateY(11.55px) translateX(3.50523px);
            }

            67% {
            -o-transform: translateY(11.725px) translateX(3.65815px);
            }

            68% {
            -o-transform: translateY(11.9px) translateX(3.79948px);
            }

            69% {
            -o-transform: translateY(12.075px) translateX(3.92863px);
            }

            70% {
            -o-transform: translateY(12.25px) translateX(4.04508px);
            }

            71% {
            -o-transform: translateY(12.425px) translateX(4.14831px);
            }

            72% {
            -o-transform: translateY(12.6px) translateX(4.23782px);
            }

            73% {
            -o-transform: translateY(12.775px) translateX(4.31314px);
            }

            74% {
            -o-transform: translateY(12.95px) translateX(4.37381px);
            }

            75% {
            -o-transform: translateY(13.125px) translateX(4.41942px);
            }

            76% {
            -o-transform: translateY(13.3px) translateX(4.44956px);
            }

            77% {
            -o-transform: translateY(13.475px) translateX(4.46386px);
            }

            78% {
            -o-transform: translateY(13.65px) translateX(4.46197px);
            }

            79% {
            -o-transform: translateY(13.825px) translateX(4.44358px);
            }

            80% {
            -o-transform: translateY(14px) translateX(4.40839px);
            }

            81% {
            -o-transform: translateY(14.175px) translateX(4.35615px);
            }

            82% {
            -o-transform: translateY(14.35px) translateX(4.28661px);
            }

            83% {
            -o-transform: translateY(14.525px) translateX(4.19959px);
            }

            84% {
            -o-transform: translateY(14.7px) translateX(4.09491px);
            }

            85% {
            -o-transform: translateY(14.875px) translateX(3.97242px);
            }

            86% {
            -o-transform: translateY(15.05px) translateX(3.83201px);
            }

            87% {
            -o-transform: translateY(15.225px) translateX(3.67362px);
            }

            88% {
            -o-transform: translateY(15.4px) translateX(3.49718px);
            }

            89% {
            -o-transform: translateY(15.575px) translateX(3.30269px);
            }

            90% {
            -o-transform: translateY(15.75px) translateX(3.09017px);
            }

            91% {
            -o-transform: translateY(15.925px) translateX(2.85966px);
            }

            92% {
            -o-transform: translateY(16.1px) translateX(2.61124px);
            }

            93% {
            -o-transform: translateY(16.275px) translateX(2.34504px);
            }

            94% {
            -o-transform: translateY(16.45px) translateX(2.06119px);
            }

            95% {
            -o-transform: translateY(16.625px) translateX(1.75989px);
            }

            96% {
            -o-transform: translateY(16.8px) translateX(1.44133px);
            }

            97% {
            -o-transform: translateY(16.975px) translateX(1.10577px);
            }

            98% {
            -o-transform: translateY(17.15px) translateX(0.75349px);
            }

            99% {
            -o-transform: translateY(17.325px) translateX(0.38478px);
            }

            100% {
            -o-transform: translateY(17.5px) translateX(0.0px);
            }
        }

        @keyframes snowFall2 {
            0% {
            transform: translateY(0px) translateX(0px);
            }

            1% {
            transform: translateY(0.175px) translateX(-0.38478px);
            }

            2% {
            transform: translateY(0.35px) translateX(-0.75349px);
            }

            3% {
            transform: translateY(0.525px) translateX(-1.10577px);
            }

            4% {
            transform: translateY(0.7px) translateX(-1.44133px);
            }

            5% {
            transform: translateY(0.875px) translateX(-1.75989px);
            }

            6% {
            transform: translateY(1.05px) translateX(-2.06119px);
            }

            7% {
            transform: translateY(1.225px) translateX(-2.34504px);
            }

            8% {
            transform: translateY(1.4px) translateX(-2.61124px);
            }

            9% {
            transform: translateY(1.575px) translateX(-2.85966px);
            }

            10% {
            transform: translateY(1.75px) translateX(-3.09017px);
            }

            11% {
            transform: translateY(1.925px) translateX(-3.30269px);
            }

            12% {
            transform: translateY(2.1px) translateX(-3.49718px);
            }

            13% {
            transform: translateY(2.275px) translateX(-3.67362px);
            }

            14% {
            transform: translateY(2.45px) translateX(-3.83201px);
            }

            15% {
            transform: translateY(2.625px) translateX(-3.97242px);
            }

            16% {
            transform: translateY(2.8px) translateX(-4.09491px);
            }

            17% {
            transform: translateY(2.975px) translateX(-4.19959px);
            }

            18% {
            transform: translateY(3.15px) translateX(-4.28661px);
            }

            19% {
            transform: translateY(3.325px) translateX(-4.35615px);
            }

            20% {
            transform: translateY(3.5px) translateX(-4.40839px);
            }

            21% {
            transform: translateY(3.675px) translateX(-4.44358px);
            }

            22% {
            transform: translateY(3.85px) translateX(-4.46197px);
            }

            23% {
            transform: translateY(4.025px) translateX(-4.46386px);
            }

            24% {
            transform: translateY(4.2px) translateX(-4.44956px);
            }

            25% {
            transform: translateY(4.375px) translateX(-4.41942px);
            }

            26% {
            transform: translateY(4.55px) translateX(-4.37381px);
            }

            27% {
            transform: translateY(4.725px) translateX(-4.31314px);
            }

            28% {
            transform: translateY(4.9px) translateX(-4.23782px);
            }

            29% {
            transform: translateY(5.075px) translateX(-4.14831px);
            }

            30% {
            transform: translateY(5.25px) translateX(-4.04508px);
            }

            31% {
            transform: translateY(5.425px) translateX(-3.92863px);
            }

            32% {
            transform: translateY(5.6px) translateX(-3.79948px);
            }

            33% {
            transform: translateY(5.775px) translateX(-3.65815px);
            }

            34% {
            transform: translateY(5.95px) translateX(-3.50523px);
            }

            35% {
            transform: translateY(6.125px) translateX(-3.34127px);
            }

            36% {
            transform: translateY(6.3px) translateX(-3.16689px);
            }

            37% {
            transform: translateY(6.475px) translateX(-2.9827px);
            }

            38% {
            transform: translateY(6.65px) translateX(-2.78933px);
            }

            39% {
            transform: translateY(6.825px) translateX(-2.58742px);
            }

            40% {
            transform: translateY(7px) translateX(-2.37764px);
            }

            41% {
            transform: translateY(7.175px) translateX(-2.16066px);
            }

            42% {
            transform: translateY(7.35px) translateX(-1.93717px);
            }

            43% {
            transform: translateY(7.525px) translateX(-1.70785px);
            }

            44% {
            transform: translateY(7.7px) translateX(-1.47343px);
            }

            45% {
            transform: translateY(7.875px) translateX(-1.23461px);
            }

            46% {
            transform: translateY(8.05px) translateX(-0.99211px);
            }

            47% {
            transform: translateY(8.225px) translateX(-0.74667px);
            }

            48% {
            transform: translateY(8.4px) translateX(-0.49901px);
            }

            49% {
            transform: translateY(8.575px) translateX(-0.24988px);
            }

            50% {
            transform: translateY(8.75px) translateX(0px);
            }

            51% {
            transform: translateY(8.925px) translateX(0.24988px);
            }

            52% {
            transform: translateY(9.1px) translateX(0.49901px);
            }

            53% {
            transform: translateY(9.275px) translateX(0.74667px);
            }

            54% {
            transform: translateY(9.45px) translateX(0.99211px);
            }

            55% {
            transform: translateY(9.625px) translateX(1.23461px);
            }

            56% {
            transform: translateY(9.8px) translateX(1.47343px);
            }

            57% {
            transform: translateY(9.975px) translateX(1.70785px);
            }

            58% {
            transform: translateY(10.15px) translateX(1.93717px);
            }

            59% {
            transform: translateY(10.325px) translateX(2.16066px);
            }

            60% {
            transform: translateY(10.5px) translateX(2.37764px);
            }

            61% {
            transform: translateY(10.675px) translateX(2.58742px);
            }

            62% {
            transform: translateY(10.85px) translateX(2.78933px);
            }

            63% {
            transform: translateY(11.025px) translateX(2.9827px);
            }

            64% {
            transform: translateY(11.2px) translateX(3.16689px);
            }

            65% {
            transform: translateY(11.375px) translateX(3.34127px);
            }

            66% {
            transform: translateY(11.55px) translateX(3.50523px);
            }

            67% {
            transform: translateY(11.725px) translateX(3.65815px);
            }

            68% {
            transform: translateY(11.9px) translateX(3.79948px);
            }

            69% {
            transform: translateY(12.075px) translateX(3.92863px);
            }

            70% {
            transform: translateY(12.25px) translateX(4.04508px);
            }

            71% {
            transform: translateY(12.425px) translateX(4.14831px);
            }

            72% {
            transform: translateY(12.6px) translateX(4.23782px);
            }

            73% {
            transform: translateY(12.775px) translateX(4.31314px);
            }

            74% {
            transform: translateY(12.95px) translateX(4.37381px);
            }

            75% {
            transform: translateY(13.125px) translateX(4.41942px);
            }

            76% {
            transform: translateY(13.3px) translateX(4.44956px);
            }

            77% {
            transform: translateY(13.475px) translateX(4.46386px);
            }

            78% {
            transform: translateY(13.65px) translateX(4.46197px);
            }

            79% {
            transform: translateY(13.825px) translateX(4.44358px);
            }

            80% {
            transform: translateY(14px) translateX(4.40839px);
            }

            81% {
            transform: translateY(14.175px) translateX(4.35615px);
            }

            82% {
            transform: translateY(14.35px) translateX(4.28661px);
            }

            83% {
            transform: translateY(14.525px) translateX(4.19959px);
            }

            84% {
            transform: translateY(14.7px) translateX(4.09491px);
            }

            85% {
            transform: translateY(14.875px) translateX(3.97242px);
            }

            86% {
            transform: translateY(15.05px) translateX(3.83201px);
            }

            87% {
            transform: translateY(15.225px) translateX(3.67362px);
            }

            88% {
            transform: translateY(15.4px) translateX(3.49718px);
            }

            89% {
            transform: translateY(15.575px) translateX(3.30269px);
            }

            90% {
            transform: translateY(15.75px) translateX(3.09017px);
            }

            91% {
            transform: translateY(15.925px) translateX(2.85966px);
            }

            92% {
            transform: translateY(16.1px) translateX(2.61124px);
            }

            93% {
            transform: translateY(16.275px) translateX(2.34504px);
            }

            94% {
            transform: translateY(16.45px) translateX(2.06119px);
            }

            95% {
            transform: translateY(16.625px) translateX(1.75989px);
            }

            96% {
            transform: translateY(16.8px) translateX(1.44133px);
            }

            97% {
            transform: translateY(16.975px) translateX(1.10577px);
            }

            98% {
            transform: translateY(17.15px) translateX(0.75349px);
            }

            99% {
            transform: translateY(17.325px) translateX(0.38478px);
            }

            100% {
            transform: translateY(17.5px) translateX(0.0px);
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

        /* SUN BEHIND CLOUD */

        .climacon_componentWrap-sun_cloud {
              -webkit-animation-name:behindCloudMove,rotate;
              -moz-animation-name:behindCloudMove,rotate;
              -o-animation-name:behindCloudMove,rotate;
              animation-name:behindCloudMove,rotate;
              -webkit-animation-iteration-count:1,infinite;
              -moz-animation-iteration-count:1,infinite;
              -o-animation-iteration-count:1,infinite;
              animation-iteration-count:1,infinite;
              -webkit-animation-timing-function:ease-out,linear;
              -moz-animation-timing-function:ease-out,linear;
              -o-animation-timing-function:ease-out,linear;
              animation-timing-function:ease-out,linear;
              -webkit-animation-delay:0,3s;
              -moz-animation-delay:0,3s;
              -o-animation-delay:0,3s;
              animation-delay:0,3s;
              -webkit-animation-duration:3s,12s;
              -moz-animation-duration:3s,12s;
              -o-animation-duration:3s,12s;
              animation-duration:3s,12s
        }

        .climacon_component-stroke_sunSpoke {
              fill-opacity:0;
              -webkit-animation-name:fillOpacity,scale;
              -moz-animation-name:fillOpacity,scale;
              -o-animation-name:fillOpacity,scale;
              animation-name:fillOpacity,scale;
              -webkit-animation-direction:alternate;
              -moz-animation-direction:alternate;
              -o-animation-direction:alternate;
              animation-direction:alternate;
              -webkit-animation-iteration-count:1,infinite;
              -moz-animation-iteration-count:1,infinite;
              -o-animation-iteration-count:1,infinite;
              animation-iteration-count:1,infinite;
              -webkit-animation-delay:3s,0;
              -moz-animation-delay:3s,0;
              -o-animation-delay:3s,0;
              animation-delay:3s,0;
              -webkit-animation-duration:3s;
              -moz-animation-duration:3s;
              -o-animation-duration:3s;
              animation-duration:3s;
              -webkit-animation-fill-mode:both;
              -moz-animation-fill-mode:both;
              -o-animation-fill-mode:both;
              animation-fill-mode:both
        }

        .climacon_component-stroke_sunSpoke:nth-child(even) {
              -webkit-animation-delay:3s;
              -moz-animation-delay:3s;
              -o-animation-delay:3s;
              animation-delay:3s
        }

        @-webkit-keyframes rotate {
              0% {
                    -webkit-transform:rotate(0)
              }

              100% {
                    -webkit-transform:rotate(360deg)
              }
        }

        @-moz-keyframes rotate {
              0% {
                    -moz-transform:rotate(0)
              }

              100% {
                    -moz-transform:rotate(360deg)
              }
        }

        @-o-keyframes rotate {
              0% {
                    -o-transform:rotate(0)
              }

              100% {
                    -o-transform:rotate(360deg)
              }
        }

        @keyframes rotate {
              0% {
                    transform:rotate(0)
              }

              100% {
                    transform:rotate(360deg)
              }
        }

        @-webkit-keyframes scale {
              0% {
                    -webkit-transform:scale(1,1)
              }

              100% {
                    -webkit-transform:scale(.5,.5)
              }
        }

        @-moz-keyframes scale {
              0% {
                    -moz-transform:scale(1,1)
              }

              100% {
                    -moz-transform:scale(.5,.5)
              }
        }

        @-o-keyframes scale {
              0% {
                    -o-transform:scale(1,1)
              }

              100% {
                    -o-transform:scale(.5,.5)
              }
        }

        @keyframes scale {
              0% {
                    transform:scale(1,1)
              }

              100% {
                    transform:scale(.5,.5)
              }
        }

        @-webkit-keyframes behindCloudMove {
              0% {
                    -webkit-transform:translateX(-1.75px) translateY(1.75px)
              }

              100% {
                    -webkit-transform:translateX(0) translateY(0)
              }
        }

        @-moz-keyframes behindCloudMove {
              0% {
                    -moz-transform:translateX(-1.75px) translateY(1.75px)
              }

              100% {
                    -moz-transform:translateX(0) translateY(0)
              }
        }

        @-o-keyframes behindCloudMove {
              0% {
                    -o-transform:translateX(-1.75px) translateY(1.75px)
              }

              100% {
                    -o-transform:translateX(0) translateY(0)
              }
        }

        @keyframes behindCloudMove {
              0% {
                    transform:translateX(-1.75px) translateY(1.75px)
              }

              100% {
                    transform:translateX(0) translateY(0)
              }
        }

        @-webkit-keyframes fillOpacity {
              0% {
                    fill-opacity:0;
                    stroke-opacity:0
              }

              100% {
                    fill-opacity:1;
                    stroke-opacity:1
              }
        }

        @-moz-keyframes fillOpacity {
              0% {
                    fill-opacity:0;
                    stroke-opacity:0
              }

              100% {
                    fill-opacity:1;
                    stroke-opacity:1
              }
        }

        @-o-keyframes fillOpacity {
              0% {
                    fill-opacity:0;
                    stroke-opacity:0
              }

              100% {
                    fill-opacity:1;
                    stroke-opacity:1
              }
        }

        @keyframes fillOpacity {
              0% {
                    fill-opacity:0;
                    stroke-opacity:0
              }

              100% {
                    fill-opacity:1;
                    stroke-opacity:1
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
        d="M15,15v70h20.947V63.481c-4.778-2.767-8-7.922-8-13.84c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,5.262-3.394,9.723-8.107,11.341V85H85V15H15z"/>
    </clipPath>
    <g class="climacon_iconWrap climacon_iconWrap-cloudSnowSun">
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
                <g class="climacon_wrapperComponent climacon_wrapperComponent-sunBody" clip-path="url(#sunCloudFillClip)">
                    <circle
                    class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                    cx="58.033"
                    cy="41.612"
                    r="11.999"/>
                </g>
            </g>
        </g>
        <g class="climacon_wrapperComponent climacon_wrapperComponent-snow">
            <circle
            class="climacon_component climacon_component-stroke climacon_component-stroke_snow climacon_component-stroke_snow-left"
            cx="42.001"
            cy="59.641"
            r="2"/>
            <circle
            class="climacon_component climacon_component-stroke climacon_component-stroke_snow climacon_component-stroke_snow-middle"
            cx="50.001"
            cy="59.641"
            r="2"/>
            <circle
            class="climacon_component climacon_component-stroke climacon_component-stroke_snow climacon_component-stroke_snow-right"
            cx="57.999"
            cy="59.641"
            r="2"/>
        </g>
        <g class="climacon_wrapperComponent climacon_wrapperComponent-cloud">
            <path
            class="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M63.999,64.943v-4.381c2.39-1.386,3.999-3.963,3.999-6.922c0-4.417-3.581-7.999-7.999-7.999c-1.601,0-3.083,0.48-4.333,1.291c-1.23-5.317-5.974-9.291-11.665-9.291c-6.627,0-11.998,5.373-11.998,12c0,3.549,1.55,6.729,4,8.924v4.916c-4.777-2.769-8-7.922-8-13.84c0-8.836,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c6.627,0,11.999,5.373,11.999,11.999C71.998,58.863,68.654,63.293,63.999,64.943z"/>
        </g>
    </g>
</svg><!-- cloudSnowSun -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudSnowSun = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudSnowSun;
