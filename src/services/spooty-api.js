import authSpootify from "@/services/auth-spooty";
const baseUrl = 'https://api.spotify.com/v1';

function searchTrack(track)
{
    return authSpootify()
        .then(token =>
        {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `${token.token_type} ${token.access_token}`);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            return fetch(`${baseUrl}/search?q=${track}&type=track`, requestOptions)
                .then(response => response.json())
                .then(result => result)
                .catch(error => console.log('error', error));
        })

}
export default searchTrack;