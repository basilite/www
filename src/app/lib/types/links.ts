export interface LinksItems {
  image?: string;
  video?: string;
  link?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  size: {
    rows: number;
    cols: number;
  };
  label?: string;
}
