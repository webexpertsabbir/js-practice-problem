const jatioSongit = "Amar sonar Bangla ami tomay valobashi. cirodin tomar akash . toamat batas";

// const parts = jatioSongit.split(' ');
// console.log(parts);

// const parts = jatioSongit.split('');
// console.log(parts);

// const parts = jatioSongit.split('.');
// console.log(parts);

const partial1 = jatioSongit.slice(5, 10);
console.log(partial1);

const partial2 = jatioSongit.substring(5, 10);

console.log(partial2);

const inLine = [
    'Amar sonar Bangla ami tomay valobashi',
    ' cirodin tomar akash ',
    ' toamat batas'
]
const newSongit = inLine.join('. ')
console.log(newSongit);