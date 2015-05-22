var canvas = document.getElementById('mycanvas'),
    context = canvas.getContext('2d');


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
    },
};

var positionToPushTo = 0;

var displaysText = {
    write: function(text, x) {
        context.fillStyle = "black";
        context.fillText(text, x, 130);
    },
    pushToArray: function() {
        if (positionToPushTo < 5) {
            var textToPush = document.getElementById("textInArray").value;
            if (positionToPushTo === 0) {
                makesArray.drawBox(100);
                displaysText.write(textToPush, 120);
            } else if (positionToPushTo === 1) {
                makesArray.drawBox(160);
                displaysText.write(textToPush, 180);
            } else if (positionToPushTo === 2) {
                makesArray.drawBox(220);
                displaysText.write(textToPush, 240);
            } else if (positionToPushTo === 3) {
                makesArray.drawBox(280);
                displaysText.write(textToPush, 300);
            } else if (positionToPushTo === 4) {
                makesArray.drawBox(340);
                displaysText.write(textToPush, 360);
            };
            positionToPushTo++;
            console.log(positionToPushTo);
        } else {
            alert('Sorry, this program is only equipped to handle arrays with up to 5 elements.');
        };
    },
}