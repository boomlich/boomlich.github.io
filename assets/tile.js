let tiles = document.getElementsByClassName("project-link");
let filter_buttons = document.getElementsByClassName("project-filter");
let active_filter = "";
let selected_button;

for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    const tile_video = tile.querySelector("#myVid");

    console.log(tile_video);

    tile.addEventListener("mouseover", function() {
        tile_video.currentTime = 0;
        tile_video.play();
    });

    tile.addEventListener("mouseleave", function() { 
        tile_video.pause();
    });
}



// Filter tiles

function filter_projects(tag) {
    if (active_filter === tag) {
        reset_filter();
    } else {
        disable_all_buttons();
        active_filter = tag;
        highlight_tag_button(active_filter);
        hide_tiles_without_tag(active_filter);
    }
}

function highlight_tag_button(active_filter) {
    selected_button = document.getElementById("button-" + active_filter);
    selected_button.className = "button project-filter selected-filter";
}

function disable_all_buttons() {
    for (const button of filter_buttons) {
        button.className = "button project-filter disabled-filter";
    }
}

function reset_filter() {
    reset_tiles();
    reset_filter_buttons();
    active_filter = "";
}

function reset_filter_buttons() {
    for (const button of filter_buttons) {
        button.className = "button project-filter";
    }
}

function hide_tiles_without_tag(tag) {
    for (const tile of tiles) {
        tile.classList.remove("hidden");
        const tile_tags = tile.querySelector("#tile-tags").innerHTML.split(/\s+/);

        if (!tile_tags.includes(tag)) {
            tile.classList.add("hidden");
        }
    }
}

function reset_tiles() {
    for (const tile of tiles) {
        tile.classList.remove("hidden");
    }
}