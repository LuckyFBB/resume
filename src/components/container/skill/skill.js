import React from 'react'
import './skill.css'
import html from '../../../assets/img/skill/html5.jpg'
import css from '../../../assets/img/skill/css3.jpg'
import es from '../../../assets/img/skill/es6.jpg'
import boostrap from '../../../assets/img/skill/bootstrap.png'
import jquery from '../../../assets/img/skill/jquery.png'
import js from '../../../assets/img/skill/js.jpg'
import react from '../../../assets/img/skill/react.png'
import vue from '../../../assets/img/skill/vue.png'
import xcx from '../../../assets/img/skill/xcx.jpg'

export default function Skill() {
  let skill = [html, css, js, jquery, boostrap, es, vue, react, xcx]
  return (
    <div className='skill'>
      <div className="skill__title">
        <span className="title__line" />
        <span className="title__text">我的技能</span>
        <span className="title__line" />
      </div>
      <div className="skill__container">
        <div className="skill__list">
          {
            skill.map(item => {
              return (<div className="list__item">
                <img src={item} alt="" />
              </div>)
            })
          }
        </div>
      </div>
      <div className="skill__title">
        <span className="title__line" />
        <span className="title__text">更多知识，正在充电</span>
        <span className="title__line" />
      </div>
    </div>
  )
}