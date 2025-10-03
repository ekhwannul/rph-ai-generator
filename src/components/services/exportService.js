import { Document, Paragraph, TextRun, HeadingLevel, AlignmentType, Packer } from 'docx';

export const generateDOCX = (rphData) => {
  // Create DOCX document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header - RANCANGAN PENGAJARAN HARIAN
          new Paragraph({
            text: "RANCANGAN PENGAJARAN HARIAN",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          }),
          
          // Maklumat Asas
          new Paragraph({
            text: "MAKLUMAT ASAS",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Nama Guru: ", bold: true }),
              new TextRun({ text: rphData.namaGuru })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Kelas: ", bold: true }),
              new TextRun({ text: rphData.namaKelas })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Waktu: ", bold: true }),
              new TextRun({ text: rphData.waktu })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Tarikh: ", bold: true }),
              new TextRun({ text: rphData.tarikh })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Minggu: ", bold: true }),
              new TextRun({ text: rphData.minggu.toString() })
            ],
            spacing: { after: 200 }
          }),
          
          // Maklumat RPT
          new Paragraph({
            text: "MAKLUMAT RPT",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Tema: ", bold: true }),
              new TextRun({ text: rphData.tema })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Unit: ", bold: true }),
              new TextRun({ text: rphData.unit })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Tajuk: ", bold: true }),
              new TextRun({ text: rphData.tajuk })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Standard Kandungan: ", bold: true }),
              new TextRun({ text: rphData.standardKandungan })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Standard Pembelajaran: ", bold: true }),
              new TextRun({ text: rphData.standardPembelajaran })
            ],
            spacing: { after: 200 }
          }),
          
          // Langkah Pengajaran
          new Paragraph({
            text: "LANGKAH PENGAJARAN",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 200 }
          }),
          
          // Set Induksi
          new Paragraph({
            text: "Set Induksi (10 minit)",
            heading: HeadingLevel.HEADING_3,
            spacing: { after: 150 }
          }),
          
          ...rphData.langkahPengajaran.setInduksi.flatMap((step, index) => [
            new Paragraph({
              children: [
                new TextRun({ text: `Langkah ${step.langkah} (${step.masa}): `, bold: true }),
                new TextRun({ text: step.aktiviti })
              ],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Catatan: ", bold: true }),
                new TextRun({ text: step.catatan })
              ],
              spacing: { after: 150 }
            })
          ]),
          
          // Aktiviti Buku Teks
          new Paragraph({
            text: "Aktiviti Buku Teks (25 minit)",
            heading: HeadingLevel.HEADING_3,
            spacing: { after: 150 }
          }),
          
          ...rphData.langkahPengajaran.aktivitiBukuTeks.flatMap((step, index) => [
            new Paragraph({
              children: [
                new TextRun({ text: `Langkah ${step.langkah} (${step.masa}): `, bold: true }),
                new TextRun({ text: step.aktiviti })
              ],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Catatan: ", bold: true }),
                new TextRun({ text: step.catatan })
              ],
              spacing: { after: 150 }
            })
          ]),
          
          // Pengukuhan & Refleksi
          new Paragraph({
            text: "Pengukuhan & Refleksi (15 minit)",
            heading: HeadingLevel.HEADING_3,
            spacing: { after: 150 }
          }),
          
          ...rphData.langkahPengajaran.pengukuhanRefleksi.flatMap((step, index) => [
            new Paragraph({
              children: [
                new TextRun({ text: `Langkah ${step.langkah} (${step.masa}): `, bold: true }),
                new TextRun({ text: step.aktiviti })
              ],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Catatan: ", bold: true }),
                new TextRun({ text: step.catatan })
              ],
              spacing: { after: 150 }
            })
          ])
        ]
      }
    ]
  });

  // Generate and download DOCX
  return Packer.toBlob(doc).then(blob => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `RPH_${rphData.namaGuru}_${rphData.tarikh}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
};