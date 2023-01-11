function calcAge() {
    const birthyear = document.getElementById('birthyear');
    const result = document.getElementById('result');
    let birthyearValue = birthyear.value;
    let age = 2023 - birthyearValue;
    result.innerHTML = age;
}