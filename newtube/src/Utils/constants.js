const GOOGLE_API_KEY = "AIzaSyAIi8VgLmgWhKlLLLRkRAGWCco6Nj2nY_I";

export const YOUTUBE_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    GOOGLE_API_KEY;

export const OFFSET_LIVE_CHAT = 25;


export const VIDEO_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
    GOOGLE_API_KEY +
    "&id=";


// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
