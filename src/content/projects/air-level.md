---
title: Air Level
subtitle: Air quality app for Wear OS
year: 2026
order: 6
featured: false
kind: mobile
device: watch
role: Android Developer
summary: A Wear OS app that shows the air quality (AQI) around you on a Galaxy Watch, with a world city ranking, a tile and a watch-face complication.
outcome: Open source, built with Kotlin and Wear Material 3 for Galaxy Watch.
tags: [Kotlin, Wear OS, Jetpack Compose, Material 3, IQAir API]
links:
  github: https://github.com/dwikyalfira/Air-Level
cover: ../../assets/projects/air-level/home.png
images:
  - ../../assets/projects/air-level/home.png
  - ../../assets/projects/air-level/ranking.png
---

Air Level is a small Wear OS app that shows the air quality where you are, right on your wrist. It is made for the Galaxy Watch and uses Wear Material 3.

## Features

- **Home:** a bezel gauge with the AQI, its category, the data source and when it was measured. Tap to refresh.
- **Location first:** it uses GPS first, and can fall back to an approximate location or a city you choose.
- **World cities:** a ranked list of cities by AQI, with your own location on top.
- **Details:** a summary, health tips, the main pollutant and the weather.
- **Tile and complication:** check the AQI from the watch face without opening the app.

## Notes

- Data comes from the IQAir AirVisual API.
- The refresh interval can be changed in settings to save battery.
