---
layout: post
title:  "Personal website"
short_description: "static website"
featured: true
thumbnail_image: "/assets/images/project_thumbnail_pers-website_01.png"
github: "https://github.com/boomlich/TankYourself"
tags: "web javascript"
categories: game, java
collection: projects
---
The current website you are on. It was created display and present my projects. 

This website was built using jekyll static site generator and hosted on github pages. The benefit of choosing jekyll is that 
it is closely integreted with github pages, which offers free website hosting. Another benefit with jekyll is that it allows
me to create static website that are fast to load and easy to maintain and update. 

To add a new project, I only have to make a new markdown file and jekyll generates a new static HTML document for that post with all the layout and style as specified by
the theme.

### Running the project display with javascript

For displaying the project cards, custom javascript logic was written. This includes the tag-filtering, allowing the user
to only display the projects with the desired tag. Also, the video playback when the mouse hovers over a tile was custom javascript.

### Building an resume with json

Another perk of using jekyll, is that is handels json files with ease. Through its liquid templating language I was able
to easely turn data into a complete resume. 

Here is an example of one of the json for one an entry in my resume:
``` json
{
    "start":"Aug 2022",
    "end":"Present",
    "title":"Teaching assistant",
    "description":"Leading group sessions and teach students",
    "vacancy":"Part-time",
    "company":"University of Bergen",
    "company_logo":"/assets/images/resume/resume_logo_uib.svg",
    "industry":"Education"
}
```
This results in the following resume-panel:

{% assign entry=site.data.resume.work[0] %}
{% include resume-panel.html 
    start=entry.start end=entry.end title=entry.title description=entry.description vacancy=entry.vacancy
    company=entry.company company_logo=entry.company_logo industry=entry.industry %}

