---
layout: post
title:  "Raycast renderer"
short_description: "rendering engine"
featured: true

thumbnail_img_webp: "/assets/images/project_thumbnail_raycast_01.webp"
thumbnail_img_png: "/assets/images/project_thumbnail_raycast_01.jpg"

thumbnail_video_mp4: "/assets/videoes/projects_thumbnail_video_tank-yourself_01.mp4"
thumbnail_video_webm: "/assets/videoes/projects_thumbnail_video_tank-yourself_01.webm"
tags: "game c++"
github: "https://github.com/boomlich/RayCasterEngine"
categories: game, cpp
collection: projects

tldr: true
tldr_desc: "Raycasting 3D rendering engine"
tldr_lang: "c++"
tldr_tools: "Visual studio, SFML"

---

This project was inspired by a playthrough of the re-released version of the original DOOM games form the 90's on PC. This was one of the first ever first-person-shooter (FPS) games, with state-of-the-art graphics.

The rendering technique is based of a very simple prinicple. The world consists of a 2D grid. From the players perspectiv, the camera casts out an ray for each pixel on the horizontal axis. The length of this ray until the nearest intersection point with a wall tile on the grid, determines the height of the vertical wall. Because the world consists of a 2D grid, checking for collisions with a wall is super fast and efficient.

The project was a fun and insightful introduction to graphics programming and programming in C++.

For further details on how raycasting works, check out the excellent [Lode's computer graphics guide](https://lodev.org/cgtutor/raycasting.html).

{% include centered-youtube.html
    id='z5vm-Uw1DkA'
    title='Tank Yourself - Full gameplay'
%}
