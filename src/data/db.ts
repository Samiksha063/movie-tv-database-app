let db: IDBDatabase | null = null;

export function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("movie_tv_app_db", 3);

    request.onupgradeneeded = (event) => {
      const database = (event.target as IDBOpenDBRequest).result;
      if (!database.objectStoreNames.contains("movies")) {
        database.createObjectStore("movies", { keyPath: "id" });
      }

      if (!database.objectStoreNames.contains("tvShows")) {
        database.createObjectStore("tvShows", { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      db = (event.target as IDBOpenDBRequest).result;
      console.log("DB ready");
      resolve(db);
    };

    request.onerror = (event) => {
      console.error("Failed to open DB");
      reject(request.error);
    };
  });
}

export function getDB(): IDBDatabase {
  if (!db){
    throw new Error("DB not ready");
  } 
  return db;
}