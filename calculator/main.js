function Evaluate() {
    const input_1 = document.querySelector('#input_1')
    const input_2 = document.querySelector('#input_2')
    const op = document.querySelector('#op');
    const input_result = document.querySelector('#input_result')

    if (op.value == '+') {
        input_result.value = Number(input_1.value) + Number(input_2.value);
    }
    else if (op.value == "-") {
        input_result.value = Number(input_1.value) - Number(input_2.value);
    }
    else if (op.value == "*") {
        input_result.value = Number(input_1.value) * Number(input_2.value);
    }
    else {
        if(Number(input_2.value) == 0)
        {
            input_result.value = "Cannot divide by zero"
        }
        else
        {
            input_result.value = Number(input_1.value) / Number(input_2.value);
        }
    }

}
