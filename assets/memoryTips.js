function generatePDF(){
    const element = document.getElementById('PAOGenerator');

    var opt = {
        margin: 1,
        filename: 'myCardsPAO.pdf',
        jsPDF:  { orientation: 'landscape' },
        pagebreak: {mode: 'avoid-all'}
    };

    html2pdf().set(opt).from(element).save();
}