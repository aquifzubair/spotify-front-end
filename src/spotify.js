
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "05d7ad7e03d44fb08de32d8213ee2926";
const redirectUri = "http://localhost:3000/";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-playback-position",
    "user-read-email",
    "user-follow-read",
    "user-library-read",
    "user-read-private",
    "playlist-read-collaborative",
    "playlist-read-private",
];

export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;