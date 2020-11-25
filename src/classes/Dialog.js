class Dialog {
    constructor(content, size, x, y, duration) {
        this.dialog= document.createElement("dialog");
        this.x= x;
        this.y= y;
        this.duration= duration;
        this.count= 0;
        this.finished= false;
        this.dialog.className="dialog";
        this.dialog.innerHTML=`<div style="font: normal ${size}pt Arial">${content}</div>`;
        this.render();
        target.appendChild(this.dialog);
        this.dialog.open= true;
        setTimeout(() => this.dialog.style.opacity="1", 500);
    };
    update() {
        if (!this.finished) {
            this.count+= 10;
            this.render();
            if (this.duration!= 0) {
                if (this.count>= this.duration * 1000) {
                    this.finished= true;
                    this.dialog.style.opacity="0";
                    setTimeout(() => target.removeChild(this.dialog), 1000);
                };
            };
        };
    };
    render() {
        this.dialog.style.top= this.y.toString() + "px";
        this.dialog.style.left= this.x.toString() + "px";
    }
};