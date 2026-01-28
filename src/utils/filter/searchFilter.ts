import type { Media } from "../../types/media";

export function searchMedia(items: Media[], query: string){
    const lowerQuery = query.toLowerCase();

    if(!lowerQuery) return [];

    return items.filter(item => item.title.toLowerCase().includes(lowerQuery) );
    

}