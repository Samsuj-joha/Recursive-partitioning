function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createPartition() {
    const partition = document.createElement('div');
    partition.className = 'partition resizable';
    partition.style.backgroundColor = getRandomColor();
    partition.appendChild(createButtons());
    return partition;
}

function createButtons() {
    const container = document.createElement('div');
    container.className = 'partition-buttons';

    const vButton = document.createElement('button');
    vButton.innerText = 'V';
    vButton.onclick = splitVertical;

    const hButton = document.createElement('button');
    hButton.innerText = 'H';
    hButton.onclick = splitHorizontal;

    const removeButton = document.createElement('button');
    removeButton.innerText = '-';
    removeButton.onclick = removePartition;

    container.appendChild(vButton);
    container.appendChild(hButton);
    container.appendChild(removeButton);

    return container;
}

function splitVertical(e) {
    const partition = e.target ? e.target.closest('.partition') : e.closest('.partition');
    const parent = partition.parentElement;
    parent.style.flexDirection = 'row';

    const newPartition = createPartition();

    parent.appendChild(newPartition);
    parent.style.flex = '1';
    partition.style.flex = '1';
    parent.style.display = 'flex';
}

function splitHorizontal(e) {
    const partition = e.target ? e.target.closest('.partition') : e.closest('.partition');
    const parent = partition.parentElement;
    parent.style.flexDirection = 'column';

    const newPartition = createPartition();

    parent.appendChild(newPartition);
    parent.style.flex = '1';
    partition.style.flex = '1';
    parent.style.display = 'flex';
}

function removePartition(e) {
    const partition = e.target ? e.target.closest('.partition') : e.closest('.partition');
    const parent = partition.parentElement;

    if (parent.childElementCount > 1) {
        parent.removeChild(partition);
    } else {
        alert("Cannot remove the last partition.");
    }
}

// Initial partition setup
document.addEventListener('DOMContentLoaded', () => {
    const initialPartition = document.getElementById('container');
    initialPartition.style.backgroundColor = getRandomColor();
});