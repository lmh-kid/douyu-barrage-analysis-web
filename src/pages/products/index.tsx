import React from 'react';
import { Typography, Card, Space } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from '@/locale';

function Products() {
  const t = useLocale(locale);

  return (
    <div className="base-page">
      <div className="top-card-bg-box"></div>
      <div>
        <div className="base-box pt20 pb20">
          <Space>
            <Card bordered>
              {`ByteDance's core product, Toutiao, is a content platform in China and around
            the world. Toutiao started out as a news recommendation engine and gradually evolved into a
            platform delivering content in various formats.`}
            </Card>
            <Card bordered>
              {`ByteDance's core product, Toutiao, is a content platform in China and around
            the world. Toutiao started out as a news recommendation engine and gradually evolved into a
            platform delivering content in various formats.`}
            </Card>
            <Card bordered>
              {`ByteDance's core product, Toutiao, is a content platform in China and around
            the world. Toutiao started out as a news recommendation engine and gradually evolved into a
            platform delivering content in various formats.`}
            </Card>
            <Card bordered>
              {`ByteDance's core product, Toutiao, is a content platform in China and around
            the world. Toutiao started out as a news recommendation engine and gradually evolved into a
            platform delivering content in various formats.`}
            </Card>
            <Card bordered>
              {`ByteDance's core product, Toutiao, is a content platform in China and around
            the world. Toutiao started out as a news recommendation engine and gradually evolved into a
            platform delivering content in various formats.`}
            </Card>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Products;
