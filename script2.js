const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");

searchIcon.addEventListener("click", function() {
  searchBar.classList.toggle("active");
});
.about {
    padding: 50px 0;
    background-color: #F4F4F4;
}

.container {
    display: flex;
    align-items: center;
    width: 80%;
    margin: auto;
}

.about-video {
    flex: 1;
}

.about-video video {
    max-width: 100%;
    height: auto;
    display: block;
}

.about-text {
    flex: 1;
}

.about-text h1 {
    font-size: 300%;
}

.about-text p {
    font-family: Bahnschrift Light;
    color: #4A446A;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.5;
}

