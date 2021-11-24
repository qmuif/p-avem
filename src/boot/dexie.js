import Dexie from 'dexie';
import {boot} from 'quasar/wrappers'

const db = new Dexie('Avem');

db.version(2).stores({
    audios: 'id,title,artist,duration,url,data,album'
})

export default boot(({app}) => {
    app.config.globalProperties.$db = db
})

db.open().catch(function (err) {
    console.error('Failed to open db: ' + (err.stack || err));
})

/** Tries to persist storage without ever prompting user.
 @returns {Promise<boolean>}
 "never" In case persisting is not ever possible. Caller don't bother
 asking user for permission.
 "prompt" In case persisting would be possible if prompting user first.
 "persisted" In case this call successfully silently persisted the storage,
 or if it was already persisted.
 */
// async function tryPersistWithoutPromtingUser() {
//
//     if (!navigator.storage || !navigator.storage.persisted) {
//         return "never";
//     }
//     let persisted = await navigator.storage.persisted();
//     if (persisted) {
//         return "persisted";
//     }
//     if (!navigator.permissions || !navigator.permissions.query) {
//         return "prompt"; // It MAY be successful to prompt. Don't know.
//     }
//     const permission = await navigator.permissions.query({
//         name: "persistent-storage"
//     });
//     if (permission.state === "granted") {
//         persisted = await navigator.storage.persist();
//         if (persisted) {
//             return "persisted";
//         } else {
//             throw new Error("Failed to persist");
//         }
//     }
//     if (permission.state === "prompt") {
//         return "prompt";
//     }
//     return "never";
// }
//
//
// async function initStoragePersistence() {
//     const persist = await tryPersistWithoutPromtingUser();
//     switch (persist) {
//         case "never":
//             console.log("Not possible to persist storage");
//             break;
//         case "persisted":
//             console.log("Successfully persisted storage silently");
//             break;
//         case "prompt":
//             console.log("Not persisted, but we may prompt user when we want to.");
//             break;
//     }
// }

async function persist() {
    return await navigator.storage && navigator.storage.persist &&
        navigator.storage.persist();
}


async function isStoragePersisted() {
    return await navigator.storage && navigator.storage.persisted &&
        navigator.storage.persisted();
}


isStoragePersisted().then(async isPersisted => {
    if (isPersisted) {
        console.log("Storage is successfully persisted.");
    } else {
        console.log("Storage is not persisted.");
        console.log("Trying to persist..:");
        if (await persist()) {
            console.log("We successfully turned the storage to be persisted.");
        } else {
            console.log("Failed to make storage persisted");
        }
    }
})


//db.on("ready", function() { alert ("Database ready"); });


export {db};
