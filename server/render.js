import React from 'react';
import ReactDOM from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import App from '../src/components/App';

export default ({ clientStats }) => (req, res) => {
  const app = ReactDOM.renderToString(<App />);
  const chunkNames = flushChunkNames();

  const {
    js,
    styles,
    cssHash,
    scripts,
    stylesheets
  } = flushChunks(clientStats, { chunkNames });

  console.log('Dynamic Chunk Names Rendered', chunkNames);
  console.log('Scripts', scripts);
  console.log('Styles', stylesheets);

  res.send(
    `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>react universal from scratch</title>
        ${styles}
      </head>
      <body>
        <div id="root">${app}</div>
        ${cssHash}
        ${js}
      </body>
    </html>`
  );
}
