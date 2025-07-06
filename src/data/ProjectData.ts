export default class ProjectData {
  id: string;
  name: string;
  htmlDescription: string;
  iconUrl: string;
  previewVideoUrl?: string; // NEW: optional video preview
  isWide: boolean;
  isHigh: boolean;
  accentColor: string;

  constructor(
    id: string,
    name: string,
    iconUrl: string,
    html: string,
    accentColor = "#000000",
    isHigh = false,
    isWide = false,
    previewVideoUrl?: string // add it to constructor
  ) {
    this.id = id;
    this.name = name;
    this.htmlDescription = html;
    this.iconUrl = iconUrl;
    this.isHigh = isHigh;
    this.isWide = isWide;
    this.accentColor = accentColor;
    this.previewVideoUrl = previewVideoUrl;
  }
}
