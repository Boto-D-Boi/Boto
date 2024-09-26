import Link from "next/link";
import { db } from "~/server/db";

/*const mockUrls =[

];
const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url,
}));*/



export default async function HomePage() {
  const images = await db.query.images.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 text-orange-600 text-lg tracking-wider">
        {[...images].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
      </div>
      ))}
      </div>
    </main>
  );
}
//find many automatically uses the key for the ID