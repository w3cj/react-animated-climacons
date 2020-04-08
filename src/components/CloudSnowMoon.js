import React from 'react';
import { createUseStyles } from 'react-jss';

const svg = `
<svg
    version="1.1"
    id="cloudSnowMoon"
    class="climacon climacon_cloudSnowMoon"
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

    .climacon_wrapperComponent-moon{

        -webkit-animation-name: wobble;
        -moz-animation-name: wobble;
        -o-animation-name: wobble;
        animation-name: wobble;

        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        -o-animation-timing-function: linear;
        animation-timing-function: linear;
    }

    @-webkit-keyframes wobble{
        0%{
            -webkit-transform: rotate(0);
        }
        25%{
            -webkit-transform: rotate(-15deg);
        }
        50%{
            -webkit-transform: rotate(0);
        }
        75%{
            -webkit-transform: rotate(15deg);
        }
        100%{
            -webkit-transform: rotate(0deg);
        }
    }

    @-moz-keyframes wobble{
        0%{
            -moz-transform: rotate(0);
        }
        25%{
            -moz-transform: rotate(-15deg);
        }
        50%{
            -moz-transform: rotate(0);
        }
        75%{
            -moz-transform: rotate(15deg);
        }
        100%{
            -moz-transform: rotate(0deg);
        }
    }

    @-o-keyframes wobble{
        0%{
            -o-transform: rotate(0);
        }
        25%{
            -o-transform: rotate(-15deg);
        }
        50%{
            -o-transform: rotate(0);
        }
        75%{
            -o-transform: rotate(15deg);
        }
        100%{
            -o-transform: rotate(0deg);
        }
    }

    @keyframes wobble{
        0%{
            transform: rotate(0);
        }
        25%{
            transform: rotate(-15deg);
        }
        50%{
            transform: rotate(0);
        }
        75%{
            transform: rotate(15deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }

    ]]></style>
    <clipPath id="moonCloudFillClip">
        <path
        d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"/>
    </clipPath>
    <clipPath id="cloudFillClip">
        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"/>
    </clipPath>
    <g class="climacon_iconWrap climacon_iconWrap-cloudSnowMoon">
        <g clip-path="url(#cloudFillClip)">
            <g class="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_wrapperComponent-moon_cloud" clip-path="url(#moonCloudFillClip)">
                <path
                class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"/>
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
</svg><!-- cloudSnowMoon -->`;

const useStyles = createUseStyles({
  root: {
    '& svg path,& svg circle,& svg polygon': {
      fill: (props) => props.fill,
      stroke: (props) => props.stroke,
    },
  },
});

const CloudSnowMoon = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default CloudSnowMoon;
