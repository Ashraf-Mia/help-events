import Image from "next/image";

const photos = [
  {
    src: "/images/gallery-community.jpg",
    caption: "Smiles from our community",
  },
  { src: "/images/hero-volunteers.jpg", caption: "Hands together for a cause" },
  { src: "/images/gallery-hands.jpg", caption: "Volunteers on a sunny day" },
  { src: "/images/gallery-team.jpg", caption: "Planning the next drive" },
  { src: "/images/gallery-friends.jpg", caption: "Friends of the foundation" },
  { src: "/images/gallery-group.jpg", caption: "A day out with the team" },
];

const Gallery = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Moments from our community
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          Real people. Real streets. Real difference.
        </p>
      </div>
      =
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {photos.map((p) => (
          <div
            key={p.src}
            className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-muted"
          >
            <Image
              src={p.src}
              alt={p.caption}
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3 pt-8 text-xs font-medium text-white sm:p-4 sm:text-sm">
              {p.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
