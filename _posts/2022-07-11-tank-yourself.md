---
layout: post
title:  "Tank Yourself"
short_description: "action game"
featured: true
banner_image: "/assets/images/banner_tank-yourself.png"
thumbnail_image: "/assets/images/banner_tank-yourself.png"
thumbnail_video_mp4: "/assets/videoes/projects_thumbnail_video_tank-yourself_01.mp4"
thumbnail_video_webm: "/assets/videoes/projects_thumbnail_video_tank-yourself_01.webm"
tags: "game javascript"
github: "https://github.com/boomlich/TankYourself"
categories: game, javascript
collection: projects
---
Tank yourself is an action game, where you defeat endless waves of enemies, gain points and reach a new high score.

It was a proof-of-concept, created to learn javascript, and to create a game playable in a browser,
as opposed requiring downloading and running an executable file on a device.

<iframe width="560" height="315" src="https://www.youtube.com/embed/z5vm-Uw1DkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How to play
The game is published on Itch.io where it can be played for free in an browser. Click the «play on itch.io» bellow:

<iframe frameborder="0" src="https://itch.io/embed/1600428?dark=true" width="552" height="167"><a href="https://boomlich.itch.io/tank-yourself">Tank Yourself by boomlich</a></iframe>

### Rules

#### How to spawn enemies?
Enemies spawn in two ways.
- Random: Enemies will randomly spawn. The chance of spawning increases over time.
- Fire at walls: Bullets that hit the wall will spawn an enemy seed, which will travel along the edge to the opposite side of the map, then spawning an enemy corrosponding with the bullet damage value. Bullets with 1 damage spawn basic enemies, whilst bullets with 2 damage spawn mega enemies.

#### How to score points?
There are two ways of gaining points:
- Defeating enemies: Defeated enemies grant points equal to the health-value of the enemy. Enemies spawned from an seed grant double points.
- Gaining combo-points: Gaining points in rapid succession builds a combo-meter. When the combo-meter expires the total gained points during that active combo-meter is mutliplied
with the combo-multiplier. If you gain 25 points during a x2 combo-meter, you gain 50 points. A combo-meter is cancelled if you recieve any damage before it expires.

#### Game over
You start with 3 health. If an enemy reaches you, you'll take damage equal to the enemy health. When you reach 0 health, it's game over. 

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

You ammo-counter is displayed in the bottom-middle of the screen.