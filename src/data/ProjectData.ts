import Link from "./Link";

export default class ProjectData {
  id: string;
  name: string;
  htmlDescription: string;
  iconUrl: string;
  previewVideoUrl?: string;
  isWide: boolean;
  isHigh: boolean;
  accentColor: string;
  links?: Link[];

  constructor(
    id: string,
    name: string,
    iconUrl: string,
    html: string,
    accentColor = "#000000",
    isHigh = false,
    isWide = false,
    previewVideoUrl?: string,
    links?: Link[]
  ) {
    this.id = id;
    this.name = name;
    this.htmlDescription = html;
    this.iconUrl = iconUrl;
    this.isHigh = isHigh;
    this.isWide = isWide;
    this.accentColor = accentColor;
    this.previewVideoUrl = previewVideoUrl;
    this.links = links;
  }
}
