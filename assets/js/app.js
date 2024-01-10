let quraninfo = document.querySelector(".quran-info");
let qurandetails = document.querySelector(".quran-details");
let quranMp3 = document.querySelector("#quran-mp3");


let randomNumber = Math.floor(Math.random() * 6236) + 1;

async function fetchData() {
    let getQuran = await fetch("https://api.alquran.cloud/v1/ayah/"+randomNumber+"/editions/en.pickthall");
    let quranData = await getQuran.json();


    quraninfo.innerHTML = `<h4>${quranData.data[0].surah.englishName}</h4>
    English Mean : ${quranData.data[0].surah.englishNameTranslation} | 
    Total Verse : ${quranData.data[0].surah.numberOfAyahs} | 
    Revelation Type : ${quranData.data[0].surah.revelationType}</br>`;

    qurandetails.innerHTML = `<h5>"${quranData.data[0].text}"</h5>${quranData.data[0].surah.englishName} - ${quranData.data[0].numberInSurah}</br>
    Translatte by ${quranData.data[0].edition.englishName}</br><br>`;
    
}

async function fetchAudio() {
    
    let getMp3 = await fetch("https://api.alquran.cloud/v1/ayah/"+randomNumber+"/ar.alafasy");
    let quranaudio = await getMp3.json();
    console.log(quranaudio)

    quranMp3.src = quranaudio.data.audio;

}



fetchData();
fetchAudio();