# Juli Exam Project

## Compress video to webm format with sound 
```bash
  ffmpeg -i video2.mp4 -c:v libvpx-vp9 -b:v 0 -crf 30 -an -threads 4 video2.webm
```