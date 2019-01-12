import React from 'react'
import './mb_work.css'

export default function MbWork() {
  return (
    <div className='mwork'>
      <div className="mwork__title">
        <span className="title__line" />
        <span className="title__text">我的工作经验</span>
        <span className="title__line" />
      </div>
      <div className='mwork__container'>
        <div className="mwork__block">
          <div className="block__year">
            <span className="year__text">2018.7</span>
            <span className="year__text">--</span>
            <span className="year__text">2018.10</span>
          </div>
          <div className="block__intro">
            <div className="block__bussiness">HIKVISION</div>
            <div className="block__job">Web前端实习生</div>
            <div className="block__detail">
              <div className="detail__text">学习AngularJS的相关知识</div>
              <div className="detail__text">完定制项目开发,主要负责车辆模块</div>
              <div className="detail__text">功能: 能够添加/编辑用户车辆信息,控制出入口信息,加载车底图片</div>
            </div>
          </div>
        </div>
        <div className="mwork__block">
          <div className="block__year">
            <span className="year__text">2018.11</span>
            <span className="year__text">--</span>
            <span className="year__text">至今</span>
          </div>
          <div className="block__intro">
            <div className="block__bussiness">惠借科技</div>
            <div className="block__job">Web前端实习生</div>
            <div className="block__detail">
              <div className="detail__text">学习React/小程序知识</div>
              <div className="detail__text">完成开宝箱/工资拯救日活动开发</div>
              <div className="detail__text">完成运营后台系统开发</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}