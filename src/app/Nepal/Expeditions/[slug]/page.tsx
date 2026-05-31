'use client';
import { use } from 'react';
import { notFound } from 'next/navigation';
import ExpeditionPage from '../ExpeditionPage';
import { expeditions } from '../expeditions-data';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = expeditions[slug];
  if (!data) notFound();
return <ExpeditionPage data={{ ...data, slug }} />;}