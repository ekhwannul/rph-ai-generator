export const getRPTDataByWeek = (week) => {
  const rptData = {
    2: { tema: "Keluarga Sayang", unit: "Unit 1: Keluarga Bahagia", tajuk: "Aktiviti Keluarga", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.1.1 Membaca dan memahami teks dengan sebutan yang betul" },
    3: { tema: "Keluarga Sayang", unit: "Unit 2: Kasih Sayang", tajuk: "Hadiah untuk Ibu", standardKandungan: "Menulis ayat tunggal dan majmuk", standardPembelajaran: "4.1.1 Menulis ayat tunggal dengan tanda baca yang betul" },
    4: { tema: "Keluarga Sayang", unit: "Unit 3: Hubungan Kekeluargaan", tajuk: "Keluarga Saya", standardKandungan: "Bercerita dan melaporkan", standardPembelajaran: "2.1.1 Bercerita tentang pengalaman diri" },
    5: { tema: "Hobi dan Minat", unit: "Unit 4: Aktiviti Masa Lapang", tajuk: "Hobi Saya", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.1.2 Membaca teks dengan intonasi yang betul" },
    6: { tema: "Hobi dan Minat", unit: "Unit 5: Permainan Tradisional", tajuk: "Permainan Congkak", standardKandungan: "Menulis ayat tunggal dan majmuk", standardPembelajaran: "4.1.2 Menulis ayat majmuk dengan tanda baca yang betul" },
    7: { tema: "Hobi dan Minat", unit: "Unit 6: Sukan dan Rekreasi", tajuk: "Sukan Kegemaran", standardKandungan: "Bercerita dan melaporkan", standardPembelajaran: "2.1.2 Melaporkan aktiviti harian" },
    8: { tema: "Makanan Sihat", unit: "Unit 7: Makanan Berkhasiat", tajuk: "Piramid Makanan", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.2.1 Membaca dan memahami maklumat dari pelbagai sumber" },
    9: { tema: "Makanan Sihat", unit: "Unit 8: Amalan Pemakanan Sihat", tajuk: "Sarapan Berkhasiat", standardKandungan: "Menulis ayat tunggal dan majmuk", standardPembelajaran: "4.2.1 Menulis ayat berdasarkan gambar" },
    10: { tema: "Makanan Sihat", unit: "Unit 9: Makanan Tempatan", tajuk: "Masakan Tradisional", standardKandungan: "Bercerita dan melaporkan", standardPembelajaran: "2.2.1 Bercerita tentang makanan kegemaran" },
    11: { tema: "Alam Haiwan", unit: "Unit 10: Haiwan Peliharaan", tajuk: "Haiwan Kesayangan", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.2.2 Membaca teks fakta dengan sebutan yang betul" },
    12: { tema: "Alam Haiwan", unit: "Unit 11: Haiwan Liar", tajuk: "Haiwan di Hutan", standardKandungan: "Menulis ayat tunggal dan majmuk", standardPembelajaran: "4.2.2 Menulis karangan pendek" },
    13: { tema: "Alam Haiwan", unit: "Unit 12: Habitat Haiwan", tajuk: "Rumah Haiwan", standardKandungan: "Bercerita dan melaporkan", standardPembelajaran: "2.2.2 Melaporkan pemerhatian tentang haiwan" },
    14: { tema: "Alam Tumbuhan", unit: "Unit 13: Tumbuhan Tempatan", tajuk: "Pokok di Sekeliling", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.3.1 Membaca dan memahami puisi" },
    15: { tema: "Alam Tumbuhan", unit: "Unit 14: Tumbuhan Hiasan", tajuk: "Bunga-bungaan", standardKandungan: "Menulis ayat tunggal dan majmuk", standardPembelajaran: "4.3.1 Menulis puisi mudah" },
    16: { tema: "Alam Tumbuhan", unit: "Unit 15: Tumbuhan Ubatan", tajuk: "Herba Tradisional", standardKandungan: "Bercerita dan melaporkan", standardPembelajaran: "2.3.1 Bercerita tentang tumbuhan" },
    17: { tema: "Kesihatan Diri", unit: "Unit 16: Kebersihan Diri", tajuk: "Amalan Kebersihan", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.3.2 Membaca dan memahami teks prosedur" },
    18: { tema: "Kesihatan Diri", unit: "Unit 17: Penjagaan Kesihatan", tajuk: "Cara Hidup Sihat", standardKandungan: "Menulis ayat tunggal dan majmuk", standardPembelajaran: "4.3.2 Menulis langkah-langkah prosedur" },
    19: { tema: "Kesihatan Diri", unit: "Unit 18: Keselamatan Diri", tajuk: "Keselamatan di Rumah", standardKandungan: "Bercerita dan melaporkan", standardPembelajaran: "2.3.2 Melaporkan amalan keselamatan" },
    20: { tema: "Teknologi Mudah", unit: "Unit 19: Peralatan Elektrik", tajuk: "Alat di Rumah", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.4.1 Membaca dan memahami manual mudah" },
    21: { tema: "Teknologi Mudah", unit: "Unit 20: Alat Komunikasi", tajuk: "Telefon dan Internet", standardKandungan: "Menulis ayat tunggal dan majmuk", standardPembelajaran: "4.4.1 Menulis mesej mudah" },
    22: { tema: "Teknologi Mudah", unit: "Unit 21: Inovasi Teknologi", tajuk: "Ciptaan Baru", standardKandungan: "Bercerita dan melaporkan", standardPembelajaran: "2.4.1 Bercerita tentang teknologi" },
    23: { tema: "Budaya Malaysia", unit: "Unit 22: Perayaan di Malaysia", tajuk: "Hari Raya", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.4.2 Membaca dan memahami teks budaya" },
    24: { tema: "Budaya Malaysia", unit: "Unit 23: Pakaian Tradisional", tajuk: "Baju Melayu dan Kurung", standardKandungan: "Menulis ayat tunggal dan majmuk", standardPembelajaran: "4.4.2 Menulis tentang adat resam" },
    25: { tema: "Budaya Malaysia", unit: "Unit 24: Makanan Tradisional", tajuk: "Kuih Muih", standardKandungan: "Bercerita dan melaporkan", standardPembelajaran: "2.4.2 Melaporkan tentang budaya" },
    26: { tema: "Alam Sekitar", unit: "Unit 25: Cuaca dan Musim", tajuk: "Musim di Malaysia", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.5.1 Membaca dan memahami teks sains" },
    27: { tema: "Alam Sekitar", unit: "Unit 26: Pencemaran Alam", tajuk: "Jagalah Alam", standardKandungan: "Menulis ayat tunggal dan majmuk", standardPembelajaran: "4.5.1 Menulis karangan tentang alam sekitar" },
    28: { tema: "Alam Sekitar", unit: "Unit 27: Kitar Semula", tajuk: "Amalan Kitar Semula", standardKandungan: "Bercerita dan melaporkan", standardPembelajaran: "2.5.1 Bercerita tentang pemuliharaan alam" },
    29: { tema: "Alam Sekitar", unit: "Unit 28: Taman Negara", tajuk: "Khazanah Negara", standardKandungan: "Membaca dan memahami teks", standardPembelajaran: "3.5.2 Membaca dan memahami teks geografi" },
    30: { tema: "Alam Sekitar", unit: "Unit 29: Flora dan Fauna", tajuk: "Kepelbagaian Biologi", standardKandungan: "Menghasilkan penulisan kreatif", standardPembelajaran: "5.1.1 Menulis karangan pendek berdasarkan gambar" }
  };
  
  return rptData[week] || null;
};