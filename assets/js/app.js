let quraninfo = document.querySelector(".quran-info");
let qurandetails = document.querySelector(".quran-details");
let audioDiv = document.querySelector(".mp3");
let shareDiv = document.querySelector(".card-body");


async function fetchData() {
    
    let randomNumber = Math.floor(Math.random() * 6236) + 1;

    let getQuran = await fetch("https://api.alquran.cloud/v1/ayah/"+randomNumber+"/editions/en.pickthall");
    let quranData = await getQuran.json();

    quraninfo.innerHTML = `<h4>${quranData.data[0].surah.englishName}</h4>
    English Mean : ${quranData.data[0].surah.englishNameTranslation} | 
    Total Verse : ${quranData.data[0].surah.numberOfAyahs} | 
    Revelation Type : ${quranData.data[0].surah.revelationType}</br>`;

    qurandetails.innerHTML = `<h5>"${quranData.data[0].text}"</h5>${quranData.data[0].surah.englishName} - ${quranData.data[0].numberInSurah}</br>
    Translate by ${quranData.data[0].edition.englishName}</br><br>`;


    let getMp3 = await fetch("https://api.alquran.cloud/v1/ayah/"+randomNumber+"/ar.alafasy");
    let quranaudio = await getMp3.json();

    audioDiv.innerHTML = `<audio controls>
    <source src="${quranaudio.data.audio}" type="audio/mpeg">
    Your browser does not support the audio element.
    </audio>`;
    
}

function shareImage(){
    

}



fetchData();