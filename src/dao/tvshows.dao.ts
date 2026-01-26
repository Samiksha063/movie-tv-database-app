import { getDB } from "../data/db";
import type { TvShow } from "../types/tvshows";

export function addTvShow(tvShow: TvShow){
    const db = getDB();
    const transaction = db.transaction("tvShows","readwrite");
    const store = transaction.objectStore("tvShows");

    store.put(tvShow);

    transaction.oncomplete = () => {
        console.log(`TvShow: "${tvShow.title}" added successfully`);

    }

    transaction.onerror = () => {
        console.log("Failed to add tv show", transaction.error);
    }
}

export function getAllTvShows() : Promise<TvShow[]>{
    return new Promise((resolve, reject) => {
        const db = getDB();
        const transaction = db.transaction("tvShows","readonly");
        const store = transaction.objectStore("tvShows");

        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result);
        }

        request.onerror = () => {
            reject(request.error);
        }
    })
}

export function getTvShowsById(id:number) : Promise<TvShow | undefined>{

    return new Promise((resolve, reject) => {
        const db = getDB();
        const transaction = db.transaction("tvShows", "readonly");
        const store = transaction.objectStore("tvShows");
        const request = store.get(id);

        request.onsuccess = () => {
            resolve(request.result);
        }

        request.onerror = () => {
            reject(request.error);
        }

    })
}

export function tvShowExists(id:number) : Promise<boolean>{

    return new Promise((resolve, reject) => {
        const db = getDB();
        const transaction = db.transaction("tvShows", "readonly");
        const store = transaction.objectStore("tvShows");
        const request = store.get(id);
        
        request.onsuccess = () => {
            if(request.result){
                resolve(true);
            }else{
                resolve(false);
            }
        }

        request.onerror = () => {
            reject(request.error);
        }
    })
}

