import { Repository } from './repository';

export interface ReposirotySearchResponse {
    items: Repository[];
    total_count: number;
}
