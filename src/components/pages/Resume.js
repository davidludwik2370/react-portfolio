import React from 'react';
import { Document, Page } from 'react-pdf';
import Pdf from './pageAssets/docs/David_Ludwik_Resume.pdf';

export default function Home() {
  return (
    <div>
      <a href = {Pdf} target = "_blank">Download Pdf</a>
    </div>
  );
}
