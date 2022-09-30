export function renderMonster(monster) {
    const li = document.createElement('li');
    li.classList.add('monster', 'card');

    const hp = document.createElement('span');
    hp.classList.add('stat');
    hp.textContent = monster.hp;

    const image = document.createElement('img');
    image.alt = monster.type;
    if (monster.hp < 1) {
        image.src = `assets/ghost-sad.png`;
    } else {
        image.src = `assets/${monster.type}.png`;
    }
    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = monster.name;

    li.append(hp, image, name);
    return li;
}
