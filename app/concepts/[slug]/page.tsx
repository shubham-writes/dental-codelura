import { notFound } from "next/navigation";
import OakwellTemplate from "../_templates/OakwellTemplate";
import NorthbridgeTemplate from "../_templates/NorthbridgeTemplate";
import RiversideTemplate from "../_templates/RiversideTemplate";

export function generateStaticParams() {
  return [
    { slug: 'oakwell' },
    { slug: 'northbridge' },
    { slug: 'riverside' },
  ]
}

export default async function ConceptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "oakwell") {
    return <OakwellTemplate />;
  }
  
  if (slug === "northbridge") {
    return <NorthbridgeTemplate />;
  }
  
  if (slug === "riverside") {
    return <RiversideTemplate />;
  }

  notFound();
}
