/// <reference types="react-scripts" />

declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.png' {
  const value: string;
  export default value;
}
