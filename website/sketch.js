function setup() {
createCanvas(windowWidth, windowHeight);
drawData();

// 전송(submit)은 index.html에서 click 때 처리함.
// 예전처럼 mousePressed(mousedown)에서 보내면 휴대폰에서 첫 탭이 무시됐음
}

function drawData(){
    loadJSON('all', gotData);
}

function gotData(data) {
    background(51);
    console.log(data);
    var keys = Object.keys(data);
    for (var i=0; i<keys.length; i++){
        var word = keys[i];
        var score = data[word];
        var x = random(width);
        var y = random(height);
        fill(255);
        text(word,x,y);
    }
}
