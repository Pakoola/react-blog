const API_URL = "";

export async function getBlogs(){
    const response = await fetch(API_URL);
    return response.json();
}