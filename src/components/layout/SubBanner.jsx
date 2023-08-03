import { useLocation } from 'react-router-dom';
import { link } from '../../data/nav';
import { Link } from 'react-router-dom';

const SubBanner = () => {
  const { pathname } = useLocation();
  const key = pathname.split('/')[1];
  const subKey = pathname.split('/')[2];
  const target = link[key];
  const subTitle = target.list.find(({ url }) => url.includes(subKey));

  return (
    <div className="sub-banner">
      <div className="pc" style={{ backgroundImage: `url(/images/sub/${key}.jpg)` }}>
        <h1>{target.name}</h1>
        <div className="nav">
          <div>
            <button>{target.name}</button>
            <ul>
              {
                Object.entries(link).map(([_key, value]) => (
                  <li key={_key} className={`${_key === key ? 'active' : ''}`}>
                    <Link to={`/${_key}`}>{value.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <button>{subTitle.name}</button>
            <ul>
              {
                target.list.map(({ name, url }) => (
                  <li key={url} className={`${subTitle.name === name ? 'active' : ''}`}>
                    <Link to={`/${key}${url}`}>{name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SubBanner;