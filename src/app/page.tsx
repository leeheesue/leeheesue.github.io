import Image from 'next/image'
import MainStyle from '@/styles/Main.module.scss';

export default function Home() {
  return (
    <section>
      <p className={MainStyle.test}>테스트</p>
    </section>
  )
}
