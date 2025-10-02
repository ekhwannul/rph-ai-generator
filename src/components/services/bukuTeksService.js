// services/bukuTeksService.js
export const getBukuTeksByMinggu = (minggu) => {
  const mapping = {
    // ==================== JILID 1 ====================
    1: { 
      tema: "Pendahuluan", 
      unit: "Pengenalan dan Asas Bahasa", 
      mukaSurat: "1-9",
      aktiviti: [
        "Pengenalan buku teks dan aktiviti asas bahasa Melayu",
        "Latihan pengukuhan kemahiran asas membaca dan menulis"
      ]
    },
    2: { 
      tema: "Kekeluargaan", 
      unit: "Unit 1: Keluarga Cergas", 
      mukaSurat: "10-14",
      aktiviti: [
        "Membaca dialog 'Suria Pagi' halaman 10",
        "Membaca teks 'Bantu-membantu di Dapur' halaman 11",
        "Menulis huruf berangkai halaman 12",
        "Bercerita menggunakan simpulan bahasa halaman 13",
        "Mempelajari kata nama am dan khas halaman 14"
      ]
    },
    3: {
      tema: "Kekeluargaan",
      unit: "Unit 2: Kejayaan Keluarga", 
      mukaSurat: "15-20",
      aktiviti: [
        "Membaca dialog 'Kejayaan Kita Bersama' halaman 15",
        "Membaca teks 'Kilang Batik Nenek' halaman 16",
        "Menulis ayat berdasarkan frasa dan gambar halaman 17",
        "Bercerita menggunakan simpulan bahasa halaman 18",
        "Mempelajari kata ganti nama halaman 19",
        "Mengenal penjodoh bilangan halaman 20"
      ]
    },
    4: {
      tema: "Kekeluargaan",
      unit: "Unit 3: Kenangan Manis", 
      mukaSurat: "21-27",
      aktiviti: [
        "Membaca dialog 'Penghubung Kasih' halaman 21",
        "Membaca berita 'Kem Bestari' halaman 22",
        "Menulis surat tidak rasmi halaman 23",
        "Mempelajari kata kerja aktif dan pasif halaman 24-25",
        "Aktiviti pemulihan dan pengayaan halaman 26-27"
      ]
    },
    5: {
      tema: "Kesihatan & Kebersihan",
      unit: "Unit 4: Saya Sihat", 
      mukaSurat: "30-34",
      aktiviti: [
        "Membaca teks tentang kesihatan halaman 30",
        "Mempelajari kata adjektif halaman 31",
        "Menulis karangan pendek halaman 32",
        "Aktiviti berkumpulan tentang kesihatan halaman 33-34"
      ]
    },
    6: {
      tema: "Kesihatan & Kebersihan", 
      unit: "Unit 5: Kebersihan Tanggungjawab",
      mukaSurat: "35-40",
      aktiviti: [
        "Membaca dialog tentang kebersihan halaman 35",
        "Mempelajari kata hubung halaman 36",
        "Menulis iklan kecil halaman 37",
        "Aktiviti lakonan halaman 38-40"
      ]
    },
    7: {
      tema: "Kesihatan & Kebersihan",
      unit: "Unit 6: Minda Positif", 
      mukaSurat: "41-47",
      aktiviti: [
        "Membaca teks motivasi halaman 41",
        "Mempelajari kata seru halaman 42",
        "Menulis jadual harian halaman 43",
        "Aktiviti minda positif halaman 44-47"
      ]
    },
    8: {
      tema: "Keselamatan",
      unit: "Unit 7: Keselamatan di Rumah", 
      mukaSurat: "50-54",
      aktiviti: [
        "Membaca teks keselamatan halaman 50",
        "Mempelajari kata arah halaman 51",
        "Menulis langkah-langkah keselamatan halaman 52",
        "Aktiviti praktikal keselamatan halaman 53-54"
      ]
    },
    9: {
      tema: "Keselamatan",
      unit: "Unit 8: Rekreasi Selamat", 
      mukaSurat: "55-60",
      aktiviti: [
        "Membaca dialog rekreasi halaman 55",
        "Mempelajari kata bilangan halaman 56",
        "Menulis pengalaman peribadi halaman 57",
        "Aktiviti kumpulan halaman 58-60"
      ]
    },
    10: {
      tema: "Keselamatan",
      unit: "Unit 9: Alatan Keselamatan", 
      mukaSurat: "61-68",
      aktiviti: [
        "Membaca teks informatif halaman 61",
        "Mempelajari kata tugas halaman 62",
        "Menulis laporan ringkas halaman 63",
        "Aktiviti pengayaan halaman 64-68"
      ]
    },
    11: {
      tema: "Perpaduan",
      unit: "Unit 10: Toleransi", 
      mukaSurat: "70-76",
      aktiviti: [
        "Membaca cerita pendek halaman 70",
        "Mempelajari kata ganda halaman 71",
        "Menulis pantun halaman 72",
        "Aktiviti perbincangan halaman 73-76"
      ]
    },
    12: {
      tema: "Perpaduan",
      unit: "Unit 12: Kerjasama", 
      mukaSurat: "84-89",
      aktiviti: [
        "Membaca teks kerjasama halaman 84",
        "Mempelajari ayat majmuk halaman 85",
        "Menulis cerita bergambar halaman 86",
        "Aktiviti akhir tema halaman 87-89"
      ]
    },

    // ==================== JILID 2 ====================
    13: {
      tema: "Kebudayaan, Kesenian dan Estetika",
      unit: "Unit 13: Kekalkan Warisan Kita", 
      mukaSurat: "8-12",
      aktiviti: [
        "Mempelajari istilah keluarga diraja halaman 8-9",
        "Membaca dan memahami pantun tradisional halaman 10", 
        "Menulis alamat dengan tulisan berangkai halaman 11",
        "Menggunakan kata ganda penuh dalam ayat halaman 12"
      ]
    },
    14: {
      tema: "Kebudayaan, Kesenian dan Estetika",
      unit: "Unit 14: Kenali Kesenian Kita",
      mukaSurat: "13-18", 
      aktiviti: [
        "Mempelajari tarian ceracap inai halaman 13",
        "Membaca label penjagaan baju kurung halaman 14",
        "Mengedit teks tentang gambus dan kompang halaman 15",
        "Melagukan syair warisan seni halaman 16",
        "Menggunakan kata ganda separa dan berentak halaman 17-18"
      ]
    },
    15: {
      tema: "Kebudayaan, Kesenian dan Estetika", 
      unit: "Unit 15: Indahnya Seni dan Budaya Kita",
      mukaSurat: "19-26",
      aktiviti: [
        "Mempelajari selampai manik etnik Sarawak halaman 19",
        "Membaca manual pemerah santan tradisional halaman 20",
        "Mengedit teks tentang kesenian Orang Asli halaman 21",
        "Membina ayat seruan dan perintah halaman 22-23",
        "Membina ayat tanya dengan kata tanya halaman 24"
      ]
    },
    16: {
      tema: "Kelestarian Alam",
      unit: "Unit 16: Pengurusan Sisa Pepejal", 
      mukaSurat: "28-32",
      aktiviti: [
        "Belajar cara kitar semula halaman 28",
        "Membaca cerita 'Tangan Kreatif' halaman 29",
        "Mengedit jadual kutipan sisa halaman 30",
        "Mendeklamasikan sajak 'Pesananku' halaman 31",
        "Membina ayat tanya tanpa kata tanya halaman 32"
      ]
    },
    17: {
      tema: "Kelestarian Alam",
      unit: "Unit 17: Sumbangan Kita", 
      mukaSurat: "33-38",
      aktiviti: [
        "Mempelajari Program Rakan Alam Sekitar halaman 33",
        "Membaca pantun 'Jagalah Bumi Kita' halaman 34",
        "Menulis jawapan pemahaman teks halaman 35",
        "Membina ayat tunggal halaman 36",
        "Membina ayat majmuk halaman 37",
        "Menggunakan kata ganti nama halaman 38"
      ]
    },
    18: {
      tema: "Kelestarian Alam",
      unit: "Unit 18: Tahukah Kamu?", 
      mukaSurat: "39-47",
      aktiviti: [
        "Mempelajari hutan bandar halaman 39",
        "Membaca tentang bangunan berteknologi hijau halaman 40",
        "Menjawab soalan pemahaman halaman 41",
        "Melengkapkan pantun halaman 42",
        "Menggunakan penjodoh bilangan halaman 43",
        "Mempelajari kata kerja aktif dan pasif halaman 44-45"
      ]
    },
    19: {
      tema: "Pertanian dan Penternakan",
      unit: "Unit 19: Pertanian Sumber Pendapatan", 
      mukaSurat: "50-56",
      aktiviti: [
        "Mendengar dan bertutur tentang ladang jagung halaman 50",
        "Membaca dan menyatakan idea utama halaman 51",
        "Membanding beza tanaman biasa dan akuaponik halaman 52",
        "Mencipta sajak 'Beras Wangi' halaman 53",
        "Menggunakan kata adjektif halaman 54-55",
        "Menggunakan kata hubung halaman 56"
      ]
    },
    20: {
      tema: "Pertanian dan Penternakan",
      unit: "Unit 20: Inovasi dalam Penternakan", 
      mukaSurat: "57-62",
      aktiviti: [
        "Mempelajari Taman Arnab halaman 57",
        "Membaca tentang salutan nano halaman 58",
        "Menulis ayat yang diimlakkan halaman 59",
        "Menggunakan kata sendi nama halaman 60",
        "Menggunakan kata tanya halaman 61",
        "Menggunakan kata perintah halaman 62"
      ]
    },
    21: {
      tema: "Pertanian dan Penternakan",
      unit: "Unit 21: Bumi Bertuah", 
      mukaSurat: "63-70",
      aktiviti: [
        "Berbincang tentang penternak jaya halaman 63",
        "Membaca tentang keratan batang pokok halaman 64",
        "Menulis karangan lawatan halaman 65",
        "Mengubah suai cerita kebun cili halaman 66",
        "Menggunakan kata penguat halaman 67",
        "Menggunakan kata bantu halaman 68"
      ]
    },
    22: {
      tema: "Ekonomi, Keusahawanan dan Kewangan",
      unit: "Unit 22: Bijak Ekonomi", 
      mukaSurat: "72-76",
      aktiviti: [
        "Menilai dan memilih produk halaman 72",
        "Membaca manual mesin MRT halaman 73",
        "Menulis karangan usahawan halaman 74",
        "Menggunakan kata dasar dan berimbuhan halaman 75",
        "Menggunakan kata majmuk halaman 76"
      ]
    },
    23: {
      tema: "Ekonomi, Keusahawanan dan Kewangan",
      unit: "Unit 23: Budaya Usahawan", 
      mukaSurat: "77-82",
      aktiviti: [
        "Membanding beza perniagaan halaman 77",
        "Membaca kisah usahawan salun halaman 78",
        "Mengedit teks usahawan halaman 79",
        "Mengubah suai lagu usahawan halaman 80",
        "Menggunakan kata ganda halaman 81",
        "Membina ayat seruan dan perintah halaman 82"
      ]
    },
    24: {
      tema: "Ekonomi, Keusahawanan dan Kewangan",
      unit: "Unit 24: Bijak Mengurus Kewangan", 
      mukaSurat: "83-90",
      aktiviti: [
        "Berbincang tentang menabung halaman 83",
        "Membaca dan memahami pantun berjimat halaman 84",
        "Mengedit struktur ayat halaman 85",
        "Membina pelbagai jenis ayat tanya halaman 86",
        "Membina ayat tunggal dan majmuk halaman 87",
        "Aktiviti pengukuhan dan penilaian halaman 88-90"
      ]
    },
    // Minggu 25-30 untuk pengayaan dan ulang kaji
    25: { tema: "Ulang Kaji", unit: "Ulang Kaji Tema 5-6", mukaSurat: "8-47", aktiviti: ["Aktiviti ulang kaji kebudayaan dan kelestarian alam"] },
    26: { tema: "Ulang Kaji", unit: "Ulang Kaji Tema 7", mukaSurat: "50-70", aktiviti: ["Aktiviti ulang kaji pertanian dan penternakan"] },
    27: { tema: "Ulang Kaji", unit: "Ulang Kaji Tema 8", mukaSurat: "72-90", aktiviti: ["Aktiviti ulang kaji ekonomi dan keusahawanan"] },
    28: { tema: "Pengayaan", unit: "Aktiviti Pengayaan 1", mukaSurat: "Various", aktiviti: ["Aktiviti pengayaan kemahiran bahasa"] },
    29: { tema: "Pengayaan", unit: "Aktiviti Pengayaan 2", mukaSurat: "Various", aktiviti: ["Aktiviti kreativiti dan inovasi"] },
    30: { tema: "Penilaian", unit: "Penilaian Akhir Tahun", mukaSurat: "Various", aktiviti: ["Penilaian menyeluruh kemahiran bahasa"] }
  };
  
  return mapping[minggu] || { 
    tema: "Umum", 
    unit: "Aktiviti Umum", 
    mukaSurat: "-", 
    aktiviti: ["Aktiviti pengayaan dan pemulihan"] 
  };
};