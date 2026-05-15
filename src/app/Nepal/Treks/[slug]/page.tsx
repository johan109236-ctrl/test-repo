'use client';
import { use } from 'react';
import { notFound } from 'next/navigation';
import ExpeditionPage from '../../Expeditions/ExpeditionPage';
import { treks } from '../trek.data';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = treks[slug];
  if (!data) notFound();
  return <ExpeditionPage data={data} />;
}