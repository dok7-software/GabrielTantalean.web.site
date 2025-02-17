import Image from "next/image";

const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    description: "A vibrant exploration of color and form",
    image: "/images/ejemplo1.png",
  },
  {
    id: 2,
    title: "Serene Landscape",
    description: "A peaceful depiction of nature's beauty",
    image: "/images/ejemplo2.png",
  },
  {
    id: 3,
    title: "Urban Rhythm",
    description: "The pulse of city life captured on canvas",
    image: "/images/ejemplo3.png",
  },
  {
    id: 4,
    title: "Ethereal Dreams",
    description: "A surreal journey through the subconscious",
    image: "/images/ejemplo4.png",
  },
];

export default function Home() {
  return (
    <div className="container">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="row mb-12">
          <div className="col-md-12">
            <h2 className="h4">{artwork.title}</h2>
            <p className="text-muted">{artwork.description}</p>
            <img
              src={artwork.image || "/placeholder.svg"}
              alt={artwork.title}
              width={2625}
              height={3500}
              className="img-fluid mb-3"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
