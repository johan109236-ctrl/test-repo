// src/app/Nepal/preparation/[slug]/page.tsx
'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import PrepGuide from '../PrepGuide';
import { prepGuides } from '../Preparation-data';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = prepGuides[slug];
  if (!data) notFound();
  return <PrepGuide data={data} />;
}