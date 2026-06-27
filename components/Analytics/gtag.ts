export const GA_MEASUREMENT_ID = "G-5GRMHR0NC7";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const pageview = (url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = (
  action: string,
  parameters?: Record<string, any>
) => {
  window.gtag("event", action, parameters);
};
