import React from 'react'

function WhyUsCard({item}: {item: {id: number, title: string, description: string, points: string[]}}) {
  return (
    <div className="col-lg-4 mt-4 mt-lg-0">
        <div className="box" data-aos="zoom-in" data-aos-delay="160">
            <span className="card-number">0{item.id}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <ul className="points-list">
                {item.points.map((point, index) => (
                    <li key={index}>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default WhyUsCard;