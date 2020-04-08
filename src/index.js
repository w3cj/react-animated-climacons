import Cloud from './components/Cloud';
import CloudDrizzle from './components/CloudDrizzle';
import CloudDrizzleAlt from './components/CloudDrizzleAlt';
import CloudDrizzleAltFill from './components/CloudDrizzleAltFill';
import CloudDrizzleFill from './components/CloudDrizzleFill';
import CloudDrizzleMoon from './components/CloudDrizzleMoon';
import CloudDrizzleMoonAlt from './components/CloudDrizzleMoonAlt';
import CloudDrizzleMoonAltFill from './components/CloudDrizzleMoonAltFill';
import CloudDrizzleMoonFill from './components/CloudDrizzleMoonFill';
import CloudDrizzleSun from './components/CloudDrizzleSun';
import CloudDrizzleSunAlt from './components/CloudDrizzleSunAlt';
import CloudDrizzleSunAltFill from './components/CloudDrizzleSunAltFill';
import CloudDrizzleSunFill from './components/CloudDrizzleSunFill';
import CloudFill from './components/CloudFill';
import CloudFog from './components/CloudFog';
import CloudFogAlt from './components/CloudFogAlt';
import CloudFogAltFill from './components/CloudFogAltFill';
import CloudFogFill from './components/CloudFogFill';
import CloudFogMoon from './components/CloudFogMoon';
import CloudFogMoonAlt from './components/CloudFogMoonAlt';
import CloudFogMoonAltFill from './components/CloudFogMoonAltFill';
import CloudFogMoonFill from './components/CloudFogMoonFill';
import CloudFogSun from './components/CloudFogSun';
import CloudFogSunAlt from './components/CloudFogSunAlt';
import CloudFogSunAltFill from './components/CloudFogSunAltFill';
import CloudFogSunFill from './components/CloudFogSunFill';
import CloudHailAlt from './components/CloudHailAlt';
import CloudHailAltFill from './components/CloudHailAltFill';
import CloudHailAltMoon from './components/CloudHailAltMoon';
import CloudHailAltMoonFill from './components/CloudHailAltMoonFill';
import CloudHailAltSun from './components/CloudHailAltSun';
import CloudHailAltSunFill from './components/CloudHailAltSunFill';
import CloudLightning from './components/CloudLightning';
import CloudLightningFill from './components/CloudLightningFill';
import CloudLightningMoon from './components/CloudLightningMoon';
import CloudLightningMoonFill from './components/CloudLightningMoonFill';
import CloudLightningSun from './components/CloudLightningSun';
import CloudLightningSunFill from './components/CloudLightningSunFill';
import CloudMoon from './components/CloudMoon';
import CloudMoonFill from './components/CloudMoonFill';
import CloudRain from './components/CloudRain';
import CloudRainAlt from './components/CloudRainAlt';
import CloudRainAltFill from './components/CloudRainAltFill';
import CloudRainFill from './components/CloudRainFill';
import CloudRainMoon from './components/CloudRainMoon';
import CloudRainMoonAlt from './components/CloudRainMoonAlt';
import CloudRainMoonAltFill from './components/CloudRainMoonAltFill';
import CloudRainMoonFill from './components/CloudRainMoonFill';
import CloudRainSun from './components/CloudRainSun';
import CloudRainSunAlt from './components/CloudRainSunAlt';
import CloudRainSunAltFill from './components/CloudRainSunAltFill';
import CloudRainSunFill from './components/CloudRainSunFill';
import CloudSnow from './components/CloudSnow';
import CloudSnowAlt from './components/CloudSnowAlt';
import CloudSnowAltFill from './components/CloudSnowAltFill';
import CloudSnowFill from './components/CloudSnowFill';
import CloudSnowMoon from './components/CloudSnowMoon';
import CloudSnowMoonAlt from './components/CloudSnowMoonAlt';
import CloudSnowMoonAltFill from './components/CloudSnowMoonAltFill';
import CloudSnowMoonFill from './components/CloudSnowMoonFill';
import CloudSnowSun from './components/CloudSnowSun';
import CloudSnowSunAlt from './components/CloudSnowSunAlt';
import CloudSnowSunAltFill from './components/CloudSnowSunAltFill';
import CloudSnowSunFill from './components/CloudSnowSunFill';
import CloudSun from './components/CloudSun';
import CloudSunFill from './components/CloudSunFill';
import Moon from './components/Moon';
import MoonFill from './components/MoonFill';
import MoonPhase from './components/MoonPhase';
import MoonPhaseFull from './components/MoonPhaseFull';
import Snowflake from './components/Snowflake';
import SnowflakeFill from './components/SnowflakeFill';
import Sun from './components/Sun';
import SunFill from './components/SunFill';
import Sunrise from './components/Sunrise';
import SunriseAlt from './components/SunriseAlt';
import SunriseAltFill from './components/SunriseAltFill';
import SunriseFill from './components/SunriseFill';
import Sunset from './components/Sunset';
import SunsetAlt from './components/SunsetAlt';
import SunsetAltFill from './components/SunsetAltFill';
import SunsetFill from './components/SunsetFill';
import Thermometer0 from './components/Thermometer0';
import Thermometer100 from './components/Thermometer100';
import Thermometer25 from './components/Thermometer25';
import Thermometer50 from './components/Thermometer50';
import Thermometer75 from './components/Thermometer75';
import Tornado from './components/Tornado';
import Wind from './components/Wind';

const OpenWeatherMapCodes = {
  day: {
    200: CloudLightningSun,
    201: CloudLightningSun,
    202: CloudLightningSun,
    210: CloudLightningSun,
    211: CloudLightningSun,
    212: CloudLightningSun,
    221: CloudLightningSun,
    230: CloudLightningSun,
    231: CloudLightningSun,
    232: CloudLightningSun,
    300: CloudDrizzleSun,
    301: CloudDrizzleSun,
    302: CloudDrizzleSun,
    310: CloudDrizzleSun,
    311: CloudDrizzleSun,
    312: CloudDrizzleSun,
    313: CloudDrizzleSun,
    314: CloudDrizzleSun,
    321: CloudDrizzleSun,
    500: CloudRainSun,
    501: CloudRainSun,
    502: CloudRainSun,
    503: CloudRainSun,
    504: CloudRainSun,
    511: CloudHailAltSun,
    520: CloudRainSunAlt,
    521: CloudRainSunAlt,
    522: CloudRainSunAlt,
    531: CloudRainSunAlt,
    600: CloudSnowSun,
    601: CloudSnowSunAlt,
    602: CloudSnowSunAlt,
    611: CloudHailAltSun,
    612: CloudHailAltSun,
    615: CloudHailAltSun,
    616: CloudHailAltSun,
    620: CloudSnowSun,
    621: CloudSnowSun,
    622: CloudSnowSunAlt,
    701: CloudFogSun,
    711: CloudFogSunAlt,
    721: CloudFogSun,
    731: Tornado,
    741: CloudFogSun,
    751: CloudFogSunAlt,
    761: CloudFogSunAlt,
    762: CloudFogSunAlt,
    771: CloudFogSunAlt,
    781: Tornado,
    800: Sun,
    801: CloudSun,
    802: CloudSun,
    803: CloudSun,
    804: CloudSun,
  },
  night: {
    200: CloudLightningMoon,
    201: CloudLightningMoon,
    202: CloudLightningMoon,
    210: CloudLightningMoon,
    211: CloudLightningMoon,
    212: CloudLightningMoon,
    221: CloudLightningMoon,
    230: CloudLightningMoon,
    231: CloudLightningMoon,
    232: CloudLightningMoon,
    300: CloudDrizzleMoon,
    301: CloudDrizzleMoon,
    302: CloudDrizzleMoon,
    310: CloudDrizzleMoon,
    311: CloudDrizzleMoon,
    312: CloudDrizzleMoon,
    313: CloudDrizzleMoon,
    314: CloudDrizzleMoon,
    321: CloudDrizzleMoon,
    500: CloudRainMoon,
    501: CloudRainMoon,
    502: CloudRainMoon,
    503: CloudRainMoon,
    504: CloudRainMoon,
    511: CloudHailAltMoon,
    520: CloudRainMoonAlt,
    521: CloudRainMoonAlt,
    522: CloudRainMoonAlt,
    531: CloudRainMoonAlt,
    600: CloudSnowMoon,
    601: CloudSnowMoonAlt,
    602: CloudSnowMoonAlt,
    611: CloudHailAltMoon,
    612: CloudHailAltMoon,
    615: CloudHailAltMoon,
    616: CloudHailAltMoon,
    620: CloudSnowMoon,
    621: CloudSnowMoon,
    622: CloudSnowMoonAlt,
    701: CloudFogMoon,
    711: CloudFogMoonAlt,
    721: CloudFogMoon,
    731: Tornado,
    741: CloudFogMoon,
    751: CloudFogMoonAlt,
    761: CloudFogMoonAlt,
    762: CloudFogMoonAlt,
    771: CloudFogMoonAlt,
    781: Tornado,
    800: Moon,
    801: CloudMoon,
    802: CloudMoon,
    803: CloudMoon,
    804: CloudMoon,
  },
};

export {
  OpenWeatherMapCodes,
  Cloud,
  CloudDrizzle,
  CloudDrizzleAlt,
  CloudDrizzleAltFill,
  CloudDrizzleFill,
  CloudDrizzleMoon,
  CloudDrizzleMoonAlt,
  CloudDrizzleMoonAltFill,
  CloudDrizzleMoonFill,
  CloudDrizzleSun,
  CloudDrizzleSunAlt,
  CloudDrizzleSunAltFill,
  CloudDrizzleSunFill,
  CloudFill,
  CloudFog,
  CloudFogAlt,
  CloudFogAltFill,
  CloudFogFill,
  CloudFogMoon,
  CloudFogMoonAlt,
  CloudFogMoonAltFill,
  CloudFogMoonFill,
  CloudFogSun,
  CloudFogSunAlt,
  CloudFogSunAltFill,
  CloudFogSunFill,
  CloudHailAlt,
  CloudHailAltFill,
  CloudHailAltMoon,
  CloudHailAltMoonFill,
  CloudHailAltSun,
  CloudHailAltSunFill,
  CloudLightning,
  CloudLightningFill,
  CloudLightningMoon,
  CloudLightningMoonFill,
  CloudLightningSun,
  CloudLightningSunFill,
  CloudMoon,
  CloudMoonFill,
  CloudRain,
  CloudRainAlt,
  CloudRainAltFill,
  CloudRainFill,
  CloudRainMoon,
  CloudRainMoonAlt,
  CloudRainMoonAltFill,
  CloudRainMoonFill,
  CloudRainSun,
  CloudRainSunAlt,
  CloudRainSunAltFill,
  CloudRainSunFill,
  CloudSnow,
  CloudSnowAlt,
  CloudSnowAltFill,
  CloudSnowFill,
  CloudSnowMoon,
  CloudSnowMoonAlt,
  CloudSnowMoonAltFill,
  CloudSnowMoonFill,
  CloudSnowSun,
  CloudSnowSunAlt,
  CloudSnowSunAltFill,
  CloudSnowSunFill,
  CloudSun,
  CloudSunFill,
  Moon,
  MoonFill,
  MoonPhase,
  MoonPhaseFull,
  Snowflake,
  SnowflakeFill,
  Sun,
  SunFill,
  Sunrise,
  SunriseAlt,
  SunriseAltFill,
  SunriseFill,
  Sunset,
  SunsetAlt,
  SunsetAltFill,
  SunsetFill,
  Thermometer0,
  Thermometer100,
  Thermometer25,
  Thermometer50,
  Thermometer75,
  Tornado,
  Wind,
};
