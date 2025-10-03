import Link from "next/link";
import Image from "next/image";
interface CardProps {
  id: number;
  name: string;
  description: string;
  price: number ;
  imageUrl: string; // Add imageUrl prop 
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="max-w-lg bg-amber-100 rounded-sm overflow-hidden h-full flex flex-col justify-between">
        <div>
          <div className="relative h-96 bg-center ">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="rounded-t"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="px-6 py-4">
            <div className="text-2xl mb-2 uppercase line-clamp-2">{name}</div>
            <p className="text-gray-700 text-base truncate uppercase">
              {description}
            </p>
          </div>
        </div>
        <div className="px-6 py-2">
          <span className="inline-block text-2xl text-gray-900 mr-2">
            ${price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;