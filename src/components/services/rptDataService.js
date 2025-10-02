// src/components/services/rptDataService.js

export const getRPTDataByWeek = (week) => {
  const rptData = {
    2: {
      tema: "Keluarga Sayang",
      unit: "Unit 1: Keluarga Bahagia", 
      tajuk: "Aktiviti Keluarga",
      standardKandungan: "Membaca dan memahami teks",
      standardPembelajaran: "3.1.1 Membaca dan memahami teks dengan sebutan yang betul"
    },
    3: {
      tema: "Keluarga Sayang", 
      unit: "Unit 2: Kasih Sayang",
      tajuk: "Hadiah untuk Ibu",
      standardKandungan: "Menulis ayat tunggal dan majmuk",
      standardPembelajaran: "4.1.1 Menulis ayat tunggal dengan tanda baca yang betul"
    },
    // dan seterusnya untuk minggu 4-30...
  };
  
  return rptData[week] || null;
};