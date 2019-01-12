import React from 'react'
import './mb_skill.css'
import html from '../../../assets/img/skill/html5.jpg'
import css from '../../../assets/img/skill/css3.jpg'
import es from '../../../assets/img/skill/es6.jpg'
import boostrap from '../../../assets/img/skill/bootstrap.png'
import jquery from '../../../assets/img/skill/jquery.png'
import js from '../../../assets/img/skill/js.jpg'
import react from '../../../assets/img/skill/react.png'
import vue from '../../../assets/img/skill/vue.png'
import xcx from '../../../assets/img/skill/xcx.jpg'

export default function MbSkill() {
  let skill = [
    {
      'img': html,
      'title':'HTML5',
      'intro': '了解HTMl5的新属性，能够编写语义化的HTML',
      'bgcolor': '#fff',
      'color':'#555'
    }, {
      'img': css,
      'title':'CSS3',
      'intro': '了解CSS3的新属性，能够使用新属性编写简单的动画效果',
      'bgcolor': '#fff',
      'color':'#555'
    }, {
      'img': js,
      'title':'JavaScript',
      'intro': '了解JavaScript的使用，熟悉this/原型/闭包等',
      'bgcolor': '#ffffff',
      'color':'#555'
    }, {
      'img': jquery,
      'title':'JQuery',
      'intro': '熟悉JQuery的基本方法与使用',
      'bgcolor': '#0066af',
      'color':'#fff'
    }, {
      'img': boostrap,
      'title':'Boostrap',
      'intro': '能够使用Bootstrap构建响应式页面',
      'bgcolor': '#74899a',
      'color':'#fff'
    }, {
      'img': es,
      'title':'ES6',
      'intro': '了解ES6新方法，对Promise、Class、Module有一定的认识',
      'bgcolor': '#f2dc41',
      'color':'#000'
    }, {
      'img': vue,
      'title':'Vue',
      'intro': '了解Vue的基本语法，能够使用Vue进行组件化开发',
      'bgcolor': '#808080',
      'color':'#fff'
    }, {
      'img': react,
      'title':'React',
      'intro': '了解React的基本语法，参与过公司项目开发，该网站就是基于React开发',
      'bgcolor': '#282c34',
      'color':'#f0f0f0'
    }, {
      'img': xcx,
      'title':'微信小程序',
      'intro': '了解小程序的开发，能够使用相关API进行项目开发',
      'bgcolor': '#000',
      'color':'#f0f0f0'
    }
  ]
  return (
    <div className='mskill'>
      <div className="mskill__title">
        <span className="title__line" />
        <span className="title__text">我的技能</span>
        <span className="title__line" />
      </div>
      <div className="mskill__container">
        <div className="mskill__list">
          {
            skill.map(item => {
              let imageStyle = {
                backgroundImage: `url(${item.img})`
              }
              let colorStyle = {
                backgroundColor: `${item.bgcolor}`,
                color:`${item.color}`
              }
              return (
                <div className="list__card" key={item.title}>
                  <div className="card card__front" style={imageStyle}></div>
                  <div className="card card__back" style={colorStyle}>
                    <div className="back__title">{item.title}</div>
                    <div className="back__intro">{item.intro}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="mskill__title">
        <span className="title__line" />
        <span className="title__text">更多知识，正在充电</span>
        <span className="title__line" />
      </div>
    </div>
  )
}