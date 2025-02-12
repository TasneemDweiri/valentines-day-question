// script.js
let noClickCount = 0;

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        noClickCount++;
        var noButton = document.getElementById('no-button');
        var yesButton = document.getElementById('yes-button');
        
        if (noClickCount === 1) {
            noButton.innerText = 'You sure?';
        } else if (noClickCount === 2) {
            noButton.innerText = 'YOU SURE!!!';
        } else if (noClickCount === 3) {
            displayFU();
            return;
        }
        
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

function displayFU() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    
    var fuText = document.createElement('p');
    fuText.innerHTML = '<b>FUCK YOU</b>';
    fuText.style.fontSize = '2em';
    fuText.style.textAlign = 'center';
    imageContainer.appendChild(fuText);
    
    var fuImage = new Image();
    fuImage.src = 'finger.gif';
    fuImage.alt = 'Fuck you';
    fuImage.onload = function() {
        imageContainer.appendChild(fuImage);
        document.getElementById('options').style.display = 'none';
    };
}

displayCat();

        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();
