var MyFrameRate = 60


var textField;
var outputSpan;
var butttton;
var mkSpan;
var canvas;
var clearCanvas;
var ColorIt;

// helper
function sleepms(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}
//=============================

function CreateSpanOfWords() {

    // todo regex.exex()

    // get content from textarea
    var content = textField.value();

    // clear output, coz we don't want 
    // to APPEND our result to
    // something, that was there
    outputSpan.html("");

    //    returns a array of finded words
    var words = content.match(/\w{1,8}/g);

    //                              minus one, coz look 10 lines below
    for (var i = 0; i < words.length - 1; i++) {

        // every word will be in <div>
        var word = createDiv(words[i]);
        word.class("word")

        // event for this word
        word.mouseClicked(TempChangeWord);

        // put in in <span id="outputSpan"></span>
        word.parent(outputSpan);

        // and also append space
        createDiv(" ").parent(outputSpan);

    }

    // this is thesame.
    // i created this, coz i don'n want to append extra createDiv(" ").parent(outputSpan);
    // so that's why i < words.length - 1, and NOT i < words.length
    createDiv(words[words.length - 1]).parent(outputSpan).class("word").mouseClicked(changeWord);
}

function changeWord() {

    // switch css color from rgb(51, 51, 51) 
    //                    to rgb(random(255) * 3)


    if (this.style("color") == "rgb(51, 51, 51)") {


        var new_color = "rgb(" + floor(random(0, 255)) + ", " + floor(random(0, 255)) + ", " + floor(random(0, 255)) + ")";

        // apply this color
        this.style("color", new_color);

    } else {

        // sets it back
        this.style("color", "rgb(51, 51, 51)");

    }
}


async function TempChangeWord(){
    var new_color = "rgb(" + floor(random(0, 255)) + ", " + floor(random(0, 255)) + ", " + floor(random(0, 255)) + ")";

    // apply this color
    this.style("color", new_color);

    await sleepms(1000);

    this.style("color", "rgb(51, 51, 51)");
}

async function ChangeGivenWord(word){
    var new_color = "rgb(" + floor(random(0, 255)) + ", " + floor(random(0, 255)) + ", " + floor(random(0, 255)) + ")";

    // apply this color
    word.style("color", new_color);

    await sleepms(1000);

    word.style("color", "rgb(51, 51, 51)");
}

function ChangeWordsColor() {

    var words = selectAll(".word");

    for (var i = 0; i < words.length; i++) {
        ChangeGivenWord(words[i]);
    }
}

function get_image_with_api(word) {

    // api, that's gives you an image, by a given name


    // TODO api image
    var image = Image()

    image = url()

    return image
}

//===============================================

// Triggered, when window Resized AND
function windowResized(){
    // it resized your canvas WITH NEW (windowWidth, windowHeight), yay
    resizeCanvas(windowWidth, windowHeight);
}

//===============================================
//================  MAIN  =======================
//===============================================

function setup() {

    frameRate(MyFrameRate);
    canvas = createCanvas(windowWidth, windowHeight)

    // it will be at x=0 y=0 of a HOME page.
    canvas.position(0,0)
    
    // canvas will be in background
    canvas.style('z-index', '-1')


    // SELECT-ORS
    textField = select("#textfield");
    butttton = select("#butttton");
    outputSpan = select("#outputSpan");
    mkSpan = select("#mkSpan");
    clearCanvas = select("#clearCanvas")
    ColorIt = select("#ColorItBtn")
    

    // ____binding events to elements____
    mkSpan.mousePressed(CreateSpanOfWords);
    ColorIt.mousePressed(ChangeWordsColor);
    butttton.mousePressed(FuncForDelteing );
    

    var text = 'Welcome to RegExr v2.1 by gskinner.com, proudly hosted by Media Temple!\nEdit the Expression & Text to see matches. Roll over matches or the expression for details. Undo mistakes with ctrl-z. Save Favorites & Share expressions with friends or the Community. Explore your results with Tools. A full Reference & Help is available in the Library, or watch the video Tutorial.\nSample text for testing:\nabcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    

    var r = /([A-Z]{1}[a-z]{1,5})[^\w]?\b/gm

    while( r.exec()){

    }

    console.log("dsadsad")


    // just for fun, i've involked this func,
    // this is done for instant result on a page
    // CreateSpanOfWords();
}

function FuncForDelteing() {
    // console.log("ds");
    $('body').append(" <p>html code here please, vlados</p>")

    // clearing inside of $('#outputSpan')
    
    $('#outputSpan').html("");

}





var scaleCursorX = MyFrameRate;
var scaleCursorY = MyFrameRate;

function my_func(argument) {
    return (cos(argument) + cos(argument)*tan(argument)) / cos(argument/4)
}

function show_cursor() {
    
    var math_func = my_func
    //  or you can use this functions:
    // var math_func = cos
    // var math_func = tan
    // var math_func = floor

    ellipse(mouseX,mouseY+200,
        sin(frameCount/MyFrameRate)*scaleCursorX,
        sin(frameCount/MyFrameRate)*scaleCursorY)
}


function draw() {

    // background is accualy transperent !

    // make background grey
    background(222, 17, 100, 50)

    //                    center ellipse guy
    // his setting
    stroke(0)
    strokeWeight(1)
    // it self
    ellipse(width/2,height/2,my_func(frameCount/MyFrameRate)*scaleCursorX,cos(frameCount/MyFrameRate)*scaleCursorY)
    
    // cursor
    // show_cursor()


    // trail
    stroke(255)
    strokeWeight(6)
    line(pmouseX,pmouseY,mouseX,mouseY)


    // stroke(255,200,200)
    // ellipse(width, heigth, 166, 66)
  
}