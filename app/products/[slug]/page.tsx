import Image from "next/image";
import { createClient } from "@/supabase/client";
import { getCanonicalUrl, getImageUrl } from "@/utils";
import { Metadata } from "next";

export const revalidate = 0;

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  contactEmail: string;
  boost?: boolean;
};

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const supabase = createClient();
  const { data: post } = await supabase
    .from("products")
    .select("*")
    .match({ id: params.slug })
    .single();

  if (!post) return { title: "", description: "" };

  return {
    title: post.name || "",
    description: post.description || "",
    openGraph: { images: [getImageUrl(post.imageUrl)] },
    alternates: { canonical: `${getCanonicalUrl()}/products/${params.slug}` },
  };
}

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: products } = await supabase.from("products").select("*");
  if (!products) return [];
  return products.map((p: Product) => ({ slug: p.id }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const supabase = createClient();
  const { data } = await supabase
    .from("products")
    .select("*")
    .match({ id: slug })
    .single();

  if (!data) return <div>Product not found</div>;

  return (
    <div className="px-12 py-12 max-w-7xl mx-auto min-h-screen">
      <h2 className="text-3xl lg:text-4xl uppercase">{data.name}</h2>
      <Image src={getImageUrl(data.imageUrl)} alt={data.name} width={600} height={600} />
      <p>{data.description}</p>
      <p>${data.price}</p>
    </div>
  );
}
