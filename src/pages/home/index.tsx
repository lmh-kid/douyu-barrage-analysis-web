import React, { useEffect, useState } from 'react';
import 'cherry-markdown/dist/cherry-markdown.css';
import {
  Button,
  Card,
  Form,
  Input,
  Link,
  Typography,
} from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import { useLocation } from 'react-router-dom';
import locale from '@/locale';

import '@/style/common.less';
import './index.less';

function Home() {
  const t = useLocale(locale);
  const [formData, setFormData] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const onValuesChange = (value, values) => {
    setFormData(values);
  };

  return (
    <div className="base-page">
      <div className="top-card-bg-box">
        <div className="join-box">
          <div className="left-box">
            <div className="title">{t['Expert and Excellent']}</div>
            <div className="text">{t['HomepageIntroduction']}</div>
          </div>
        </div>
        <div className="base-box"></div>
      </div>

      {/* WHO WE ARE */}
      <div id="WHOWEARE" className='color-fill-1'>
        <Typography.Title className="base-box pt50 pb50 heading1" heading={1}>
          {t['WHO WE ARE']}
        </Typography.Title>
        <div className="base-box pb50">
          <div className="who-box">
            <div className="who-title">
              <div className="who-title-icon"></div>
              <Typography.Title className="" heading={4}>
                {t['Extensive industry experience']}
              </Typography.Title>
            </div>
            <div className="who-text">
              <Typography.Text className="">{t['Our team']}</Typography.Text>
            </div>
          </div>

          <div className="who-box">
            <div className="who-title">
              <div className="who-title-icon"></div>
              <Typography.Title className="" heading={4}>
                {t['Rich supplier network']}
              </Typography.Title>
            </div>
            <div className="who-text">
              <Typography.Text className="">
                {t['We have an extensive network']}
              </Typography.Text>
            </div>
          </div>

          <div className="who-box">
            <div className="who-title">
              <div className="who-title-icon"></div>
              <Typography.Title className="" heading={4}>
                {t['Cultural and language proficiency']}
              </Typography.Title>
            </div>
            <div className="who-text">
              <Typography.Text className="">
                {t['Our expertise in cross-cultural']}
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div>
        <Typography.Title className="base-box pt50 pb50 heading1" heading={1}>
          {t['WHAT WE DO']}
        </Typography.Title>
        <div className="base-box pb50">
          <div className="do-box pr10">
            <div
              className="do-box-bg"
              style={{ backgroundImage: `url('/src/assets/bg/test.png')` }}
            >
              <div className="who-title">
                <div className="who-title-icon"></div>
                <Typography.Title className="" heading={4}>
                  {t['Extensive industry experience']}
                </Typography.Title>
              </div>
              <div className="who-text">
                <Typography.Text className="">{t['Our team']}</Typography.Text>
              </div>
            </div>
          </div>

          <div className="do-box pr10 pl10">
            <div
              className="do-box-bg"
              style={{ backgroundImage: `url('/src/assets/bg/test.png')` }}
            >
              <div className="who-title">
                <div className="who-title-icon"></div>
                <Typography.Title className="" heading={4}>
                  {t['Rich supplier network']}
                </Typography.Title>
              </div>
              <div className="who-text">
                <Typography.Text className="">
                  {t['We have an extensive network']}
                </Typography.Text>
              </div>
            </div>
          </div>

          <div className="do-box pl10">
            <div
              className="do-box-bg"
              style={{ backgroundImage: `url('/src/assets/bg/test.png')` }}
            >
              <div className="who-title">
                <div className="who-title-icon"></div>
                <Typography.Title className="" heading={4}>
                  {t['Cultural and language proficiency']}
                </Typography.Title>
              </div>
              <div className="who-text">
                <Typography.Text className="">
                  {t['Our expertise in cross-cultural']}
                </Typography.Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn more and start your sourcing */}
      <div id='SERVICES' className="long-bg-box">
        <div
          className="base-box long-bg-image"
          style={{ backgroundImage: `url('/src/assets/bg/test.png')` }}
        >
          <div className="long-bg-text-box">
            <div className="">
              <Typography.Title className="pt50 long-bg-text-title" heading={2}>
                {t['Learn more and start your sourcing']}
              </Typography.Title>
            </div>
            <div>
              <Typography.Text className="long-bg-text-text">
                {t['Start cooperating']}
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="base-box pb50">
          <div className="who-box">
            <div className="who-title">
              <div className="who-title-icon"></div>
              <Typography.Title className="" heading={4}>
                {t['Links']}
              </Typography.Title>
            </div>
            <div className="who-text">
              <div>
                <Link>FACEBOOK</Link>
              </div>
              <div>
                <Link>YOUTUBE</Link>
              </div>
              <div>
                <Link>TIKTOK</Link>
              </div>
              <div>
                <Link>INS</Link>
              </div>
            </div>
          </div>

          <div className="who-box">
            <div className="who-title">
              <div className="who-title-icon"></div>
              <Typography.Title className="" heading={4}>
                {t['Contact Us']}
              </Typography.Title>
            </div>
            <div className="who-text">
              <div>
                <Typography.Text className="">Mail:</Typography.Text>
              </div>
              <div>
                <Typography.Text className="">WhatsApp:</Typography.Text>
              </div>
            </div>
          </div>

          <div className="who-box">
            <div className="right-box border-radius-large">
              <Form
                className="user-form"
                onValuesChange={onValuesChange}
                layout="vertical"
              >
                <Form.Item field="name" label={t['Name']}>
                  <Input />
                </Form.Item>
                <Form.Item field="email" label={t['Email']}>
                  <Input />
                </Form.Item>
                <Form.Item field="nmessage" label={t['Message']}>
                  <Input.TextArea />
                </Form.Item>
              </Form>
              <Button type="primary" long>
                {t['Send']}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
