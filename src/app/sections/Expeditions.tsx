// 'use client'
// import React, { useState, useEffect } from 'react'
// import './expeditions.css'
// import SectionTitle from '../components/SectionTitle';
// import Preloader from '../components/Preloader';

// interface Expedition {
//     id: number;
//     name: string;
//     preview: string;
//     price: number;
//     duration: string;
//     difficulty: string;
//     region: string;
//     description: string;
// }

// export default function Expeditions() {
//     const [data, setData] = useState<Expedition[]>([]);
//     const [items, setItems] = useState<Expedition[]>([]);
//     const [filters, setFilters] = useState([
//     { id: 1, name: 'All',       category: 'all',       active: true  },
//     { id: 2, name: 'Annapurna', category: 'Annapurna', active: false },
//     { id: 3, name: 'Everest',   category: 'Everest',   active: false },
//     { id: 4, name: 'Langtang',  category: 'Langtang',  active: false }, // ← already there
//     { id: 5, name: 'Mustang',   category: 'Mustang',   active: false }, // ← already there
// ]);

//     const getExpeditionsData = () => {
//         fetch('/api/expeditions')
//             .then(res => res.json())
//             .then(expeditions => {
//                 setData(expeditions);
//                 setItems(expeditions);
//             })
//             .catch(e => console.log(e.message));
//     }

//     const handleFilterChange = (id: number, category: string) => {
//         setFilters(filters.map(f => ({ ...f, active: f.id === id })));
//         if (category === 'all') {
//             setItems(data);
//         } else {
//             setItems(data.filter((i) => i.region === category));
//         }
//     };

//     useEffect(() => {
//         getExpeditionsData();
//     }, []);

//     return (
//         <section id="expeditions" className="expeditions section-bg">
//             <div className='container' data-aos="fade-up">
//                 <SectionTitle title='EXPEDITIONS' subtitle='Explore Our Exciting Expeditions' />
//                 <div className='row' data-aos='fade-up' data-aos-delay='100'>
//                     <div className='col-lg-12 d-flex justify-content-center'>
//                         <ul id='expeditions-filters'>
//                             {filters.map((filter) => (
//                                 <li
//                                     key={filter.id}
//                                     className={filter.active ? 'filter-active' : ''}
//                                     onClick={() => handleFilterChange(filter.id, filter.category)}
//                                 >
//                                     {filter.name}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="row expeditions-container" data-aos="fade-up" data-aos-delay="200">
//                     {data.length === 0 ? (
//                         <Preloader />
//                     ) : (
//                         items.map((item) => (
//                             <ExpeditionList key={item.id} item={item} />
//                         ))
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// }