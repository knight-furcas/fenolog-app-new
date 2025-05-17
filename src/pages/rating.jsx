import { Link } from "react-router-dom";


export default function Rating() {
  return (
    <div>
      <div className="podium">
        <div className='podium-block'> 
          <div className="podium-color-block-1"></div>
          <div className="podium-color-block-2"></div>
          <div className="podium-color-block-3"></div>
        </div>
    </div>
    <div className="rating-buttons">
        <div className="rating-button-inner"><Link to='/statistics'>Статистика</Link></div>
        <div className="rating-button-inner"><Link to='/rating'>Рейтинг</Link></div>
    </div>
    </div>
  );
}