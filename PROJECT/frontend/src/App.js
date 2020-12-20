import './App.css';
import {useState} from 'react';
import ResumeCreate from './components/ResumeCreate';
import ResumePDF from './components/ResumePDF';

function App() {
  const [resumeInfo, setResumeInfo] = useState({});
  const createPDF = pdfInfo =>{
    setResumeInfo(pdfInfo);
    console.log(resumeInfo);
  };
  return (
    <div className="App">
        <ResumeCreate onSubmitProp = {createPDF}/>
        <ResumePDF resumeInfo = {resumeInfo}/>
    </div>
  );
}

export default App;

