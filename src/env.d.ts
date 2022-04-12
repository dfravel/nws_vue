/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  VITE_APP_VERSION: string;
  VITE_APP_API_URL: string;
  VITE_APP_API_CREDENTIAL: string;
  VITE_APP_API_KEY: string;
  VITE_APP_AUTH_TOKEN: string;
  VITE_APP_OKTA_ISSUER: string;
  VITE_APP_OKTA_CLIENT_ID: string;
  VITE_APP_CLIENT_PREFIX: string;
  VITE_APP_LOGIN: string;
  VITE_APP_PASSWORD: string;
  VITE_APP_CONFIG: string;
}
