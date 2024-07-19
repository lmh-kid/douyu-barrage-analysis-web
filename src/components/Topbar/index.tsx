import React from 'react';
// import Logo from '@/assets/logo.svg';
import styles from './style/index.module.less';
import { Button, Space } from '@arco-design/web-react';
import { IconDelete } from '@arco-design/web-react/icon';

function Topbar({ show }: { show: boolean }) {
  if (!show) {
    return <></>;
  }

  return (
    <div className={styles.navbar}>
      {/* <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
          <div className={styles['logo-name']}>Arco Pro</div>
        </div>
      </div> */}
      <div className={styles.cneter}>
        <Space>
          <Button type='primary' icon={<IconDelete />}>
            首页
          </Button>
          <Button type='primary' icon={<IconDelete />}>
            文章
          </Button>
          <Button type='primary' icon={<IconDelete />}>
            游戏
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default Topbar;
