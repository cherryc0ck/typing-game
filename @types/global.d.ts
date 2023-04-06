declare module "*.png";
declare module "*.jpg";
declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: REact.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
