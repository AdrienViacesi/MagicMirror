/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
  address: "localhost", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out or empty, is "localhost"
  electronOptions: {
    webPreferences: {
      webViewTag: true,
    },
  },
  port: 8080,
  basePath: "/", // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
  // you must set the sub path here. basePath must end with a /
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  useHttps: false, // Support HTTPS or not, default "false" will use HTTP
  httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
  httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

  language: "fr",
  locale: "fr-FR",
  logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
  timeFormat: 24,
  units: "metric",
  // serverOnly:  true/false/"local" ,
  // local for armv6l processors, default
  //   starts serveronly and then starts chrome browser
  // false, default for all NON-armv6l devices
  // true, force serveronly mode, because you want to.. no UI on this device

  modules: [
    {
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar",
    },
    {
      module: "clock",
      position: "top_left",
    },
    {
      module: "calendar",
      header: "Productivité",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check",
            url: "URL",
          },
        ],
      },
    },
    {
      module: "weather",
      position: "top_right",
      config: {
        weatherProvider: "openweathermap",
        type: "current",
        location: "La Rochelle",
        locationID: "3006787",
        apiKey: "API_KEY",
      },
    },
    {
      module: "MMM-Tools",
      position: "top_right",
      config: {
        refresh: "1000 * 5",
      },
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "France Info - Titres",
            url: "https://www.francetvinfo.fr/titres.rss",
          },
          {
            title: "France Info - Sciences",
            url: "https://www.francetvinfo.fr/sciences.rss",
          },
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true,
      },
    },
    {
      module: "MMM-Detector",
      position: "middle_center",
      configDeepMerge: true,
      config: {
        debug: false,
        detectors: [
          {
            detector: "Snowboy",
            Model: "jarvis",
            Sensitivity: null,
            Logo: "google",
            autoRestart: false,
            onDetected: {
              notification: "GA_activate",
            },
          },
          {
            detector: "Porcupine",
            Model: "ok google",
            Sensitivity: null,
            Logo: "google",
            autoRestart: false,
            onDetected: {
              notification: "GA_ACTIVATE",
            },
          },
          {
            detector: "Porcupine",
            Model: "hey google",
            Sensitivity: null,
            Logo: "google",
            autoRestart: false,
            onDetected: {
              notification: "GA_ACTIVATE",
            },
          },
        ],
      },
    },
    {
      module: "MMM-GoogleAssistant",
      position: "middle_center",
      configDeepMerge: true,
      config: {
        debug: false,
        assistantConfig: {
          lang: "fr-FR",
          latitude: 46.177548, //change
          longitude: -1.094101, //change
        },
        responseConfig: {
          useFullscreen: true,
          useResponseOutput: true,
          responseOutputCSS: "response_output.css",
          screenOutputTimer: 5000,
          activateDelay: 250,
          useAudioOutput: true,
          useChime: true,
          confirmationChime: true,
          useInformations: true,
        },
        micConfig: {},
        Extented: {
          useEXT: true,
          deviceName: "MagicMirror",
          stopCommand: "stop",
          youtube: {
            useYoutube: true,
            youtubeCommand: "youtube",
            displayResponse: true,
            useVLC: true,
            minVolume: 30,
            maxVolume: 100,
            username: "USERNAME",
            token: "TOKEN",
          },
          links: {
            useLinks: true,
            displayDelay: 60 * 1000,
            scrollActivate: false,
            scrollStep: 25,
            scrollInterval: 1000,
            scrollStart: 5000,
          },
          photos: {
            usePhotos: false,
            useGooglePhotosAPI: true,
            displayType: "Module",
            displayDelay: 10 * 1000,
            albums: ["Projet prototypage"],
            sort: "new",
            hiResolution: true,
            timeFormat: "DD/MM/YYYY HH:mm",
            moduleHeight: 300,
            moduleWidth: 300,
          },
          welcome: {
            useWelcome: true,
            welcome: "bonjour",
          },
          cast: {
            useCast: true,
            port: 8569,
          },
          spotify: {
            useSpotify: true,
            visual: {
              updateInterval: 1000,
              idleInterval: 10000,
              useBottomBar: false,
              CLIENT_ID: "CLIENT_ID",
              CLIENT_SECRET: "CLIENT_SECRET",
            },
            player: {
              type: "raspotify",
              email: "EMAIL",
              password: "PASSWORD",
              minVolume: 10,
              maxVolume: 90,
              usePause: true,
            },
          },
        },
        recipes: ["ExtSpotify.js"],
        NPMCheck: {},
      },
    },
  ],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
