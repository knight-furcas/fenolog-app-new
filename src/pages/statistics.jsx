import { Link } from "react-router-dom";


export default function Statistics() {
  return (
    <div className="rating-bottom-button">
        <button><Link to='/statistics'>Статистика</Link></button>
        <button><Link to='/rating'>Рейтинг</Link></button>
    </div>
  );
}