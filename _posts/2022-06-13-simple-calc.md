---
layout: post
title:  "Calculator"
short_description: "basic calculations"
featured: false
# banner_image: "/assets/images/project_banner_tetris_01.png"


thumbnail_img_webp: "/assets/images/project_thumbnail_java_calc_01.webp"
thumbnail_img_png: "/assets/images/project_thumbnail_java_calc_01.jpg"
github: "https://github.com/boomlich/Calculator"

tags: "java"
categories: game, javascript
collection: projects
tldr: true
tldr_desc: "Learning Java through simple calculator app"
tldr_lang: "Java"
tldr_tools: "VSCode"
---

A basic calculator app! This was my first ever Java project. Probably not the most original "first-time" project, but it helped me transition from only ever programming in python.

{% include download-file.html
    title='Basic Java Calculator' version='1.0.0 / 14.02.23'
    win_zip='/assets/downloads/Basic_Java_Calculator.zip' win_zip_size='29 KB'
    win_jar='/assets/downloads/Basic Java Calculator.jar' win_jar_size='12 KB'
    mac_jar='/assets/downloads/Basic Java Calculator.jar' mac_jar_size='12 KB'
%}

It supports all the basic arithmetic operations and exponents, square roots, and parenthesized expressions.

In addition, it has a number of quality-of-life features, including:

* Remembering the last calculated answer
* Backspace erasing
* Automatically closing opened parenthesized expressions
* Converting incomplete comma expression (`.5` is converted automatically to `0.5`)
* Change of rounding accuracy from 0-10 digits.
