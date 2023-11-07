import React from 'react'

const DivTable = ({children, col, off, classload, classTable}) => {
  return (
    <di className='row mt-3'>
        <div className={'col-md-'+col+'offset-md-'+off}>
            <div className={'card border border-white text-center'+classload}>
                <div className='card-body'>
                    {/* <img src='/loading_ift.gif' className='img-fluid'></img> */}
                </div>
            </div>
            <div className={'table-responsive' + classTable}>
                {children}
            </div>
        </div>
    </di>
  )
}

export default DivTable