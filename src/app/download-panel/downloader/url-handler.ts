export interface UrlHandler {
  isPluginPageUrl(url: string): boolean;

  extractPluginName(url: string): string;

  getDownloadPluginUrl(url: string): string;
}
