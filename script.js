document.addEventListener("DOMContentLoaded", function() {
    const vidBtns = document.querySelectorAll(".vid-btn");
    const videoSlider = document.getElementById("video-slider");
    let currentVideoIndex = 0;
    const videos = [
        "img/ocean.mp4",
        "img/waves.mp4",
        "img/vid-4.mp4",
        "img/seoul.mp4",
        "img/vid-3.mp4"
    ];

    // Function to switch to the next video
    function switchToNextVideo() {
        currentVideoIndex = (currentVideoIndex ) % videos.length;
        videoSlider.src = videos[currentVideoIndex];

        // Remove active class from all buttons
        vidBtns.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to the corresponding button
        vidBtns[currentVideoIndex].classList.add("active");
    }

    // Event listener for clicking on video buttons
    vidBtns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            currentVideoIndex = index; // Update currentVideoIndex to match the clicked button's index
            switchToNextVideo();
            clearInterval(interval); // Reset interval timer when user manually switches video
        });
    });

    // Set interval to switch videos every 10 seconds
    const interval = setInterval(switchToNextVideo, 10000);
});

const close = document.getElementById('close');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar){
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
}

if(close){
        close.addEventListener('click', () =>{
            nav.classList.remove('active');
        })
}


  document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.getElementById("searchIcon");
    var searchContainer = document.getElementById("searchContainer");
    var searchCloseBtn = document.getElementById("searchCloseBtn");

    searchIcon.addEventListener("click", function() {
        searchContainer.classList.toggle("hidden");
    });

    searchCloseBtn.addEventListener("click", function() {
        searchContainer.classList.add("hidden");
    });
});

document.getElementById('explore-btn').addEventListener('click', function() {
    // Hiển thị các mục bị ẩn
    var hiddenItems = document.querySelectorAll('.pro-container .pro:nth-child(n+5)');
    hiddenItems.forEach(function(item) {
        item.style.display = 'block';
    });

    // Ẩn nút "Explore More" và hiển thị nút "Ẩn đi"
    this.style.display = 'none';
    document.getElementById('hide-btn').style.display = 'inline-block';
});

document.getElementById('hide-btn').addEventListener('click', function() {
    // Ẩn các mục đã hiển thị
    var hiddenItems = document.querySelectorAll('.pro-container .pro:nth-child(n+5)');
    hiddenItems.forEach(function(item) {
        item.style.display = 'none';
    });

    // Hiển thị lại nút "Explore More"
    document.getElementById('explore-btn').style.display = 'inline-block';
    this.style.display = 'none';
});


function redirectToFootballPage() {
    window.location.href = "football.html";
}
// Lấy phần tử biểu tượng người dùng và dropdown menu
const userIcon = document.getElementById('lg-bag');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Xử lý hiển thị dropdown menu khi di chuột vào và ra khỏi biểu tượng người dùng
userIcon.addEventListener('mouseenter', function() {
    dropdownMenu.style.display = 'block';
});

userIcon.addEventListener('mouseleave', function() {
    dropdownMenu.style.display = 'none';
});

dropdownMenu.addEventListener('mouseenter', function() {
    dropdownMenu.style.display = 'block';
});

dropdownMenu.addEventListener('mouseleave', function() {
    dropdownMenu.style.display = 'none';
});
function redirectToShowPage() {
    window.location.href = "Show.html";
}



