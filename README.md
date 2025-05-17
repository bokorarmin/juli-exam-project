# Juli Exam Project

This project is a React application built with Vite, TypeScript, and Material-UI (MUI). Using react-leaflet as map library and react-router-dom for routing. The application is designed to be responsive and user-friendly, with a focus on performance and accessibility.
The application is mobile friendly, however most mobile web apps only support one video autoplay at a time, so the app will only autoplay the first video on mobile devices. The app is designed to be used in a web browser, but can also be run as a Progressive Web App (PWA) on mobile devices.
## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
    - [Installing Node.js and npm](#installing-nodejs-and-npm)
        - [Windows](#windows)
        - [macOS](#macos)
    - [Project Setup](#project-setup)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Video Compression](#video-compression)
    - [Installing FFmpeg](#installing-ffmpeg)
    - [Compressing Videos](#compressing-videos)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or newer)
- npm (comes with Node.js)
- FFmpeg (for video compression)

## Installation

### Installing Node.js and npm

#### Windows

1. Download the Node.js installer from [nodejs.org](https://nodejs.org/)
2. Run the installer and follow the installation wizard
3. To verify installation, open Command Prompt and run:
```bash
    node --version
    npm --version
```
#### macOS

1. Using Homebrew (recommended):
```bash
    brew install node
```
Or download the macOS installer from nodejs.org
2. To verify installation, open Terminal and run:
```bash
    node --version
    npm --version
```
## Project Setup

1. Clone the repository or download the project files
2. Navigate to the project directory in your terminal
3. Install dependencies
```bash
    npm install
```
## Developement
```bash
    npm run dev
```
This will start the development server at http://localhost:3000 (configured port).

## Building for Production
```bash
    npm run build
```
The build output will be in the `dist` directory.

### To preview the production build:
```bash
    npm run preview
```

## Video Compression
### Installing FFmpeg
### Windows

1. Download FFmpeg from ffmpeg.org or use a package manager like Chocolatey:
```bash
    choco install ffmpeg
```
2. Add FFmpeg to your PATH if the installer didn't do this automatically

###  macOS

1. using Homebrew:
```bash
    brew install ffmpeg
```

## Compressing Videos
To compress videos to WebM format with VP9 codec (recommended for web):
```bash
    ffmpeg -i input_video.mp4 -c:v libvpx-vp9 -b:v 0 -crf 30 -an -threads 4 output_video.webm
```

### to keep audio
```bash
    ffmpeg -i ./istvan_u_10.mp4 -c:v libvpx-vp9 -b:v 0 -crf 30 -c:a libopus -threads 4 istvan_u_10.webm
```

