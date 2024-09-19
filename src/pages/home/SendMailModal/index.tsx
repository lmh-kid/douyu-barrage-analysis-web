import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from '@/locale';

import '@/style/common.less';

function SendMailModal(props) {
  const t = useLocale(locale);
  const [formData, setFormData] = useState({});
  const { visible, setVisible } = props;

  const onValuesChange = (value, values) => {
    setFormData(values);
  };

  return (
    <Modal visible={visible} onCancel={setVisible} footer={null}>
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
    </Modal>
  );
}

export default SendMailModal;
