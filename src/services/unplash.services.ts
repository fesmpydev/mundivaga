const API_BASE = "https://api.unsplash.com";

export const unplashRequestTo = async (url: string) => {
  try {
    const request = await fetch(`${API_BASE}${url}`, {
      method: "GET",
      headers: {
        "Accept-Version": "v1",
        Authorization: `Client-ID ${import.meta.env.UNPLASH_ACCESS_KEY}`,
      },
    });

    if (!request.ok) {
      throw new Error(`Error fetching: ${request.statusText}`);
    }

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(`Error at fetchRequest: ${error}`);
  }
};
