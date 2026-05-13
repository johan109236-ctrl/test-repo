// src/app/Nepal/Expeditions/[slug]/page.tsx
'use client';
import { notFound } from 'next/navigation';
import ExpeditionPage from '../ExpeditionPage';
import { expeditions } from '../expeditions-data';

export default function Page({ params }: { params: { slug: string } }) {
  const data = expeditions[params.slug];
  if (!data) notFound();
  return <ExpeditionPage data={data} />;
}