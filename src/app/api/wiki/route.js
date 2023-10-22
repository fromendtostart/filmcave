import axios from "axios";

const getExtract = (obj) => {
    for(let key in obj.data.query.pages)
    {
        return (obj.data.query.pages[key].extract);
    }
}

export async function GET(request) {
    const film = request.nextUrl.searchParams.get(["id"]);
    const releaseYear = request.nextUrl.searchParams.get(["year"]);
    const withReleaseYear = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${film}_(${releaseYear}_film)&format=json`;
    const withFilm = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${film}_(film)&format=json`;
    const justTitle = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${film}&format=json`;
    let response = await axios.get(withReleaseYear);
    response = getExtract(response);
    if(response.length<4000)
    {
        console.log("previous not succesful");
        response = await axios.get(withFilm);
        response = getExtract(response);
    }
    if(response.length<4000)
    {
        console.log("previous not succesful");
        response = await axios.get(justTitle);
        response = getExtract(response);
    }
    if(response.length<4000)
    {
        return new Response("Sorry! Can't find data, Try again later.", {status: 200})
    }
    response = response.slice(0, response.indexOf("<span id=\"References\">"));
    console.log(response.length);
    return new Response(JSON.stringify(response), { status: 200 });
}