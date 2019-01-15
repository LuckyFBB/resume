import React from 'react'
import './about.css'
import mine from '../../../../assets/img/mine.jpg'

export default function About(){
  return(
    <div className="about">
      <div className="about__container">
        <div className="about__pic">
          <img src={mine} />
        </div>
        <div className="about__intro">我叫LuckyFBB，大四在读，浙江工业大学软件工程学生，希望能够成为一名优秀的前端工程师。</div>
        <div className="about__intro">平时除了学习之外，喜欢出去拍照，爬山，也会和朋友在峡谷相约，或者再吃把鸡。</div>
        <div className="about__intro">有自己短期的目标，能够高效率的完成所设定的目标，也坚定要做一个执行力很强的人。</div>
      </div>
    </div>
  )
}