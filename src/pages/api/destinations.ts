import type { APIContext } from "astro";
import { unplashRequestTo } from "@/services/unplash.services";

export const prerender = false;

export async function POST({ request }: APIContext): Promise<Response> {
  const { filter } = await request.json();

  try {
    const destinations = await unplashRequestTo(
      `/search/photos?query=${filter}&per_page=12`
    );
    return new Response(JSON.stringify({ data: destinations }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
