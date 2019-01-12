import React from 'react'
import './mb_about.css'
import mine from '../../../assets/img/mine.jpg'

export default function MbAbout() {
  return (
    <div className="mabout">
      <div className="mabout__container">
        <div className="mabout__pic">
          <img src={mine} />
        </div>
        <div className="mabout__intro">
          <div>我叫LuckyFBB，目前生活在浙江杭州，目前大四，浙江工业大学软件工程学生。是一名有灵魂的程序媛。希望能够成为一名优秀的前端工程师。</div>
          <div>平时除了学习之外，喜欢出去拍照，爬山，也会和朋友在峡谷相约，或者再吃把鸡。</div>
          <div>有自己短期的目标，能够高效率的完成所设定的目标，也坚定要做一个执行力很强的人。</div>
        </div>
      </div>
    </div>
  )
}