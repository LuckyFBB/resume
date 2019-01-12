import React from 'react'
import './project.css'
import ele from '../../../assets/img/project/ele.png'
import db from '../../../assets/img/project/douban.jpg'
import rn from '../../../assets/img/project/react.png'
import travel from '../../../assets/img/project/travel.png'
import resume from '../../../assets/img/project/resume.jpg'

export default function Project() {
  const project = [{
    'img': ele,
    'name':'外卖app'
  }, {
    'img': db,
    'name':'微信小程序'
  }, {
    'img': rn,
    'name':'新闻平台'
  }, {
    'img': travel,
    'name':'旅店系统'
  }, {
    'img': resume,
    'name':'我的简历'
  }]
  return (
    <div className='project'>
      <div className="project__title">
        <span className="title__line" />
        <span className="title__text">我的项目</span>
        <span className="title__line" />
      </div>
      <div className="project__container">
        <div className="project__block">
          <div className="project__list">
            {project.map(item => {
              const bgstyle = {
                backgroundImage: `url(${item.img})`
              }
              return (
                <div className="list__item" style={bgstyle} key={item.name}>
                  <div className="item__name">{item.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="project__title">
        <span className="title__line" />
        <span className="title__text">更多项目，敬请期待</span>
        <span className="title__line" />
      </div>
    </div>
  )
}