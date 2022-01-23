const applyColor = (value: number): void => {
    const counter = <HTMLElement> document.querySelector('.counter-number');

    if (value < 0) {
        counter.style.color = 'red';
    } else if (value > 0) {
        counter.style.color = 'green';
    } else {
        counter.style.color = '#3D3D3D';
    }
}

const manipulateCounter = (action: string): void => {
    const counter = document.querySelector('.counter-number');

    switch (action) {
        case "DECREASE":
            counter.innerHTML = (parseInt(counter.innerHTML) - 1).toString();
            break;
        case "RESET":
            counter.innerHTML = "0";
            break;
        case "INCREASE":
            counter.innerHTML = (parseInt(counter.innerHTML) + 1).toString();
            break;
        default:
            console.log(`wrong action "${action}", manipulateCounter doesnt recognize it`);
            break;
    }

    applyColor(parseInt(counter.innerHTML));
}

document.querySelectorAll('.actions-box > button').forEach(node => {
    node.addEventListener("click", event => {
        manipulateCounter((<HTMLElement>event.target).innerHTML);
    })
});