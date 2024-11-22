import React from 'react'
import styles from '../styles/education.module.css'
import { Element } from 'react-scroll';

const Education = () => {
  return (
    <Element name="education">
      <div className={styles.educationBox}>
        <div>EDUCATION</div>
        <div className={styles.education}>
          <div>교육</div>
          <div className={styles.educationWrap}>
            <span>2024.03-2024.10</span>
            <div className={styles.educationContent}>
              <span>DevOps 풀스택 개발자 부트캠프</span>
              <span>부트 캠프에서 교육을 받으며 개발자들의 협업을 알게 되었고</span>
              <ul>
                <li>HTML/CSS 기초 웹 페이지 작성</li>
                <li>웹 프로그래밍 기초</li>
                <li>데이터베이스 기초와 관리</li>
                <li>Nest.js 기반 BackEnd 프로그래밍</li>
                <li>Next.js 기반 FrontEnd 프로그래밍</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </Element>
  )
}

export default Education


