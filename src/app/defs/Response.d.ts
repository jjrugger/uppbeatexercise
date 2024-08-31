type FeaturedTag = {
  id: string;
  is_qualified: number;
  name: string;
  slug: string;
};

type TrackTag = {
  id: string;
  is_qualified: number;
  name: string;
  slug: string;
};

export type Document = {
  artist: string;
  artist_slug: string;
  featured_tags?: FeaturedTag[];
  id: string;
  image: string;
  is_explicit: number;
  keywords: string[];
  musicvine_track_id: number;
  name: string;
  premium: boolean;
  set_live: number;
  slug: string;
  styles: string[];
  tags: string[];
  track_engagement: number;
  track_tags: TrackTag[];
  version_length: number;
  version_precise_length: number;
  version_preview_uri: string;
  waveform: string;
  weighted_value: number;
};

type Highlight = {
  field: string;
  matched_tokens: string[];
  snippet: string;
};

type Hit = {
  document: Document;
  highlight: {
    name: {
      matched_tokens: string[];
      snippet: string;
    };
  };
  highlights: Highlight[];
  text_match: number;
  text_match_info: {
    best_field_score: string;
    best_field_weight: number;
    fields_matched: number;
    score: string;
    tokens_matched: number;
  };
};

type RequestParams = {
  collection_name: string;
  per_page: number;
  q: string;
};

export type ResponseObject = {
  facet_counts: unknown[];
  found: number;
  hits: Hit[];
  out_of: number;
  page: number;
  request_params: RequestParams;
  search_cutoff: boolean;
  search_time_ms: number;
};
