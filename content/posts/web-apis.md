---
title: "HTML5 web APIs you might want to know"
description: "Some are just for fun, others have a lot of potential."
date: "2019-03-20"
slug: "/posts/web-apis"
isPublished: true
category: "Javascript"
tags:
  - "Javascript"
template: "post"
---

I'll be presenting this super fun subject tomorrow during a BBL so I might as well write about it to consolidate what I've found.

We'll be talking about Web APIs introduced by HTML5 in the last few years, these will allow you to add new user experiences to your applications in a few lines of code and have a lot of potential. For each API, I'll show how to implement it, its browser support and ideas on how to use them in concrete projects.

<br>

## Page Visibility 👀

This one allows you to know if the page is currently visible to the user by catching the following event:

<img style="max-width: 100%" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/5913262/carbon.png">

As you can see, it's trivial to implement and has rather good browser support:

<img style="max-width: 100%" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/5906929/page-visibility-support.png">

Which makes it ready for production on most applications.

Here's a small [demo](https://christopherkade.com/visibility-api-demo/) I made that shows one use case of this API: whenever you leave the current tab, the video pauses and the favicon changes to reflect that.

I'm sure you already have a thousand other ideas on how to implement this API but here's my two cent:

- Avoid useless operations when the user is tabbed out
- Notify the user via the tab's title when new data is received and not already viewed (just like Messenger & Whatsapp already do)
- Pause a browser game when the user is tabbed out

<br>

## Ambient Light 💡

This one exposes data on the current level of lighting perceived by the user's sensors.

<img style="max-width: 100%" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/5906957/ambient-light-code.png">

The common theme for these APIs is the ease of implementation as you can see. All you have to do is catch the `devicelight` event and get the number of [lux](https://en.wikipedia.org/wiki/Lux) via `e.value` !

It's worth noting that this way of doing it will eventually become deprecated as a [Generic Sensor](https://www.w3.org/TR/2019/WD-generic-sensor-20190307/) API is in the works that will include a multitude of sensor data.  
It will eventually look more like this, where you instanciate the sensor, start it, catch changes to its state and stop it whenever you want:

<img style="max-width: 100%" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/5907037/ambient-light-code-3.png">

Big bummer tho, browser support isn't great as you can see here

<img style="max-width: 100%" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/5907028/ambient-light-browser.png">

Which probably won't be the case for long, once the Generic Sensor API officially has the recommended status.

Here are some ideas on how to use it:

- Adapt your application's contrast based on the current lighting (high amounts of light may make it harder to read certain contrasts)
- Go into dark mode whenever the user is reading at night (even tho I think you should **always** be in dark mode 😛)

<br>

## Online State 📡

Pretty obvious one, it tells us if the user is currently connected to a network. It also allows us to catch network changes like so:

<img style="max-width: 100%" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/5917760/carbon.png">

And its support is very good:

<img style="max-width: 100%" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/5907114/online-state-support.png
">

Here's a tiny [demo](https://codepen.io/christopherkade/pen/MxXdmY) that shows how it can be used.

Use cases include:

- Notifying the user when they aren't logged into a network
- Pulling data when the user is back online after a long while

<br>

## Vibration 📳

Last but not least, this API allows us to make the user's device vibrate.

<img style="max-width: 100%" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/5917802/carbon__1_.png
">

The browser support for this one could be better, but its use cases are almost all centered around mobiles. As you can see most Android browsers support this feature whereas iOS's Safari doesn't.

<img style="max-width: 100%" src="https://s3.amazonaws.com/media-p.slid.es/uploads/986999/images/5907174/vibrate-support.png
">

Here's another [demo](https://codepen.io/christopherkade/pen/eXKPzN) that shows it in use, make sure to try it on a compatible browser.

Implementation ideas include:

- Adding a tactile feedback to form input, where the user could feel a vibration on input a wrong email address for example.
- Adding vibrations to mobile browser games (if there are any)

<br>

## Conclusion

There are many other web APIs that can help you build really fun and unique user experiences. I recommend a website named [What Web Can Do Today](https://whatwebcando.today/) that shows a thorough list of all of them, so make sure to check it out.

Thanks for reading,  
[@christo_kade](https://twitter.com/christo_kade)
