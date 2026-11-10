---
title: WiZ Lights
subtitle: WiZ light control for Wear OS
year: 2026
order: 7
featured: false
kind: mobile
role: Android Developer
summary: A Wear OS app to control Philips WiZ bulbs from your watch over local Wi-Fi, with a tile and a watch-face complication.
outcome: Open source, built with Kotlin and Wear Material 3. It works without the internet or the WiZ cloud.
tags: [Kotlin, Wear OS, Jetpack Compose, Material 3, UDP]
links:
  github: https://github.com/dwikyalfira/WizWear
cover: ../../assets/projects/wizwear/home.png
images:
  - ../../assets/projects/wizwear/home.png
  - ../../assets/projects/wizwear/bulb.png
---

WiZ Lights lets you control Philips **WiZ** bulbs from a Wear OS watch. The watch talks to the bulbs directly over your local Wi-Fi, using WiZ's local UDP protocol, so it needs no internet, no WiZ cloud and no Google Home.

## Features

- **Auto discovery:** it finds bulbs with a broadcast, and falls back to a sweep of the network when the router drops broadcasts. Bulbs are tracked by MAC address, so a new DHCP lease is found again.
- **Per-bulb controls:** colour controls only show on RGB bulbs, and the scene list only shows scenes the bulb can play.
- **Brightness and temperature:** a stepper with the crown or bezel and haptic ticks.
- **Tile and complication:** switch the light, change brightness or pick warm and cool from the watch face.

## Notes

- Wear OS normally sends traffic through the phone's Bluetooth proxy, which never reaches the local network. The app asks for the Wi-Fi network explicitly and binds its sockets to it.
- Wi-Fi is only held while the app is on screen, and briefly after a tile or complication tap, to save battery.
