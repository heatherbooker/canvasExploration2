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