function Button(label) {
    this.label = label;
}

Button.prototype.click = function () {
    console.log(`${this.label} is clicked.`);
};

const btn = new Button('Print');

console.log(Object.getPrototypeOf(btn) === Button.prototype);
console.log(Object.getPrototypeOf(Button));

function FancyButton(label, color) {
    Button.call(this, label);
    this.color = color;
}

FancyButton.prototype = Object.create(Button.prototype);
FancyButton.prototype.constructor = FancyButton;

FancyButton.prototype.glow = function () {
    console.log(`It glows in fancy ${this.color}!`);
};

console.log('----------------------------');
console.log(FancyButton.prototype);

const fancyButton = new FancyButton('Fancy', 'purple');

console.log(btn);
console.log(fancyButton);

btn.click();
fancyButton.click();
fancyButton.glow();

console.log(`fancyButton is instance of FancyButton ${fancyButton instanceof FancyButton}`);
console.log(`fancyButton is instance of Button ${fancyButton instanceof Button}`);