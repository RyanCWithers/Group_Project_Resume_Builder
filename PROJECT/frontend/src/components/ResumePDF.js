import React from 'react';
import {jsPDF} from 'jspdf';

const ResumePDF = props =>{
    const {resumeInfo} = props;
    const pdfCreator = () =>{
        let doc = new jsPDF();
        doc.setFont('Times', 'Roman');
        doc.setFontSize(24);
        doc.text(`${resumeInfo.first_name} ${resumeInfo.last_name}`,doc.internal.pageSize.width/2, 20, 'center');
        doc.setFontSize(16);
        doc.text(`${resumeInfo.phone} | ${resumeInfo.email}`,doc.internal.pageSize.width/2, 27, 'center');
         // doc.text('\rThis text is centered around \r this point.', 20, 27, 'center');

        doc.setFontSize(18);
        doc.text(20, 45, 'Technical Skills');
        doc.setFontSize(14);
        doc.text(20, 55, doc.splitTextToSize(`${resumeInfo.skills}`, doc.internal.pageSize.width - 40));

        doc.setFontSize(18);
        doc.text(20, 70, 'Projects');
        doc.setFontSize(14);
        doc.text(20, 80, doc.splitTextToSize(`${resumeInfo.project1}`, doc.internal.pageSize.width - 40));
        doc.text(20, 105, doc.splitTextToSize(`${resumeInfo.project2}`, doc.internal.pageSize.width - 40));
        doc.text(20, 130, doc.splitTextToSize(`${resumeInfo.project3}`, doc.internal.pageSize.width - 40));

        doc.setFontSize(18);
        doc.text(20, 165, 'Jobs');
        doc.setFontSize(14);
        doc.text(20, 175, doc.splitTextToSize(`${resumeInfo.job1}`, doc.internal.pageSize.width - 40));
        doc.text(20, 200, doc.splitTextToSize(`${resumeInfo.job2}`, doc.internal.pageSize.width - 40));
        doc.text(20, 225, doc.splitTextToSize(`${resumeInfo.job3}`, doc.internal.pageSize.width - 40));

        doc.setFontSize(18);
        doc.text(20, 260, 'Education');
        doc.setFontSize(14);
        doc.text(20, 270, doc.splitTextToSize(`${resumeInfo.education}`, doc.internal.pageSize.width - 40));
        doc.output('pdfobjectnewwindow');
        //doc.save('resume.pdf')
    }
    return(
        <button onClick = {pdfCreator} className = "btn btn-lg btn-info w-10 mx-auto text-white">View PDF</button>
    )
}
export default ResumePDF;
