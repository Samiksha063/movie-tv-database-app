import type { TvShow } from "../types/tvshows";
import { addTvShow, tvShowExists } from "../dao/tvshows.dao";

export async function loadTvShows() : Promise<TvShow[]>{
    const response = await fetch("/data/tvshows.json");

    if (!response.ok) {
        throw new Error("Failed to load TV shows JSON");
    }

    const tvShows: TvShow[] = await response.json();
    return tvShows;
}

export async function seedTvShowsDB(){
    console.log("seedTvShowsDB called");
    const tvShows: TvShow[] = await loadTvShows();
        console.log("Loaded TV shows:", tvShows.length);

    for(let tvShow of tvShows){
        const exists = await tvShowExists(tvShow.id);
        // addTvShow(tvShow);
        if(!exists){
            addTvShow(tvShow);
        }
        
    }

    console.log("Seeding complete");
}