let quraninfo = document.querySelector(".quran-info");
let qurandetails = document.querySelector(".quran-details");

// let getQuran = fetch("https://api.alquran.cloud/v1/ayah/262/editions/en.pickthall");
// let quranData = await getQuran.then((res) => res.json());
// console.log(quranData);


async function fetchData() {
    try {
        let getQuran = await fetch("https://api.alquran.cloud/v1/ayah/262/editions/en.pickthall");
        let quranData = await getQuran.json();
        console.log(quranData);
    } catch (error) {
        console.error('Error fetching Quran data:', error);
    }
}

fetchData();