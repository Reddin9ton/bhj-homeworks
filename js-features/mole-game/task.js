
function getHole( index ) {
 return document.getElementById(`hole${index}`);
}
for (let i = 1; i <= 9; i++) {
    getHole( i ).onclick = function () {
    let hole = this;
    let dead = document.getElementById("dead");
    if (hole.className.includes( 'hole_has-mole' )) {
        dead.textContent ++;
    } else {
        let lost = document.getElementById("lost");
        lost.textContent ++;
    };
    if (lost.textContent == 5) {
        alert("Луз");
        lost.textContent = 0;
        dead.textContent = 0;
    } else if (dead.textContent == 10) {
    alert("ПОБЕДА");
    lost.textContent = 0;
    dead.textContent = 0;
}
    }
};
