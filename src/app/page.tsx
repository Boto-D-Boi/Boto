import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries"

/*const mockUrls =[

];
const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url,
}));*/



export default async function HomePage() {
  const images = await getMyImages().catch((error) => {
    console.error(error);
    return null;
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 text-orange-600 text-lg tracking-wider border-8 border-yellow-600 bg-blue-200">
        {images?.map((image, index) => (
          <div key={image.id} className="w-48 border-8 border-l-green-500 border-b-orange-600 border-t-pink-600 border-r-blue-600 brightness-100 bg-violet-700">
            <img src={image.url} />
            <div>{image.name}</div>
      </div>
      ))}
      </div>
    </main>
  );
}
//find many automatically uses the key for the ID