import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanityClient";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  if (!source) return null;
  return builder.image(source);
}
