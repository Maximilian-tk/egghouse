function showTab(event, name) {
    var i, tabcontent, tablinks;

    // Hide all elements with class = "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Show the current tab
    document.getElementById(name).style.display = "block";

    // Make all side buttons inactive
    tablinks = document.getElementsByClassName("left-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Make tab button active
    event.currentTarget.className += " active";
}
