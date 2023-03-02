---
layout: post
title:  "Raycast renderer"
short_description: "rendering engine"
featured: true

thumbnail_img_webp: "/assets/images/project_thumbnail_raycast_01.webp"
thumbnail_img_png: "/assets/images/project_thumbnail_raycast_01.jpg"

thumbnail_video_mp4: "/assets/videoes/projects_thumbnail_video_raycast_01.mp4"
thumbnail_video_webm: "/assets/videoes/projects_thumbnail_video_raycast_01.webm"
tags: "game c++"
github: "https://github.com/boomlich/RayCasterEngine"
categories: game, cpp
collection: projects

tldr: true
tldr_desc: "Raycasting 3D rendering engine"
tldr_lang: "c++"
tldr_tools: "Visual studio, SFML"

---
This project was inspired by a playthrough of the re-released version of the original DOOM games from the 90s on PC. This was one of the first-ever first-person-shooter (FPS) games, with state-of-the-art graphics.

{% include download-file.html
    title='Raycast Renderer' version='1.0.0 / 14.02.23'
    win_zip='/assets/downloads/RaycastRenderer.zip' win_zip_size='108 KB'
%}

The rendering technique is based on a very simple principle. The world consists of a 2D grid. From the players' perspective, the camera casts out a ray for each pixel on the horizontal axis. The length of this ray until the nearest intersection point with a wall tile on the grid, determines the height of the vertical wall. Because the world consists of a 2D grid, checking for collisions with a wall is super fast and efficient.

The project was a fun and insightful introduction to graphics programming and programming in C++.

For further details on how raycasting works, check out the excellent [Lode's computer graphics guide](https://lodev.org/cgtutor/raycasting.html).

### Demo

{% include centered-youtube.html
    id='_S16Ky6ZAug'
    title='Tank Yourself - Full gameplay'
%}
