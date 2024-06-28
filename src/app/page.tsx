import Image from 'next/image'
import MainStyle from '@/styles/Main.module.scss'
import { Fragment } from 'react'
import Link from 'next/link'

const WORD_LIST = [
  { index: 2, text: 'Personal\nDetails', url: '/personal-details' },
  { index: 3, text: 'Employment\nHistory', url: '/history' },
  { index: 4, text: 'Technical\nSkills', url: '/skills' },
  { index: 5, text: 'Get In\nTouch', url: '/contact' },
]

export default function Home() {
  return (
    <section className={MainStyle.section}>
      <div className={MainStyle.container}>
        <div className={MainStyle.wrapper}>
          <div className={MainStyle.wrodContainer}>
            <span className={`${MainStyle.word1} ${MainStyle.myName}`}>
              Lee
              <br />
              Hee soo
            </span>
            {WORD_LIST.map((item) => (
              <Link href={item.url} className={MainStyle[`word${item.index}`]}>
                {item.text.split('\n').map((line, lineIndex) => (
                  <Fragment key={lineIndex}>
                    {line}
                    <br />
                  </Fragment>
                ))}
              </Link>
            ))}
          </div>

          <div className={MainStyle.bubble1}>
            <span className={MainStyle.theArrow1}></span>
            HI! <br /> I AM..
          </div>
          <div className={MainStyle.bubble2}>
            <span className={MainStyle.theArrow2}></span>
            <img src="https://dribbble.s3.amazonaws.com/users/10958/screenshots/271458/librarian.jpg" />
          </div>
          {/* <div className={MainStyle.bubble3}>
            <span className={MainStyle.theArrow3}></span>
            NATIONALITY...
            <br />
            LOCATION...
            <br />
            BIRTHDAY...
            <br />
            HOBBIES
            <br />
            ETC...
            <br />
            ETC...
            <br />
          </div>
          <div className={MainStyle.bubble4}>
            <span className={MainStyle.theArrow4}></span>
            GRAPHIC DESIGNER 2005-2007
            <br />
            Lorem Ipsum dolor sit amet. Lorem Ipsum dolor.
            <br />
            <br />
            CREATIVE DIRECTOR 2008-Current
            <br />
            Lorem Ipsum dolor sit amet.
          </div>
          <div className={MainStyle.bubble5}>
            <span className={MainStyle.theArrow5}></span>
            HIGH SCHOOL
            <br />
            Lorem Ipsum dolor sit amet
            <br />
            May 2004, GPA 1.5
            <br />
            <br />
            UNIVERSITY <br />
            Lorem Ipsum dolor sit amet
            <br />
            July 2007, GPA 1.5
          </div>
          <div className={MainStyle.bubble6}>
            <span className={MainStyle.theArrow6}></span>
            SOCIAL COMMITMENT
            <br />
            ORGANIZATION
            <br />
            CREATIVITY
            <br />
            COMMUNICATION
            <br />
            TEAMWORK
            <br />
          </div>
          <div className={MainStyle.bubble7}>
            <span className={MainStyle.theArrow7}></span>
            PHOTOSHOP
            <br />
            ILLUSTRATOR
            <br />
            INDESIGN
            <br />
            FLASH
            <br />
            DREAMWEAVER
            <br />
            XHTML/CSS
            <br />
            JAVASCRIPT
            <br />
          </div>
          <div className={MainStyle.bubble8}>
            <span className={MainStyle.theArrow8}></span>
            PHONE...
            <br />
            EMAIL...
            <br />
            WEBSITE... <br />
            TWITTER...
            <br />
            FACEBOOK...
            <br />
            DRIBBBLE...
            <br />
          </div> */}
        </div>
      </div>
    </section>
  )
}
