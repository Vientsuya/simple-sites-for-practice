const pickRandomColor = () => {
    const possibleValuesOfHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        randomColor += possibleValuesOfHex[randomIndex];
    }
    return randomColor;
};
const changeSiteBackground = (color) => {
    document.querySelector('.center-box > p').innerText = `Background Color : ${color}`;
    document.querySelector('.main-content').style.backgroundColor = color;
};
window.addEventListener('load', () => {
    changeSiteBackground(pickRandomColor());
});
document.querySelector('.main-btn').addEventListener('click', () => {
    changeSiteBackground(pickRandomColor());
});
//# sourceMappingURL=index.js.map