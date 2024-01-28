import { NextResponse } from "next/server";

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/forward";
const MAPBOX_ACCESS_TOKEN = "your_mapbox_access_token"; // Replace with your actual Mapbox access token

export async function GET(request: any) {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('q');

    if (!searchText) {
        return NextResponse.error(new Error("Search text is missing"));
    }

    const url = `${BASE_URL}?q=${encodeURIComponent(searchText)}&access_token=${MAPBOX_ACCESS_TOKEN}`;

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Failed to fetch data from Mapbox API");
        }

        const data = await res.json();
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.error(new Error("Failed to fetch data from Mapbox API"));
    }
}
