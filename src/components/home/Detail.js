import React from 'react'
import { Card } from './Card'
import { CardInfo } from './CardInfo'

export const Detail = ({detail}) => {
    let item = detail
    return (
      <div>
        <h3>Hola Detalle!!!</h3>
        <div className="detail__container">
          <Card className="detail__card" item={item} index={0} />
          <CardInfo item={item} />
        </div>
      </div>
    );
}
