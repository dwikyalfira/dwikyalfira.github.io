---
title: TPLive
subtitle: TransPadang Bus Tracker
year: 2026
order: 1
featured: true
kind: mobile
summary: An unofficial app for tracking TransPadang buses in real time, with stop timelines, arrival alerts, and a simple trip planner.
outcome: Open source, built with Flutter, and available on Android and the web.
tags: [Flutter, Dart, Riverpod, WebSocket, Kotlin, Material 3]
links:
  live: https://dwikyalfira.github.io/TPLive-Transpadang-Bus-Tracker/
  github: https://github.com/dwikyalfira/TPLive-Transpadang-Bus-Tracker
cover: ../../assets/projects/tplive/home-light.webp
images:
  - ../../assets/projects/tplive/home-light.webp
  - ../../assets/projects/tplive/detail-light.webp
  - ../../assets/projects/tplive/map-light.webp
  - ../../assets/projects/tplive/home-dark.webp
---

TPLive is a small open-source app for tracking **TransPadang** buses (Padang's BRT) in real time. It shows the nearest buses with distance, ETA and destination, and you can follow one bus until it reaches your stop.

## Features

- **Bus list:** live positions over WebSocket, sorted by distance, with a filter per corridor (K1–K6).
- **Stop timeline:** where a bus is along its route, with the current and next stop.
- **Follow a bus:** an Android foreground service (Kotlin) keeps a notification with the next stop and ETA, and reminds you when to get on or off.
- **Trip planner:** direct routes and routes with one transfer between corridors.
- Light/dark theme and Indonesian & English.

## Notes

- Built with Flutter and Riverpod, with the code organised per feature.
- The WebSocket connection reconnects on its own when it drops.
- The public feed has a few quirks (such as swapped latitude/longitude fields), which the app corrects.

TPLive is a personal project and is not affiliated with TransPadang or the Padang City Government.
