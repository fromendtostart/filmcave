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
    let response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${film}&format=json`);
    response = getExtract(response);
    if(response.length<3500)
    {
        console.log("previous not succesful");
        response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${film}_(film)&format=json`);
        response = getExtract(response);
    }
    if(response.length<3500)
    {
        console.log("previous not succesful");
        response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${film}_(${releaseYear}_film)&format=json`);
        response = getExtract(response);
    }
    console.log(response.length);
    return new Response(JSON.stringify(response), { status: 200 });
}