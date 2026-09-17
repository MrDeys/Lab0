alert("Let's integrate!")

function f(x) {
    return x * x - x + 1;
}

function integrate(f, a, b, n = 1000) {
    let h = (b - a) / n;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += f(a + i * h);
    }
    return sum * h;
}

function run(){
    const aInput = window.prompt("Введите нижнюю границу интегрирования (a):");
    const bInput = window.prompt("Введите верхнюю границу интегрирования (b):");

    const a = parseFloat(aInput);
    const b = parseFloat(bInput);

    if(isFinite(a) && isFinite(b)) {
        const result = integrate(f, a, b);
        alert(`Результат интегрирования функции f(x) от ${a} до ${b} равен: ${result}`);
    } else {
        alert("Пожалуйста, введите корректные числовые значения для a и b.");
    }
}