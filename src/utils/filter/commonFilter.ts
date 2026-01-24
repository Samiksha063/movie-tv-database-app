import type { Movie } from "../../types/movies";

export type FilterState = {
    category ?: string;
    genres ?: string[];
    releaseFrom : string ;
    releaseTo : string ;
    minRating : number | undefined ;
}

export function filterItems(items: Movie[], filters: FilterState){
    let result = items;

    const { category, genres, releaseFrom, releaseTo, minRating } = filters;

    if(category && category !== 'all'){
        result = result.filter(item => item.category === category);
    }

    if(genres && genres.length > 0){
        result = result.filter(item => item.genres.some(genre => genres?.includes(genre)));
    }

    if(releaseFrom){
        result = result.filter(item => item.releaseDate >= releaseFrom);
    }

    if(releaseTo){
        result = result.filter(item => item.releaseDate <= releaseTo);
    }

    if(minRating !== undefined){
        result = result.filter(item => item.rating.average >= minRating);
    }

    return result;

}
