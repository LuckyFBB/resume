import React from 'react'
import avatar from '../../../assets/img/avatar.jpg'
import tel from '../../../assets/img/tel.png'
import school from '../../../assets/img/school.png'
import email from '../../../assets/img/email.png'
import photo from '../../../assets/img/photo.png'
import location from '../../../assets/img/location.png'
import csdn from '../../../assets/img/csdn.png'
import git from '../../../assets/img/github.png'

import './home.css'

export default function Home() {
  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__block'>
          <div className="block__info">
            <div className="info__avatar">
              <span class="avatar__line avatar__line--left"></span>
              <img src={avatar} alt="头像" />
              <span class="avatar__line avatar__line--right"></span>
            </div>
            <div className="info__name">LuckyFBB</div>
          </div>
          <div className='block__job'>Web前端开发</div>
          <div className="block__concat">
            <ul className="concat__list">
              <li className="list__item">
                <div className="item__icon">
                  <img src={tel} alt="telephone" />
                </div>
                <span className="item__detail">17774002576</span>
              </li>
              <li className="list__item">
                <div className="item__icon">
                  <img src={school} alt="school" />
                </div>
                <span className="item__detail">本科 | 浙江工业大学</span>
              </li>
              <li className="list__item">
                <div className="item__icon">
                  <img src={location} alt="position" />
                </div>
                <span className="item__detail">浙江杭州市</span>
              </li>
              <li className="list__item">
                <div className="item__icon">
                  <img src={email} alt="email" />
                </div>
                <span className="item__detail">976060700@qq.com</span>
              </li>
            </ul>
          </div>
          <ul className="block__link">
            <li className="link__item">
              <img src={git} alt="gitee" />
            </li>
            <li className="link__item">
              <img src={csdn} alt="csdn" />
            </li>
            <li className="link__item">
              <img src={photo} alt="photo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}