import Link from "next/link";

const mockUrls =[
  "https://utfs.io/f/43b6fc4c-3996-466f-9995-bbe68aba0a2f-erd3ys.jpg",
  "https://utfs.io/f/bcd56991-0a13-4833-9f44-154832de8771-1y9.jpg",
  "https://utfs.io/f/415d0927-59c9-4371-bdd0-341ec0487fbe-wn2mpk.jpg",
  "https://utfs.io/f/e3718900-5f13-4e22-a077-d7287abfa6d0-wk57nw.jpg",
  "https://utfs.io/f/54cbc2b6-deb2-4fc2-befa-4e61531eb2b3-iba6.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
      </div>
      ))}
      </div>
    </main>
  );
}