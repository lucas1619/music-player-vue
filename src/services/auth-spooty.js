function authSpootify(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Basic Zjg4OTk3ODVhNzYzNGRmZGEyOTNmMThjZjkzNjJmOWI6NmUwYTAxOWNhYTA2NDQxY2JjNjE3ZjM5MjU0NTdlMmU=");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch("https://accounts.spotify.com/api/token", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}
export default authSpootify