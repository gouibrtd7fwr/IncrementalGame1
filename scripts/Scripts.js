function addNum() {
    game.number = game.number.add(game.addVal)
}
function update() {
    let diff = Date.now().sub(game.lastUpdate)
    diff = diff.div(1000);
    game.lastUpdate = Date.now();

    document.getElementById("number").textContent = format(game.number, 0)
    document.getElementById("number").textContent = format(game.number, 0)
}
