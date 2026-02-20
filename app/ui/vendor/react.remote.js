export { createElement, useState, useEffect, useRef, useCallback } from 'https://cdn.jsdelivr.net/npm/react@19.2.4/+esm';
export { createRoot } from 'https://cdn.jsdelivr.net/npm/react-dom@19.2.4/client/+esm';
export { create as zustandCreate } from 'https://cdn.jsdelivr.net/npm/zustand@5.0.11/react/+esm';

// docker run -it --rm -v $PWD:/proj -w /proj denoland/deno:alpine ash
// deno bundle react.remote.js --output react.js --platform browser
