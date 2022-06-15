function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}

function equal(){
    const hasil = document.form.textarea.value;
    if(hasil){
        document.form.textarea.value = eval(hasil);
    }
}

// function clean(){
//     document.form.textarea.value;
// }

function back(){
    const hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.lenght-1);
}