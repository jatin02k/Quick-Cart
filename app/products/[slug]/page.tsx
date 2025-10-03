// app/products/[slug]/page.tsx
import { createClient } from "@/supabase/client";
import { getImageUrl, getCanonicalUrl } from "@/utils";
import Image from "next/image";

export const revalidate = 0;

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: products } = await supabase.from("products").select("*");
  if (!products) return [];
  return products.map((p: any) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
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

export default async function Page({ params }: { params: { slug: string } }) {
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
      <a href={`mailto:${data.contactEmail}`}>Contact Seller</a>
    </div>
  );
}
