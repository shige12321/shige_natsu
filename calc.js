function OnButtonClick(){
    let i = document.getElementById('number1').value;
    let j = document.getElementById('number2').value;
    let result = Number(i) + Number(j);
    target = document.getElementById("result");
    target.innerHTML = result;
}