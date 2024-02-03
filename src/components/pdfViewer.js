import React from 'react';

function PDFViewer({ src }) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <object
        data={src}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      >
        <p>El visor de PDF no está disponible. Puedes descargar el archivo <a href={src}>aquí</a>.</p>
      </object>
    </div>
  );
}

export default PDFViewer;
