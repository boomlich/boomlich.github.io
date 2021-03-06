// File size

// let file_links = document.getElementsByClassName("file-download-link");

// for (const link of file_links) {
//     let file_size = 0;
//     get_filesize(link.getAttribute("href"), function(size) {
//         if (size > 1000000000) {
//             file_size = Math.round(size / 1000000000) + " GB";
//         } else if (size > 1000000) {
//             file_size = Math.round(size / 1000000) + " MB";
//         } else if (size > 1000) {
//             file_size = Math.round(size / 1000) + " KB";
//         } else {
//             file_size = Math.round(size) + " bytes";
//         }
//         displaySize(link.querySelector("#button-text"), file_size);
//     });
// }

// function displaySize(button, size) {
//     button.innerHTML = button.innerHTML + "<h5>" + size + "</h5>";
// }

// function get_filesize(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("HEAD", url, true);

//     xhr.onreadystatechange = function() {
//         if (this.readyState == this.DONE) {
//             callback(parseInt(xhr.getResponseHeader("Content-Length")));
//         }
//     };
//     xhr.send();
// }



// OS selection
let user_os = "";
if (navigator.userAgent.indexOf("Win")!=-1) user_os="Windows";
if (navigator.userAgent.indexOf("Mac")!=-1) user_os="MacOS";
if (navigator.userAgent.indexOf("X11")!=-1) user_os="UNIX";
if (navigator.userAgent.indexOf("Linux")!=-1) user_os="Linux";


let os_buttons = document.getElementsByClassName("file-download-os-selecter");
let selected_button;
let os_download_panels = document.getElementsByClassName("os-download-panel");


function get_available_os (){
    let available_os = [];
    for (const os of os_buttons) {
        available_os.push(os.id.split("-")[1]);
    }
    return available_os;
}
let available_os = get_available_os();


function set_os_button_active(button) {

    console.log(button.id);

    reset_download_buttons();
    button.classList.add("highlight-text");

    let download_panel = document.getElementById(button.id + "-panel");
    download_panel.classList.remove("hidden");
}

function reset_download_buttons() {
    // disable os selectors
    for (const button of os_buttons) {
        button.classList.remove("highlight-text");
    }

    // Hide download buttons
    for (const panel of os_download_panels) {
        panel.classList.add("hidden");
    }
}

function switch_file_downloads(os) {
    // If there is no version avaiable for the user's OS, pick another valid os to display
    if (!available_os.includes(os)) {
        os = available_os[0];
    }
    set_os_button_active(document.getElementById("os-" + os));
}

switch_file_downloads(user_os);