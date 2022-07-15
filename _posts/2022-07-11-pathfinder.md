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

### Maze-generation algorithms
In the program there are four different available algorithms to choose when generating mazes.

#### 1. Randomized depth first search


Pseudocode:
```
assign stack = []
visit and an choosen initial cell, push to stack

while stack not empty
1. assign current cell = stack.pop
2. If current cell has neighbours that has not been visited:
    1. push current cell to stack
    2. assign selected neighbur to be one of the unvisited neibours
    3. Remove the wall between the current cell and the selected neighbour
    4. Mark selected cell as visited and push it to the stack
```
<center>
    <video class="in-article-video" autoplay muted playsinline loop>
        <source src="/assets/videoes/articles/project_article_pathfinder_DFS_01.mp4" type="video/mp4">
        <source src="/assets/videoes/articles/project_article_pathfinder_DFS_01.webm" type="video/webm">
    </video>
</center>

#### 2. Randomized Kruskal
#### 3. Randomized Prim
#### 4. Recurisve Division


### Pathfinding algorithms

There are two available pathfinding algorithms.

#### 1. Dijkstra



#### 2. A*
A* is an extended algorithm of Dijkstra's. It adds a heuristic value that helps to determine
the optimal next cell to visit, often resulting in major performance improvements.