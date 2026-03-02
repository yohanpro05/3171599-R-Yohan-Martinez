/// <reference types="vite/client" />

// Declara que puedes importar archivos CSS
declare module '*.css' {
  const content: string;
  export default content;
}

