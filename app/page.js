'use client';
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <div>
        TEST
        <a onClick={() => {
    location.href = 'intent://comixest.com//#Intent;package=com.hustay.swing.p3cfded673ced4983b0db9399638730cb;scheme=https;end'
  }}>TEST</a>

{/* com-apple-mobilesafari-tab:https://google.com */}
        <ul>
          <li>
          <a href="https://universal-link-test-gamma.vercel.app"> APP DEEP LINK</a>
          </li>
          <li>
          <a href="twitter:twitter">Twitter</a>

          </li>
          <li>
          <a href="com-apple-mobilesafari-tab:https://google.com">Twitter</a>
          </li>
          <li>
            <a href="https://kyte.travel">TRAVEL</a>
          </li>
        </ul>
        
        
      </div>
    </main>
  )
}
