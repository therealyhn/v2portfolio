import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "va67sdm9";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

if (!projectId || !dataset) {
  // eslint-disable-next-line no-console
  console.warn("Sanity env vars missing: VITE_SANITY_PROJECT_ID / VITE_SANITY_DATASET");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-06-01",
  useCdn: true,
});
