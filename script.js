const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    
    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    console.log(valueTemp);

    const celToFah = (celTemp) => {
        let fahrenheit = Math.round((celTemp * 9/5) + 32);
        return fahrenheit;
    }

    const fahToCel = (fahTemp) => {
        let cel = Math.round((fahTemp - 32) * 5/9);
        return cel;
    }



    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result} Fahrenheit`;
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result} Celcius`;
    }
}