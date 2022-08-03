//  Task 1
// Добавьте в код функции try catch так, чтобы вместо ошибки выводилось в out-1 цифра 1.


function t1() {
    // тут добавляете try
    try {
        let a = 22;
        let c = a + d;
    }
        // тут catch
    catch (error) {
        document.querySelector('.out-1').innerHTML = 1
    }
    finally {
        console.log('была ошибка')
    }

}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-2.

function t2() {
    try {
        let a = 4;
        let b = 5;
        document.querySelector('.out-2222222').innerHTML = a*b;
    }
    catch (error) {
        document.querySelector('.out-2').innerHTML = error
    }
}
document.querySelector('.b-2').onclick = t2;

//  Task 3
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-3. Если его нет - создавайте в коде. 
// т.е. вы не знаете будет или нет он в html.

function t3() {

    const button3 = document.querySelector('.b-3')
    const newDiv = document.createElement('div')
    newDiv.classList.add('out-3')

    const add_new_element = (error) => {
        newDiv.innerHTML = error
        button3.parentNode.insertBefore(newDiv, button3.nextSibling);
    }

    try {
        let a = 4;
        let b = 5;
        document.querySelector('.out-3').innerHTML = a*b;
    }
    catch (error) {
        add_new_element(error)
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Дана переменная a. В переменную делается push. Используя try catch отловите ошибки если они есть. Если ошибка вывести в out-4 число 0. Если не ошибка - то результирующий массив через пробел.

let a = [2,3,4];
// a = 5;

function t4() {

    const outSelector = document.querySelector('.out-4')
    let out = ''

    try {
        a.push(7);
        for (let i = 0; i < a.length; i++) {
            out += a[i] + ' '
        }
        outSelector.textContent = out
    }
    catch (error) {
        outSelector.textContent = 0
    }

}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Добавьте try, catch, finnaly так, чтобы в out-5 выводился 0 при ошибки. А в out-5-1 всегда выводилось слово 'finnaly';

function t5() {

    const out5 = document.querySelector('.out-5')
    const out5_1 = document.querySelector('.out-5-1')

    try {
        let p = document.querySelectorAll('p');
        p.push(3);
    }
    catch (error) {
        out5.textContent = 0
    }
    finally {
        out5_1.textContent = 'finally'
    }
}

document.querySelector('.b-5').onclick = t5;

