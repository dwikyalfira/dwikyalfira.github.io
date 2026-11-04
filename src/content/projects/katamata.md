---
title: KataMata
subtitle: Final Thesis Project
year: 2026
order: 2
featured: true
kind: mobile
summary: An Android app for my final thesis that checks eye photos for signs of cataract, using a CNN model that runs on the phone.
outcome: The trained CNN model runs on-device with TensorFlow Lite, so the check works without an internet connection.
tags: [Android (Kotlin), CNN, TensorFlow Lite, UI/UX Design]
links: {}
  # github: https://github.com/<username>/katamata
cover: ../../assets/projects/katamata/2.jpg
images:
  - ../../assets/projects/katamata/1.jpg
  - ../../assets/projects/katamata/2.jpg
  - ../../assets/projects/katamata/4.jpg
  - ../../assets/projects/katamata/3.jpg
---

KataMata is my final thesis project: an Android app that looks at a photo of an eye and checks it for signs of **cataract**.

The model runs on the phone itself, so it can be used in places with a weak internet connection. It's a research project and not a replacement for a doctor; the app says so clearly.

## What I did

- Integrated a trained **CNN** model into a native Kotlin app with **TensorFlow Lite**, so the analysis runs on-device.
- Built a simple flow: pick or take a photo, adjust it, run the check, and see the result with a confidence score and a short note on what to do next.
- Added a few screens explaining cataracts and how the model works.
