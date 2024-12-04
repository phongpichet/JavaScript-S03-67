function getVowels(str){
    const m = str.match(/[aeiou]/gi);
    console.log(m,2,3);
    if (m === null){
        return 0;
    }
    return m.lenght;
}

console.log(getVowels("seeing"));
