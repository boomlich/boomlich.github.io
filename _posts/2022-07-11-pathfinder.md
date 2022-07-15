---
layout: post
title:  "Pathfinder"
short_description: "algorithm visualization"
featured: true
thumbnail_image: "/assets/images/project_thumbnail_pathfinder_01.png"
thumbnail_video_mp4: "/assets/videoes/projects_thumbnail_video_pathfinder_01.mp4"
thumbnail_video_webm: "/assets/videoes/projects_thumbnail_video_pathfinder_01.webm"

github: "https://github.com/boomlich/PathFinder-visualisation"
tags: "algorithm java"
categories: algorithms, java
collection: projects
---

This program was created to learn more about algorithms and how to implement them, specificly maze-generation and pathfinding algorithms.

## How to start program?

To use the program, download the program, open your CLI (terminal/command-line/powershell), navigate to the location of the .jar file, execute the following command:

 `java -jar pathfinder.jar`

<a href="/assets/downloads/ORCATTC.jar" download="ORCATTC.jar"><button class="button">Download program</button></a>

 Requirements:
 - Java



## Maze-generation algorithms
In the program there are four different available algorithms to choose when generating mazes.

All the algorithms produce perfect mazes, which means there is no loops and all mazes are solvable. Most of these algorithms are based of [spanning tree-algorithms](https://en.wikipedia.org/wiki/Minimum_spanning_tree){:target="_blank"} used in graph theory.

### Randomized depth first search

Randomized depth-first search used backtracking. This algorithm can be implemented both recursively and iteratively. I've chosen an iterative approach for my implementation.

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