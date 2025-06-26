interface ImportMetaEnv {
  readonly UNPLASH_ACCESS_KEY: string;
  readonly UNPLASH_SECRET_KEY: string;
  readonly UNPLASH_CLIENT_ID: string;
  readonly MAILCHIMP_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
