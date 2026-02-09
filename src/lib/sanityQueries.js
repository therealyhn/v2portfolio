export const projectsQuery = `
*[_type == "project"] | order(order asc, _createdAt desc) {
  _id,
  title,
  summary,
  longDescription,
  coverImage,
  gallery,
  tags,
  "links": {
    "demo": demoUrl,
    "github": githubUrl
  }
}
`;
