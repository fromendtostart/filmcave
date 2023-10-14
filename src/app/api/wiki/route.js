import axios from "axios";

export async function GET(request) {
    const film = await NextApiRequest.query["id"].toString();
    console.log(request.nextUrl.searchParams.get(["key"]));
    console.log(typeof request.nextUrl.searchParams);
    const response = await axios.get("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=true&exsectionformat=plain&titles=Physics");
    return new Response(response.data, { status: 200 });
}