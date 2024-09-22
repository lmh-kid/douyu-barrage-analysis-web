import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  Modal,
  Space,
  Typography,
} from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from '@/locale';

import '@/style/common.less';
import './index.less';

function SendMailModal(props) {
  const t = useLocale(locale);
  const [formData, setFormData] = useState({});
  const { visible, setVisible } = props;

  const onValuesChange = (value, values) => {
    setFormData(values);
  };

  return (
    <Modal
      className="user-modal"
      visible={visible}
      onCancel={setVisible}
      footer={null}
    >
      <Typography.Title className="" heading={1}>
        {t['Contact Us']}
      </Typography.Title>
      <Form
        className="user-form"
        onValuesChange={onValuesChange}
        layout="vertical"
      >
        <Form.Item label={null} noStyle>
          <Space>
            <Form.Item field="name" label={t['Name']}>
              <Input style={{ width: '206px' }} />
            </Form.Item>
            <Form.Item field="email" label={t['Email']}>
              <Input style={{ width: '206px' }} />
            </Form.Item>
          </Space>
        </Form.Item>

        <Form.Item label={null} noStyle>
          <Space>
            <Form.Item field="phone" label={t['Phone']}>
              <Input style={{ width: '206px' }} />
            </Form.Item>
            <Form.Item field="country" label={t['Country']}>
              <Input style={{ width: '206px' }} />
            </Form.Item>
          </Space>
        </Form.Item>

        <Form.Item field="nmessage" label={t['Message']}>
          <Input.TextArea />
        </Form.Item>
      </Form>
      <Button type="primary" long>
        {t['Send']}
      </Button>
    </Modal>
  );
}

export default SendMailModal;
