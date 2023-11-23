import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const handleRedirect = () => {
    location.href = 'intent://comixest.com//#Intent;package=com.hustay.swing.p3cfded673ced4983b0db9399638730cb;scheme=https;end'
  }
  return (
    <main className={styles.main}>
      <div>
        TEST
        <a onClick={this.handleRedirect}>TEST</a>

        <a href="https://universal-link-test-gamma.vercel.app"> APP DEEP LINK</a>
      </div>
    </main>
  )
}
