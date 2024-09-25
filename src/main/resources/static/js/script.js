function openNav() {
    document.getElementById("sidebar").classList.add('sidebarOpen');
    document.getElementById("sidebar").classList.add('');
    document.querySelector(".main-content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").classList.remove('sidebarOpen');
    document.querySelector(".main-content").style.marginLeft = "0";
}
