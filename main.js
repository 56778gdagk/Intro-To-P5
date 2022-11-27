function preload()
{

}

function setup()
{
    canvas = createCanvas(620,480);
    canvas.position(300,200)
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw()
{
    image(video,135,100,360,340);
    fill(154,205,50);
    stroke(154,205,50);
    rect(85,39,450,30);
    rect(556,61,30,350);
    fill(154,205,50);
    stroke(154,205,50);
    rect(35,63,30,350);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    fill(154,205,50);
    stroke(154,205,50);
    fill(255,0,0);
    stroke(255,0,0);
    circle(570,50,80);
    fill(255,0,0);
    stroke(255,0,0);
    circle(570,450,80);
    fill(154,205,50);
    stroke(154,205,50);
    rect(85,440,450,30);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,450,80);
    tint(tint_color);

}

function take_snapshot()
{
    save('MyIntroToP5.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value ;
}