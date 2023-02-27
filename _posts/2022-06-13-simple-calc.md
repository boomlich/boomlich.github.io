---
layout: post
title:  "Calculator"
short_description: "basic calculations"
featured: false
# banner_image: "/assets/images/project_banner_tetris_01.png"


thumbnail_img_webp: "/assets/images/project_thumbnail_java_calc_01.webp"
thumbnail_img_png: "/assets/images/project_thumbnail_java_calc_01.jpg"

tags: "java"
categories: game, javascript
collection: projects
tldr: true
tldr_desc: "Learning Java through simple calculator app"
tldr_lang: "Java"
tldr_tools: "VSCode"
---

A basic calculator app! This was my first ever Java project. Probably not the most original "first-time" project, but it helped me transition from only ever programming in python.

It supports all the basic arithmetic operations and exponents, square roots, and parenthesized expressions.

In addition, it has a number of quality-of-life features, including:

* Remembering the last calculated answer
* Backspace erasing
* Automatically closing opened parenthesized expressions
* Converting incomplete comma expression (`.5` is converted automatically to `0.5`)
* Change of rounding accuracy from 0-10 digits.


{% include download-file.html
    title='PathFinder' version='1.0.0 / 25.03.22'
    win_installer='https://dl.dropboxusercontent.com/s/nt7t4kzxisrm12x/TetrisSetup.exe?dl=0' win_installer_size='86 MB'
    win_zip='https://dl.dropboxusercontent.com/s/otct0uovlw1c9dz/tetris_win.zip?dl=0' win_zip_size='114 MB'
%}

### Demo video

{% include centered-youtube.html
    id='rKOeDma60mQ'
    title='Java Tetris - Demo Gameplay'
%}
