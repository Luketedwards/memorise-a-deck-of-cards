/* jshint esversion:6 */
/*Code to generate pdf from content of PAO generator. I used "html2pdf" to achieve this. */

function generatePDF() {
    const element = document.getElementById('PAOGenerator');

    var opt = {
        margin: 1,
        filename: 'myCardsPAO.pdf',
        jsPDF: {
            orientation: 'landscape'
        },
        pagebreak: {
            mode: 'avoid-all'
        }
    };

    html2pdf().set(opt).from(element).save();
}