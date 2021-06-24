let cnt = 0;
const screen = document.getElementsByClassName('in')[0];
const input = () => {
    const log = document.getElementsByClassName("inputbox")[0];
    if (log.value.length > 0) {
        const temp = document.createElement('li');
        temp.setAttribute('id', 'listid' + cnt);
        temp.setAttribute('class', 'listclass');
        temp.innerHTML = log.value;
        temp.innerHTML += `<button class="removebtn" onclick="remove(${cnt})">x</button>`
        screen.appendChild(temp);
        log.value = "";
        cnt += 1;
    }
}
const remove = (n) => {
    console.log(n);
    const list = document.getElementById("listid"+n);0
    screen.removeChild(list);
}