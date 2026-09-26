import type { APIRoute } from "astro";
import { notifyGoogleIndexing, batchNotifyGoogleIndexing } from "../../lib/google-indexing";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const authHeader = request.headers.get("authorization");
    const apiKey = import.meta.env.REINDEX_API_KEY;

    if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json();
    const { urls, url } = body;

    if (url) {
      const result = await notifyGoogleIndexing(url);
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (urls && Array.isArray(urls)) {
      const results = await batchNotifyGoogleIndexing(urls);
      return new Response(
        JSON.stringify({
          total: results.length,
          successful: results.filter((r) => r.success).length,
          failed: results.filter((r) => !r.success).length,
          results,
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ error: "Provide 'url' or 'urls' in request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
