let quraninfo = document.querySelector(".quran-info");
let qurandetails = document.querySelector(".quran-details");
let audioDiv = document.querySelector(".mp3");
let shareDiv = document.querySelector(".card-body");
let btnControl = document.querySelector(".button-control");


async function fetchData() {
    
    let randomNumber = Math.floor(Math.random() * 6236) + 1;

    let getQuran = await fetch("https://api.alquran.cloud/v1/ayah/"+randomNumber+"/editions/en.pickthall");
    let quranData = await getQuran.json();

    let getMp3 = await fetch("https://api.alquran.cloud/v1/ayah/"+randomNumber+"/ar.alafasy");
    let quranaudio = await getMp3.json();

    document.querySelector(".spinner-grow").style.display = "none";

    quraninfo.innerHTML = `<h4>${quranData.data[0].surah.englishName}</h4>
    English Mean : ${quranData.data[0].surah.englishNameTranslation} | 
    Total Verse : ${quranData.data[0].surah.numberOfAyahs} | 
    Revelation Type : ${quranData.data[0].surah.revelationType}</br>`;

    qurandetails.innerHTML = `<h5 class="text-primary">"${quranaudio.data.text}"</h5><h5>"${quranData.data[0].text}"</h5>${quranData.data[0].surah.englishName} - ${quranData.data[0].numberInSurah}</br>
    Translate by ${quranData.data[0].edition.englishName}</br><br>`;

    audioDiv.innerHTML = `<audio class="audioQuran"  onended="handleAudioEnd()" controls autoplay>
    <source src="${quranaudio.data.audio}" type="audio/mpeg">
    Your browser does not support the audio element.
    </audio>`;

    btnControl.innerHTML = `<button type="button" class="btn btn-primary m-1" onclick="fetchData()">Refresh</button>
    <div class="form-check form-switch m-1">
    <input class="form-check-input" type="checkbox" id="autoRefresh" checked>
    <label class="form-check-label" for="autoRefresh">Auto Refresh</label>
</div>`;

const autoRefresh = document.querySelector("#autoRefresh");
const audioQuran = document.querySelector(".audioQuran");
let autoRefreshEnabled = true;

function handleAudioEnd() {
    if (autoRefreshEnabled) {
        fetchData();
    }
}

audioQuran.addEventListener("ended", handleAudioEnd);
autoRefresh.addEventListener("change", function () {
    autoRefreshEnabled = autoRefresh.checked;
});
    
}


fetchData();