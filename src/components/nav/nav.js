import React from 'react';
import avatar from '../../assets/img/avatar.jpeg'
import './nav.css'

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <img src={avatar} alt="avatar" className='nav__img'/>
        <span className="nav__title">LuckyFBB's Resume</span>
        <ul className='nav__list'>
          <li className='list__item'>关于我</li>
          <li className='list__item'>求职意向</li>
          <li className='list__item'>工作经历</li>
          <li className='list__item'>项目展示</li>
          <li className='list__item'>技能水平</li>
        </ul>
      </div>
    )
  }
}

export default Nav