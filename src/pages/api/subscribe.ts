import type { APIContext } from "astro";
import mailchimp from "@mailchimp/mailchimp_marketing";

export const prerender = false;

mailchimp.setConfig({
  apiKey: import.meta.env.MAILCHIMP_API_KEY,
  server: "us7",
});

interface SubscribeRequest {
  email: string;
}

interface SubscribeResponse {
  message: string;
}

interface ErrorResponse {
  error: string;
}

export async function POST({ request }: APIContext): Promise<Response> {
  try {
    const body: SubscribeRequest = await request.json();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!body.email || !emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: "Correo electrónico inválido" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    await mailchimp.lists.addListMember("506e4447cd", {
      email_address: body.email,
      status: "subscribed",
    });

    const response: SubscribeResponse = {
      message: "¡Te has suscrito correctamente!",
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const errorResponse: ErrorResponse = {
      error: "Error al procesar la suscripción",
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
