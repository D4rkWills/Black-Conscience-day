const dialogs= [];
const texts= {
    ask: false,
    started: false,
    explain: false,
    unfortunately: false,
    legacy: false,
    importance: false,
    tree: false,
    art: false,
    culinary: false,
    language: false,
    dance: false,
    books: false
};
var count= 0;
var finished= false;
var background= {r: "00", g: "00", b: "00"};
//---------------------------------------------------------------------------------------------------------------------
dialogs.push(new Dialog("Black Conscience day", 50, 0, 200, 4));
//---------------------------------------------------------------------------------------------------------------------
const line= function(x1, y1, x2, y2, color="black") {
    context.beginPath()
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle= color;
    context.stroke();
    context.closePath();
};
const image= function(name, x, y, w, h) {
    if (w && h) {
        context.drawImage(images[name], x, y, w, h);
    } else {
        context.drawImage(images[name], x, y);
    };
};
const text= function(txt, size, x, y, duration) {
    dialogs.push(new Dialog(txt, size, x, y, duration));
};
//----------------------------------------------------------------------------------------------------------------------
const update= function() {
    context.clearRect(0, 0, 1000, 500);
    if (count<= 3000) {
        canvas.style.background=`rgb(${background.r}, ${background.g}, ${background.b})`;
        document.body.style.background=`rgb(${background.r}, ${background.g}, ${background.b})`;
        background.r= (Number(background.r) + 0.75).toString();
        background.g= (Number(background.g) + 0.55).toString();
        background.b= (Number(background.b) + 0.05).toString();
    } else if (count>= 5000 && count<= 9000 && !texts.ask) {
        text("How much is it important?", 50, 0, 200, 4);
        texts.ask= true;
    } else if (count>= 10000 && count<= 15000) {
        if (!texts.started) {
            text("Everything started with Zumbi dos Palmares, a Black Resistance Leader!", 25, 0, 10, 5);
            texts.started= true;
        };
        image("zumbi", 200, 50);
    } else if (count>= 15000 && count<= 22000) {
        if (!texts.explain) {
            text("Child of Ganga Zumba, he's leaded one of the biggest Brazil quilombos: the Palmares Quilombo!", 25, 0, 5, 7);
            texts.explain= true;
        };
        image("map", 200, 30);
        image("locate", 665, 215, 20, 30);
    } else if (count>= 22000 && count<= 30000) {
        if (!texts.unfortunately) {
            text("Unfortunately, after a attack against Quilombo, Zumbi dead, but leaving for us a huge legacy!", 25, 0, 10, 7);
            texts.unfortunately= true;
        };
        image("map", 200, 30);
        image("locate", 665, 215, 20, 30);
        line(350, 150, 675, 245, "rgb(200, 50, 50)");
        line(500, 450, 675, 245, "rgb(200, 50, 50)");
        line(320, 240, 675, 245, "rgb(200, 50, 50)");
        line(605, 271, 675, 245, "rgb(200, 50, 50)");
    } else if (count>= 30000 && count<= 40000) {
        if (!texts.legacy) {
            text("<span style='color: white; font-weight: bolder; text-shadow: 2px 2px 5px black;'>He has left for us the motivation and strength to guard our rights, and he showed us how to defend ourselves, as <span style='color: black; text-shadow: 1px 1px 10px white;'>blacks</span>, as people!</span>", 30, 0, 200, 10);
            texts.legacy= true;
        };
        image("strength", 0, 0, 1000, 500);
    } else if (count>= 40000 && count<= 50000) {
        if (!texts.importance) {
            text("For we are not a simple race, we are culture, we are art, we are language; We've built that country!", 30, 0, 200, 10);
            texts.importance= true;
        };
    } else if (count>= 50000 && count<= 60000) {
        if (!texts.tree) {
            text("<span style='text-shadow: 1px 1px 10px white; color: white;'>Our legacy affects greatly the Brazil...</span>", 40, 0, 200, 10);
            texts.tree= true;
        };
        image("tree", 300, 0, 400, 500);
    } else if (count>= 60000 && count<= 65000) {
        if (!texts.art) {
            text("<span style='text-shadow: 1px 1px 10px white; color: white;'>Art!</span>", 40, 0, 250, 5);
            texts.art= true;
        };
        image("art", 0, 0, 1000, 500);
    } else  if (count>= 65000 && count<= 70000) {
        if (!texts.culinary) {
            text("<span style='text-shadow: 1px 1px 10px white; color: white;'>Culinary!</span>", 40, 0, 250, 5);
            texts.culinary= true;
        };
        image("culinary", 0, 0, 1000, 500);
    } else if (count>= 70000 && count<= 75000) {
        if (!texts.language) {
            text("<span style='text-shadow: 1px 1px 10px white; color: white;'>Language!</span>", 40, 0, 250, 5);
            texts.language= true;
        };
        image("language", 0, 0, 1000, 500);
    } else  if (count>= 75000 && count<= 80000) {
        if (!texts.dance) {
            text("<span style='text-shadow: 1px 1px 10px white; color: white;'>Dance!</span>", 40, 0, 250, 5);
            texts.dance= true;
        };
        image("dance", 0, 0, 1000, 500);
    } else  if (count>= 80000 && count<= 85000) {
        if (!texts.books) {
            text("<span style='text-shadow: 1px 1px 10px white; color: black;'>Literature!</span>", 40, 0, 250, 5);
            texts.books= true;
        };
        image("literature", 0, 0, 1000, 500);
    } else if (count>= 85000) {
        text("<span style='font-weight: bolder'><span style='color: white;'>Don't be racist, o</span>ur <span style='color: black;'>strength is your <span style='color: white;'>str</span><span style='color: black;'>ength!</span></span><span>", 30, 0, 200, 0);
        image("person", 0, 0, 1000, 500);
        finished= true;
    }; 
    for (let pos in dialogs) {
        dialogs[pos].update();
        if (dialogs[pos].finished) {
            delete dialogs[pos];
        };
    };
};
//---------------------------------------------------------------------------------------------------------------------
setInterval(() => {
    if (!finished) {
        update();
        count+= 10;
        if (count>= 85020) finished= true;
    };
}, 10);