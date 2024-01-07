import React from 'react'

function Card({
    id,
    company,
    logo,
    new : isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    labels,
    addLabel,

}) {
  return (
    <div className={`card ${featured ? 'featured' : ''}`}>
        <div className="logo">
            <img src={logo} alt="company-logo" />
        </div>

        {/* <div className="wrapper"> */}
        <div className="textual-description">

            <div className="top">
                <h3>{company}</h3>
                {isNew && <p className='new pill'>NEW!</p>}
                {featured && <p className='pill'>Featured</p>}
            </div>
           
            <h2>{position}</h2>
            <div className="wrapper">
                <span>{postedAt}</span>
                <span>{'.'}</span>
                <span>{contract}</span>
                <span>{'.'}</span>
                <span>{location}</span>
            </div>
        </div>

        <div className="tag_list">
            {labels.map(label => (<p key={label} onClick={() => addLabel(label)}>{label}</p>))}
        </div>
        {/* </div> */}


    </div>
  )
}

export default Card