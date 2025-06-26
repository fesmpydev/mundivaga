export interface UnplashPhotoResponse {
  total: number;
  total_pages: number;
  results: PhotoResponseResults[];
}

interface PhotoResponseResults {
  id: string;
  slug: string;
  alternative_slugs: [Object];
  created_at: string;
  updated_at: string;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  };
  likes: 911;
  liked_by_user: false;
  current_user_collections: [];
  sponsorship: null;
  topic_submissions: {};
  asset_type: "photo";
  user: {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    instagram_username: string;
    twitter_username: string;
    portfolio_url: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
}
