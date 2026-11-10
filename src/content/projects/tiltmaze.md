---
title: Tilt Maze
subtitle: Tilt-controlled maze game for Wear OS
year: 2026
order: 8
featured: false
kind: wear
role: Android Developer
summary: A circular maze game for Wear OS where you tilt your wrist to roll a ball into the centre.
outcome: Open source, built with Kotlin and Jetpack Compose, with 15 levels and a progress tile.
tags: [Kotlin, Wear OS, Jetpack Compose, Sensors, Haptics]
links:
  github: https://github.com/dwikyalfira/TiltMaze
cover: ../../assets/projects/tiltmaze/game.png
images:
  - ../../assets/projects/tiltmaze/game.png
  - ../../assets/projects/tiltmaze/levels.png
---

Tilt Maze is a small game made for round watch screens. The maze is a set of rings, and you tilt your wrist to roll the ball through the gaps into the centre.

## Features

- **15 levels** in three worlds, and each world adds two rings. Every level uses a fixed seed, so "Level 7" is the same maze for everyone.
- **Tilt control** from the motion sensors, with a long-press to set the current pose as flat.
- **Stars and best times** saved on the watch, based on a par time for each level.
- **Haptics, zoom and a tile** that shows your progress and jumps into the next maze.
- English and Indonesian.

## Notes

- The maze generator and the physics have unit tests.
