import React from 'react';
import { Document, Page } from 'react-pdf';
import Pdf from './pageAssetts/docs/David_Ludwik_Resume.pdf';

export default function Home() {
  return (
    <div>
      <a href = {Pdf} target = "_blank">Download Pdf</a>
      {/* <span><a href = "./pageAssetts/docs/David_Ludwik_Resume.pdf">Resume</a></span> */}
      {/* <Document
        file={Pdf}
        // onLoadSuccess={onDocumentLoadSuccess}
      >
       <Page pageNumber={1} />
      </Document> */}
    </div>
  );
}
