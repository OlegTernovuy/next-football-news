export interface Team {
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
    last_played_at: string;
}

export interface TeamSquad {
    id: number;
    transfer_id: number;
    player_id: number;
    team_id: number;
    position_id: number;
    detailed_position_id: null;
    start: null;
    end: null;
    captain: boolean;
    jersey_number: number;
}

export interface PlayerInfo {
    id: number;
    sport_id: number;
    country_id: number;
    nationality_id: number;
    city_id: null;
    position_id: number;
    detailed_position_id: null;
    type_id: number;
    common_name: string;
    firstname: string;
    lastname: string;
    name: string;
    display_name: string;
    image_path: string;
    height: null;
    weight: null;
    date_of_birth: string;
    gender: string;
}

export interface TvStations {
    id: number;
    name: string;
    url: string;
    image_path: string;
    type: string;
    related_id: null;
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
    data: Team[];
    pagination: Pagination;
    subscription: Subscription[];
    rate_limit: RateLimit;
    timezone: string;
}

export interface IFootballTeam {
    data: Team;
    pagination: Pagination;
    subscription: Subscription[];
    rate_limit: RateLimit;
    timezone: string;
}

export interface ITvStations {
    data: TvStations[];
    pagination: Pagination;
    subscription: Subscription[];
    rate_limit: RateLimit;
    timezone: string;
}

export interface IFootballTeamSquad {
    data: TeamSquad[];
    subscription: Subscription[];
    rate_limit: RateLimit;
    timezone: string;
}

export interface IFootballPlayerInfo {
    data: PlayerInfo;
    subscription: Subscription[];
    rate_limit: RateLimit;
    timezone: string;
}
