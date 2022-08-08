const jatioSongit = "Amar sonar Bangla ami tomay valobashi";
// const doseExist = jatioSongit.includes('Bangla');
// console.log(doseExist);

const songit = "Bangla";
const songitLowerCase = songit.toLowerCase();
const jatioSongitLowerCase = jatioSongit.toLowerCase();
const doseSongit = jatioSongitLowerCase.includes(songitLowerCase);
console.log(doseSongit);

const srcOnline = jatioSongit.toLowerCase().includes(songit.toLowerCase());
console.log(srcOnline);

/* _--------------------------------_______ */

console.log(jatioSongit.indexOf('bangla'));

if(jatioSongit.indexOf('bangla') !== -1){
    console.log("Exites Inside the string");
}
else{
    console.log('Cannot find it');
}

// startWith
console.log(jatioSongit.startsWith('Amar'));

// endsWith

const fileName = 'mybiodata .pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));