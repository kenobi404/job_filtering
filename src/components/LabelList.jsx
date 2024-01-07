import React from 'react'

function LabelList({labels,removeLabel,clearLabels}) {
  return (
    <div className='card label_list'>
      <div className="labels_wrapper">
      {labels.map(label => (
      <div className="label_item" key={label}>
        <p >
          {label}
          </p>
          <button onClick={() => removeLabel(label)}><img src="../../images/icon-remove.svg" alt="" /></button>
        </div>)
        )}
      </div>
      <button className="clear" onClick={clearLabels}>Clear</button>
     
    </div>
  )
}

export default LabelList