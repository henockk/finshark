import React, { JSX } from 'react';
import "./Card.css";

interface Props  {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = 
({ companyName, 
    ticker, 
    price, 
}: Props): JSX.Element => {
  return (
    <div className='card'>
        <img 
            src='https://images.unsplash.com/photo-1738193026612-4a953a4f4e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
            alt='Image'
        />
        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>{price}</p>
        </div>
        <p className='info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ea.</p>
    </div>);
}


export default Card
