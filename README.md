# Introduction

The objective of the project is to build a next generation connected mirror, which will merge the best features of the best existing projects, while adding some very practical tools.

The project will be composed of 2 parts.
The first one, the upper part, will consist of a computer screen, as well as a mirror. The screen will be borderless to minimize the empty space and the mirror will be one-way to avoid fogging while letting the information of the screen pass through and will have polished edges to increase its resistance and to take care of its aesthetic.
The second, the lower part, will be made up of a touch screen tilted towards the user to facilitate its use, two HD speakers to obtain a quality sound and a microphone to be able to listen to the user's orders. Also, the lower block will be designed to be used as a bathroom cabinet, where it will be possible to put your toothbrush, toothpaste holder, deodorant, perfume and day cream.

The whole product will be powered by an electrical outlet, as well as by a RJ45 cable to improve the visual quality and the speed of response.


# What you need

- A Raspberry Pi 4B kit (with at least 4GB of RAM) : [link](https://www.amazon.fr/Raspberry-Affichage-Bluetooth-Alimentation-D%C3%A9coupage/dp/B09HKNNVHD/ref=sr_1_1_sspa?keywords=pi+4+4go&qid=1642610614&sprefix=pi+4+4%2Caps%2C279&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExRzc0SkdMWEE3QkNVJmVuY3J5cHRlZElkPUEwMzA4MTIzTUEySUJONVZWUUMyJmVuY3J5cHRlZEFkSWQ9QTA2NjExNTZLQ0w5UTRGWUZaQlUmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl)
- A custom made mirror (if you're on a budget, you can pick an acrylic mirror which is cheaper, but the mirror will fog up after a shower) : [link](https://www.aladecoupe.com/fr/pmma-miroir-acrylique-plexi/108-miroir-sans-tain.html)
- A 24" display : [link](https://www.cdiscount.com/informatique/ecran-pc/aoc-23-8in-basic-line-1920x1080-24b2xdm/f-107100401-aoc4038986149617.html)
- A 7" touchscreen display : [link](https://www.kubii.fr/ecrans-afficheurs/1131-ecran-tactile-officiel-7-800x480-kubii-640522710829.html)
- 2 speakers : [link](https://www.audiophonics.fr/fr/medium-bas-medium-large-bande/monacor-sp-60-4-haut-parleur-bas-medium-30w-4-ohm-90db-o10cm-p-1198.html)
- A compatible amplifier : [link](https://www.audiophonics.fr/fr/modules-amplificateur/module-amplificateur-avec-controle-de-volume-bluetooth-50-tpa3116d2-2x25w-8-ohm-p-14684.html)
- A USB microphone : [link](https://www.amazon.fr/gp/product/B071171DBP/ref=ppx_yo_dt_b_asin_image_o05_s00?ie=UTF8&psc=1)
- An angled HDMI adapter : [link](https://www.amazon.fr/gp/product/B07G2B9X58/ref=ppx_yo_dt_b_asin_image_o00_s00?ie=UTF8&th=1)
- An electrical transformer (for the amplifier & the 7" touchscreen display) : [link](https://www.amazon.fr/gp/product/B08Q3FHGMD/ref=ppx_yo_dt_b_asin_image_o02_s00?ie=UTF8&psc=1)
- Some silicone : [link](https://www.amazon.fr/gp/product/B07FJLHZPF/ref=ppx_yo_dt_b_asin_image_o02_s00?ie=UTF8&th=1)

# Setup

To start with, you can follow this [steps](https://docs.magicmirror.builders/getting-started/installation.html) in order to install MagicMirror on a Raspberry Pi.

After that, we're gonna install our 1st module : MMM-GoogleAssistant : [link](https://github.com/bugsounet/MMM-GoogleAssistant)
If you enjoy this module, please [make a donation](https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=TTHRH94Y4KL36&source=url) to Bugsounet (the main creator).
Although, after making a donation, you can ask [here](http://forum.bugsounet.fr/topic/651/single-topic-token-for-youtube-module?_=1642612186107) a token in order to be able to use the YouTube features.

At this step, I recommend you to follow [this guide](https://youtu.be/Vo0n13K3I1Y?t=176) (from 2:55 to 6:10), in order to set up Google Assistant and the YouTube API key. Follow it until you registered all tokens.

Now, you can setup all of this as you want, you can activate Spotify, you can download other modules and you can setting up the weather with OpenWeather and even follow you're local newspaper with a RSS Link.

You can refer to my config.js file, but don't just copy/paste it, you need to enter you're own IDs Tokens and API keys.
