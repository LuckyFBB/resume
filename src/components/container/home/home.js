import React from 'react'
import avatar from '../../../assets/img/avatar.jpg'
import tel from '../../../assets/img/icon/tel.png'
import school from '../../../assets/img/icon/school.png'
import email from '../../../assets/img/icon/email.png'
import photo from '../../../assets/img/icon/photo.png'
import location from '../../../assets/img/icon/location.png'
import csdn from '../../../assets/img/icon/csdn.png'
import git from '../../../assets/img/icon/github.png'
import blog from '../../../assets/img/icon/blogger.png'

import './home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__block'>
          <div className="block__info">
            <div className="info__avatar">
              <span className="avatar__line avatar__line--left"></span>
              <img src={avatar} alt="头像" />
              <span className="avatar__line avatar__line--right"></span>
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
              <a href="https://github.com/LuckyFBB" target="_blank">
                <img src={git} alt="github" />
              </a>
            </li>
            <li className="link__item">
              <a href="https://luckyfbb.github.io/blog.github.io/" target="_blank">
                <img src={blog} alt="博客" />
              </a>
            </li>
            <li className="link__item">
              <a href="https://blog.csdn.net/LuckyFBB" target="_blank">
                <img src={csdn} alt="csdn" />
              </a>
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