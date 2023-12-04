'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef();

  // useEffect(() => {
  //   window.addEventListener('visibilitychange', () => {
  //     alert(1)
  //     clearTimeout(timeRef.current);
  //   });
  // }, []);

  // const handleTwitter = () => {

  //   document.location.href = `twitter://search?query=%23hashtag`;

  //   timeRef.current = setTimeout(() => {
  //     document.location.href = "https://apps.apple.com/kr/app/%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%ED%98%B8%EC%8A%A4%ED%8A%B8%EC%84%BC%ED%84%B0/id1526709791";
  //   }, 1000);
  // }

  useEffect(() => {
    function handler() {
      clearTimeout(timerRef.current);
    }
  
    // (3) window의 visibilitychange 이벤트가 발생하면 앱이 실행됐다고 가정한다. timeout을 제거한다. 
    window.addEventListener('visibilitychange', handler);
  }, []);
  
  const launchApp = (url) => {
    // (1) 주어진 딥링크로 앱을 실행한다
    document.location.href = `twitter://search?query=%23hashtag`;
  
    // (2) 일정한 시간동안 앱이 실행되지 않으면 특정 기능을 실행하는 timeout을 생성한다 
    
    // timerRef.current = setTimeout(() => {
    //   document.location.href = `https://apps.apple.com/kr/app/%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%ED%98%B8%EC%8A%A4%ED%8A%B8%EC%84%BC%ED%84%B0/id1526709791`;
    // }, 1000);
  };


  const getMobileOS = () => {
    const ua = navigator.userAgent
    if (/android/i.test(ua)) {
      return "Android"
    } 

    if ((/iPad|iPhone|iPod/.test(ua))|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      return "iOS"
    };
    
    return "Other"
  }

  return (
    <main className={styles.main}>
      <div>
        TEST
        <a onClick={() => {
    location.href = 'intent://comixest.com//#Intent;package=com.hustay.swing.p3cfded673ced4983b0db9399638730cb;scheme=https;end'
  }}>TEST</a>

    1.2

{/* com-apple-mobilesafari-tab:https://google.com */}
        <ul>
          <li>
          <a href="https://universal-link-test-gamma.vercel.app"> APP DEEP LINK</a>
          </li>
          <li>

          <h1>
            <a onClick={() => launchApp()}>Twitter</a>
          </h1>

          <li>
          <a onClick={() => { window.open(`https://apps.apple.com/kr/app/%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%ED%98%B8%EC%8A%A4%ED%8A%B8%EC%84%BC%ED%84%B0/id1526709791`) }}>App Store</a>
          </li>

          <li>
            <a href="https://apps.apple.com/kr/app/%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%ED%98%B8%EC%8A%A4%ED%8A%B8%EC%84%BC%ED%84%B0/id1526709791">store App</a>
          </li>


<li>test</li>

<li><a href="https://comixest.com/test.html">
  SC</a></li>
          

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
