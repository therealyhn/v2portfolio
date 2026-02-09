import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanityClient";
import { projectsQuery } from "../lib/sanityQueries";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await sanityClient.fetch(projectsQuery);
        if (!isActive) return;
        const normalized = (data || []).map((item) => {
          const gallery = (item.gallery || []).filter(Boolean);
          const images = gallery.length ? gallery : item.coverImage ? [item.coverImage] : [];
          return {
            id: item._id,
            title: item.title,
            summary: item.summary,
            longDescription: item.longDescription,
            coverImage: item.coverImage || null,
            images,
            tags: item.tags || [],
            links: item.links || {},
          };
        });
        setProjects(normalized);
        setError(null);
      } catch (err) {
        if (!isActive) return;
        setError(err);
        setProjects([]);
      } finally {
        if (isActive) setLoading(false);
      }
    };

    fetchProjects();
    return () => {
      isActive = false;
    };
  }, []);

  return { projects, loading, error };
}
