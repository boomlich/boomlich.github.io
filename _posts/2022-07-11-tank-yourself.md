---
layout: post
title:  "Tank Yourself"
short_description: "action game"
featured: true

thumbnail_img_webp: "/assets/images/project_thumbnail_tank-yourself_01.webp"
thumbnail_img_png: "/assets/images/project_thumbnail_tank-yourself_01.png"

thumbnail_video_mp4: "/assets/videoes/projects_thumbnail_video_tank-yourself_01.mp4"
thumbnail_video_webm: "/assets/videoes/projects_thumbnail_video_tank-yourself_01.webm"
tags: "game javascript"
github: "https://github.com/boomlich/TankYourself"
categories: game, javascript
collection: projects

tldr: true
tldr_desc: "A small action game created to learn more about javascript"
tldr_lang: "Javascript, html, css"
tldr_tools: "VScode, p5.js, Adobe Illustrator"

---
Tank yourself is an action game, where you defeat endless waves of enemies, gain points and reach a new high score.

The project is a proof-of-concept, created to learn and explore javascript, and to create a game playable in a browser, as opposed to requiring downloading and running an executable file on a device.

{% include centered-youtube.html 
    id='z5vm-Uw1DkA'
    title='Tank Yourself - Full gameplay'
%}


## How to play
The game is published on itch.io where it can be played for free in a browser. Click the «play on itch.io» below:

<iframe frameborder="0" src="https://itch.io/embed/1600428?dark=true" width="100%" height="167"><a href="https://boomlich.itch.io/tank-yourself">Tank Yourself by boomlich</a></iframe>

### Rules

#### How to spawn enemies?
Enemies spawn in two ways.
- Random: Enemies will randomly spawn. The chance of spawning increases over time.
- Fire at walls: Bullets that hit the wall will spawn an enemy seed, which will travel along the edge to the opposite side of the map, then spawning an enemy corresponding with the bullet damage value. Bullets with 1 damage spawn basic enemies, whilst bullets with 2 damage spawn mega enemies.

#### How to score points?
There are two ways of gaining points:
- Defeating enemies: Defeated enemies grant points equal to the health-value of the enemy. Enemies spawned from a seed grant double points.
- Gaining combo-points: Gaining points in rapid succession builds a combo-meter. When the combo-meter expires, the total gained points during that active combo-meter is multiplied
with the combo-multiplier. Earning 25 points during a x2 combo-meter, you gain 50 points. Recieving any damage cancels the active combo-meter.

#### Game over
You start with 3 health. If an enemy reaches you, you'll take damage equal to the enemy health. When reaching 0 health, it's game over. 

Picking up 15 green coins heals you for 1 health.

#### Types of enemies
There are three types of enemies.
- Basic: 1 health
- Mega: 2 health
- Giga: 3 health

#### Types of bullets
You have two bullets:
- Basic: 1 damage, 2 seconds cooldown
- Mega: 2 damage, 4 seconds cooldown

Your ammo counter is displayed in the bottom middle of the screen.