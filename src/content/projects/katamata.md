---
title: KataMata
subtitle: Final Thesis Project
year: 2026
order: 2
featured: true
kind: mobile
summary: A native Android app for early detection of eye cataracts, running a trained CNN model fully on-device.
outcome: Integrated a trained CNN model with TensorFlow Lite for fast, privacy-preserving on-device inference — enabling real-time cataract screening without constant internet access.
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

KataMata is my final thesis project: a native Android application focused on **early detection of eye cataracts**.

The work bridges clinical-grade convolutional neural networks with an accessible, on-device mobile flow, so screenings can happen even in low-connectivity settings.

## What I built

- Integrated a trained **CNN** model directly into a native Kotlin app using **TensorFlow Lite**: inference runs on the phone, with no server round-trip.
- A guided flow: pick or take a photo, adjust it, run the analysis, and read the result with a confidence score and next-step advice.
- Educational screens about cataracts and the CNN technology behind the app, plus a clear medical disclaimer.
