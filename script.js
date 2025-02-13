let noClickCount = 0;

// 🎵 Sound Setup
var defaultSound = new Audio('defaultSound.mp3');
defaultSound.loop = true;
defaultSound.volume = 0.5;
defaultSound.play().catch(error => console.log('Autoplay blocked:', error));

var FUpageSound = new Audio('FUpageSound.mp3');
FUpageSound.loop = true;
FUpageSound.volume = 0.5;

var yesSound = new Audio('yesSound.mp3');
yesSound.loop = true;
yesSound.volume = 0.5;

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        defaultSound.pause();
        defaultSound.currentTime = 0;
        yesSound.play().catch(error => console.log('Autoplay blocked:', error));
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        noClickCount++;
        var noButton = document.getElementById('no-button');
        var yesButton = document.getElementById('yes-button');
        
        noButton.style.fontWeight = 'bold';
        noButton.style.fontSize = 'inherit';

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
    imageContainer.innerHTML = '';
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
    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.getElementById('image-container').innerHTML = '';

    // 🛡️ Stop all other sounds and play FU page sound
    defaultSound.pause();
    defaultSound.currentTime = 0;
    yesSound.pause();
    yesSound.currentTime = 0;
    FUpageSound.play().catch(error => console.log('Autoplay blocked:', error));

    var imageContainer = document.getElementById('image-container');
    var fuText = document.createElement('p');
    fuText.innerText = 'FUCK YOU';
    fuText.style.fontSize = '15pt';
    fuText.style.fontWeight = 'bold';
    fuText.style.textAlign = 'center';
    imageContainer.appendChild(fuText);
    
    var fuImage = new Image();
    fuImage.src = 'finger.gif';
    fuImage.alt = 'Middle finger';
    fuImage.style.display = 'block';
    fuImage.style.margin = '10px auto'; 
    fuImage.onload = function() {
        imageContainer.appendChild(fuImage);
    };
} 

// Display the cat.gif initially
displayCat();
