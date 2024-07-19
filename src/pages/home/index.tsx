import React, { useEffect, useState } from 'react';
import '@/style/common.less';
import Topbar from '@/components/Topbar';
import 'cherry-markdown/dist/cherry-markdown.css';
import Cherry from 'cherry-markdown';


function Home() {

  const cherryInstance = () => {
    return new Cherry({
      id: 'markdown-container',
      value: '# welcome to cherry editor!',
    });
  }

  useEffect(()=> {
    cherryInstance()

  }, [])

  return (
    // 整体背景
    <div className="youki-base-layout">
      {/* 顶部导航 */}
      <Topbar show={true} />
      <div id='markdown-container'></div>
      {/* {cherryInstance()} */}
      {/* https://b3log.org/vditor/ */}
      {/* https://b3log.org/vditor/ */}
    </div>
  );
}

export default Home;
