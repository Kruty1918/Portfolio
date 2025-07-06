export default class ProjectData {
  id: string;
  name: string;
  htmlDescription: string;
  iconUrl: string;
  previewVideoUrl?: string;
  isWide: boolean;
  isHigh: boolean;
  accentColor: string;
  videoCaption?: string; // Додаємо поле

  constructor(
    id: string,
    name: string,
    iconUrl: string,
    html: string,
    accentColor = "#000000",
    isHigh = false,
    isWide = false,
    previewVideoUrl?: string,
    videoCaption?: string // Додаємо в конструктор
  ) {
    this.id = id;
    this.name = name;
    this.htmlDescription = html;
    this.iconUrl = iconUrl;
    this.isHigh = isHigh;
    this.isWide = isWide;
    this.accentColor = accentColor;
    this.previewVideoUrl = previewVideoUrl;
    this.videoCaption = videoCaption;
  }
}
