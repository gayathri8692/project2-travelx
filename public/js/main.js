console.log('app js is connected');
window.onload = function () {        //stack overflow for background change in few sec

    function changeImage() {   
        var BackgroundImg = ["/static/images/ari.jpg",
            "/static/images/hawaii.jpg",
            "/static/images/nyc.jpg",
            "/static/images/sf.jpg"
        ];
        var i = Math.floor((Math.random() * 4));
        //console.log(i);
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 3000);  

}



