---
title: TPLive
subtitle: TransPadang Bus Tracker
year: 2026
order: 1
featured: true
kind: mobile
summary: A real-time bus tracker for TransPadang, Padang's BRT, with live positions, stop timelines, follow-bus notifications, and a multi-corridor trip planner.
outcome: An open-source Flutter app that turns TransPadang's live WebSocket feed into nearby-bus ETAs, stop-by-stop progress, and transfer-aware trip plans, running on Android and the web.
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

TPLive is an open-source app for tracking **TransPadang** buses, the Bus Rapid Transit of Padang, in **real time**. It lists the buses nearest to you with distance, ETA, and destination, and lets you follow a single bus all the way to your stop.

## Features

- **Live bus list.** Buses stream in over **WebSocket** and are sorted by distance, with ETA and data freshness, filterable by corridor (K1–K6).
- **Stop timeline.** A bus detail sheet shows where the bus is along its route: current and next stop, speed, distance, and trip progress.
- **Follow a bus.** A native Android **foreground service** (Kotlin + OkHttp) keeps an ongoing notification with the next stop and ETA, and alerts you when it's time to board or get off. On Android 16+ this appears as a *live update*.
- **Trip planner.** Computes direct routes and **one-transfer** options between corridors, including short walking transfers between nearby stops, with destination search through Nominatim/OSM.
- **Material You**, light/dark themes, and full **Indonesian & English** localisation.

## Engineering notes

- Feature-based **data → domain → presentation** architecture with **Riverpod** for state.
- A resilient WebSocket client with **auto-reconnect** (exponential backoff + jitter) and a liveness watchdog.
- Corrects quirks in the public feed, such as swapped latitude/longitude fields and WIB timestamps, and estimates the real heading from position history because the server's heading field is noisy.

TPLive is an independent project and is not affiliated with TransPadang or the Padang City Government.
