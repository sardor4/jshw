let num = +prompt("Какое задание вывести?", 1);
switch (num) {
    case 1: {
        console.log('1 задание\n', ' ');
        let a = +prompt("Введите число");
        let b = +prompt("Введите число");
        function min(fir,sec) {
            if (fir == sec) {
                return console.log(`${fir} и ${sec} равны`);
            }
            return fir < sec ? console.log(`${sec} больше чем ${fir}`) : console.log(`${fir} больше чем ${sec}`); 
        }
        min(a, b);
        break;
    }
    case 2: {
        console.log('2 задание\n', ' ');
        let x = +prompt("Введите число");
        let n = +prompt("Введите степень");
        function shi(num, step) {
            return num ** step;
        }
        shi(x, n);
        console.log(`${x} в степени ${n} равен: ${shi(x, n)}`);
        break;
    }
    case 3: {
        console.log('3 задание\n', ' ');
        let m = +prompt("Введите минимальное число");
        let d = +prompt("Введите максимальное число");
        function nech(m, d) {
            for (let i = m; i <= d; i++) {
                if (i % 2) continue;
                console.log(i);
            }
        }
        nech(m, d);
        break;
    }
    case 4: {
        console.log('4 задание\n', ' ');
        let y = +prompt("Введите начальное число");
        let d = +prompt("Введите конечное число");
        function top(y, d) {
            for (let i = y; i <= d; i++) {
                if (i % 3) continue;
                console.log(`${i} делится на цело на 3`);
            }
        }
        top(y, d);

        break;
    }
    default:
        break;
}
