---
layout: post
title:  "Pathfinder"
short_description: "algorithm visualization"
featured: true

thumbnail_img_webp: "/assets/images/project_thumbnail_pathfinder_01.webp"
thumbnail_img_png: "/assets/images/project_thumbnail_pathfinder_01.png"


thumbnail_video_mp4: "/assets/videoes/projects_thumbnail_video_pathfinder_01.mp4"
thumbnail_video_webm: "/assets/videoes/projects_thumbnail_video_pathfinder_01.webm"

github: "https://github.com/boomlich/PathFinder-visualisation"
tags: "algorithm java"
categories: algorithms, java
collection: projects

tldr: true
tldr_desc: "Program for vizualising pathfinding and maze-generation algorithms"
tldr_lang: "Java"
tldr_tools: "IntelliJ"
---

I created this program to learn more about algorithms and how to implement them, specifically maze-generation and pathfinding algorithms.

{% include download-file.html 
    title='PathFinder' version='1.0.0 / 16.07.22'
    win_installer='https://dl.dropboxusercontent.com/s/04z3f6ag45nqj3z/PathFinderSetup.exe?dl=0' win_installer_size='86 MB'
    win_zip='https://dl.dropboxusercontent.com/s/r7ckkx5qtgnvil7/PathFinder.zip?dl=0' win_zip_size='114 MB'
%}

### Demo
{% include centered-youtube.html url='https://www.youtube.com/embed/Zphj52OKH6s' %}


## Maze-generation algorithms
For generating mazes, four unique algorithms are available.

All the algorithms produce perfect mazes, which means there are no loops and all mazes are solvable. Most of these algorithms are based on [spanning tree-algorithms](https://en.wikipedia.org/wiki/Minimum_spanning_tree){:target="_blank"} used in graph theory.

### Randomized depth first search

Random DFS algorithm can be implemented both recursively and iteratively. I've chosen an iterative approach for my implementation.

<center>
    <video class="in-article-video" autoplay muted playsinline loop>
        <source src="/assets/videoes/articles/project_article_pathfinder_DFS_01.mp4" type="video/mp4">
        <source src="/assets/videoes/articles/project_article_pathfinder_DFS_01.webm" type="video/webm">
    </video>
</center>

### Randomized Kruskal

<center>
    <video class="in-article-video" autoplay muted playsinline loop>
        <source src="/assets/videoes/articles/project_article_pathfinder_kruskals_01.mp4" type="video/mp4">
        <source src="/assets/videoes/articles/project_article_pathfinder_kruskals_01.webm" type="video/webm">
    </video>
</center>

### Randomized Prim

<center>
    <video class="in-article-video" autoplay muted playsinline loop>
        <source src="/assets/videoes/articles/project_article_pathfinder_prim_01.mp4" type="video/mp4">
        <source src="/assets/videoes/articles/project_article_pathfinder_prim_01.webm" type="video/webm">
    </video>
</center>

### Recurisve Division

<center>
    <video class="in-article-video" autoplay muted playsinline loop>
        <source src="/assets/videoes/articles/project_article_pathfinder_division_01.mp4" type="video/mp4">
        <source src="/assets/videoes/articles/project_article_pathfinder_division_01.webm" type="video/webm">
    </video>
</center>

Source: [Wikipedia: Maze generation algorithm](https://en.wikipedia.org/wiki/Maze_generation_algorithm){:target="_blank"}


## Pathfinding algorithms

There are two available pathfinding algorithms.

### 1. Dijkstra



### 2. A*
A* is an extended algorithm of Dijkstra's. It adds a heuristic value that helps to determine
the optimal next cell to visit, often resulting in major performance improvements.