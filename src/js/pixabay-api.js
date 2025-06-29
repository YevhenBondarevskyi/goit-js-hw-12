import axios from "axios";

export async function getImagesByQuery(query, page = 1) {
    const API_KEY = "51053325-3e2bfd05922f90ae0c618f7f8";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: 15,
    });
    
    const response = await axios(`https://pixabay.com/api/?${params}`)
    return response.data;
};