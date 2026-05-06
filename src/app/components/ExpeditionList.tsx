// import React from 'react';
// import Link from 'next/link';
// import './expeditionList.css';

// export default function ExpeditionList({ item }: {
//     item: {
//         id: number,
//         name: string,
//         preview: string,
//         price: number,
//         description: string,
//     }
// }) {
//     return (
//         <div className="col-lg-6 expedition-list">
//             <img src={item.preview} className='expedition-img' alt={item.name} />
//             <div className='expedition-content'>
//                 <Link href={`/expeditions/${item.id}`}>{item.name}</Link>
//                 <span>${item.price}</span>
//             </div>
//             <div className='expedition-description'>{item.description}</div>
//         </div>
//     );
// }