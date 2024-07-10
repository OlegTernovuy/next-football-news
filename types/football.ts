export interface Teams {
    id: number;
    sport_id: number;
    country_id: number;
    venue_id: number;
    gender: string;
    name: string;
    short_code: string;
    image_path: string;
    founded: number;
    type: string;
    placeholder: boolean;
    last_played_at: Date;
}

export interface Pagination {
    count: number;
    per_page: number;
    current_page: number;
    next_page: string;
    has_more: boolean;
}

export interface RateLimit {
    resets_in_seconds: number;
    remaining: number;
    requested_entity: string;
}

export interface Subscription {
    meta: any[];
    plans: any[];
    add_ons: any[];
    widgets: any[];
}

export interface IFootballTeams {
    data: Teams[];
    pagination: Pagination;
    subscription: Subscription[];
    rate_limit: RateLimit;
    timezone: string;
}
