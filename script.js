var canvas = document.getElementById('mycanvas'),
    context = canvas.getContext('2d');

var isArray = false;
var yourArray = [];

var makesArray = {

    drawBox: function(x) {
        context.fillStyle = '#81EAE4';
        context.fillRect(x, 100, 50, 50);
    },

    modelArray: function(numberOfElements) {

        if (numberOfElements === '1') {
            makesArray.drawBox(100);
        } else if (numberOfElements === '2') {
            makesArray.drawBox(100);
            makesArray.drawBox(160);
        } else if (numberOfElements === '3') {
            makesArray.drawBox(100);
            makesArray.drawBox(160);
            makesArray.drawBox(220);
        } else if (numberOfElements === '4') {
            makesArray.drawBox(100);
            makesArray.drawBox(160);
            makesArray.drawBox(220);
            makesArray.drawBox(280);
        } else if (numberOfElements === '5') {
            makesArray.drawBox(100);
            makesArray.drawBox(160);
            makesArray.drawBox(220);
            makesArray.drawBox(280);
            makesArray.drawBox(340);
        }
    },

    makeArray: function() {
        var numberOfElements = document.getElementById("NUMBER").value;
        makesArray.modelArray(numberOfElements);
        isArray = true;
        console.log(isArray);
    },
};

var positionToPushTo = 0;

var displaysText = {
    write: function(text, x) {
        context.fillStyle = "black";
        context.fillText(text, x, 130);
    },
    pushToArray: function() {
        if (isArray) {
            if (positionToPushTo < 5) {
                var textToPush = document.getElementById("textInArray").value;
                if (positionToPushTo === 0) {
                    makesArray.drawBox(100);
                    displaysText.write(textToPush, 120);
                    yourArray.push(textToPush);
                } else if (positionToPushTo === 1) {
                    makesArray.drawBox(160);
                    displaysText.write(textToPush, 180);
                    yourArray.push(textToPush);
                } else if (positionToPushTo === 2) {
                    makesArray.drawBox(220);
                    displaysText.write(textToPush, 240);
                    yourArray.push(textToPush);
                } else if (positionToPushTo === 3) {
                    makesArray.drawBox(280);
                    displaysText.write(textToPush, 300);
                    yourArray.push(textToPush);
                } else if (positionToPushTo === 4) {
                    makesArray.drawBox(340);
                    displaysText.write(textToPush, 360);
                    yourArray.push(textToPush);
                };
                positionToPushTo++;
                console.log(yourArray);
            } else {
                alert('Sorry, this program is only equipped to handle arrays with up to 5 elements.');
            };
        } else {
            alert('No array to push to!');
        };
    },
}

function viewArray() {
    if (isArray) {
        alert('Your array consists of the following elements: ' + yourArray);
    } else {
        alert('No array to view!');
    };
}