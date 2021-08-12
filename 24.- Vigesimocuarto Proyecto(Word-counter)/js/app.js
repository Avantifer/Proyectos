function wordcount(){
    const text = document.querySelector('.textarea').value;
    let words = 1;

    for (const letter of text) {
        if (letter === " "){
            words++;
        }
    }

    document.getElementById('words').innerHTML = "Words: "+words;
}