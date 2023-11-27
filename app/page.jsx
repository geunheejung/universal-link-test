'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const timeRef = useRef();

  const handleTwitter = () => {
    window.addEventListener('visibilitychange', () => {
      clearTimeout(timeRef.current);
    });

    document.location.href = `twitter://search?query=%23hashtag`;

    timeRef.current = setTimeout(() => {
      document.location.href = "https://apps.apple.com/kr/app/%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%ED%98%B8%EC%8A%A4%ED%8A%B8%EC%84%BC%ED%84%B0/id1526709791";
    }, 1000);
  }

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

          <h1>
            <a onClick={() => handleTwitter()}>Twitter</a>

            
          </h1>

          <li>
          <a onClick={() => { document.location.href = `https://apps.apple.com/kr/app/%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%ED%98%B8%EC%8A%A4%ED%8A%B8%EC%84%BC%ED%84%B0/id1526709791` }}>App Store</a>
          </li>

          </li>
        
          <li>
            <a href="https://kyte.travel">TRAVEL</a>        
          </li>
          <li>
            <a href="https://toss.im/">toss</a>        
          </li>
          <li>          
            <a href="https://www.airbnb.co.kr/account-details">airbnb</a>        
          </li>
          <li>
            <button onClick={() => setIsOpen(prev => !prev)}>채팅 버튼</button>  
          </li>
          <li>
            <a href="http://guest-feature-chat-space.test.spacecloud.kr">chat-space</a>
          </li>
        </ul>

        <button onClick={() => { window.open() }}>test</button>
        

        <a
            href="https://itunes.apple.com/kr/app/seupeiseukeullaudeu/id1025620281?l=en&amp;mt=8"
            target="_blank"
            id="AppStore"
            // style={{ visibility: 'hidden' }}
          >
            app store
            </a>
        

        <button>앱 설치하기</button>
      </div>
    </main>
  )
}
