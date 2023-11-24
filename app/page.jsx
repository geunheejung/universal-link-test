'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  

  const timerRef = useRef();
  const popupRef = useRef();

  useEffect(() => {
    function handler() {
      clearTimeout(timerRef.current);
    }
  
    // (3) window의 visibilitychange 이벤트가 발생하면 앱이 실행됐다고 가정한다. timeout을 제거한다. 
    window.addEventListener('visibilitychange', handler);
  }, []);

  const onLaunchFail = () => {
    // document.getElementById('AppStore').click();
    popupRef.current.location.href = 'https://itunes.apple.com/kr/app/seupeiseukeullaudeu/id1025620281?l=en&amp;mt=8'
  }

  
  
  const launchApp = (url) => {
    // (1) 주어진 딥링크로 앱을 실행한다
    location.href = url;

    popupRef.current = window.open('about:blank','',"top=10, left=10, width=1, height=1, status=no, menubar=no, toolbar=no, resizable=no");
    

    // (2) 일정한 시간동안 앱이 실행되지 않으면 특정 기능을 실행하는 timeout을 생성한다 
    timerRef.current = setTimeout(() => {
      onLaunchFail();
    }, 1000);
  };

  const handleSubmit = () => {
    launchApp('supertoss://toss/pay')
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
          <a href="twitter:twitter">Twitter</a>

          </li>
          <li>
          <a href="com-apple-mobilesafari-tab:https://google.com">Twitter</a>
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
        
        <a
            href="https://itunes.apple.com/kr/app/seupeiseukeullaudeu/id1025620281?l=en&amp;mt=8"
            target="_blank"
            id="AppStore"
            // style={{ visibility: 'hidden' }}
          >
            app store
            </a>
        
      </div>

      <div style={{ display: isOpen ? 'block' : 'none' }}>
        <button onClick={handleSubmit}>앱 설치하기</button>
      </div>
    </main>
  )
}
