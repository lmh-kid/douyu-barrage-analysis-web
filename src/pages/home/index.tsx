import React from 'react';
import { Button, Form, Input, Radio, Select } from '@arco-design/web-react';
import ReactECharts from 'echarts-for-react';
import { getDouYuBarrageAnalyze } from '@/api/douyu';

const RadioGroup = Radio.Group;

function Home() {
  const [sectionList, setSectionList] = React.useState<any>([]);
  const [eChartData, setEChartData] = React.useState<any>({});
  const [formData, setFormData] = React.useState<any>({
    upId: '8bLA6mVnbdMa',
    requestUrl: 'https://v.douyu.com/show/ERALvEq8kE1v1Vw0'
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  const option = React.useMemo(() => {
    return {
      xAxis: {
        type: 'category',
        data: eChartData?.list?.xAxis,
      },
      yAxis: {
        type: 'value',
      },
      tooltip: {
        trigger: 'axis'
      },
      animation: false,
      series: [
        {
          data: eChartData?.list?.data,
          type: 'line',
        },
      ],
    };
  }, [eChartData?.list?.data, eChartData?.list?.xAxis]);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await getDouYuBarrageAnalyze(formData);
      setLoading(false);
      setSectionList(res);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="base-page">
      <div className="top-card-bg-box">
        <Form initialValues={formData} onValuesChange={(value, values) => {
          console.log('values', values);
          setFormData(values);
        }}>
          <Form.Item field="upId" label="主播">
            <Select className="w400" options={[{
              label: '衣锦夜行',
              value: '8bLA6mVnbdMa',
            }]}></Select>
          </Form.Item>
          <Form.Item field="requestUrl" label="回放地址">
            <Input className="w400" />
          </Form.Item>
          <Form.Item label=" ">
            <Button type='primary' loading={loading} className="w400 mb20" onClick={getData}>请求数据</Button>
          </Form.Item>
          <Form.Item label="场次">
            <RadioGroup
              options={sectionList.map((i, index) => {
                return {
                  label: i.show_remark,
                  value: index,
                };
              })}
              size='default'
              type='button'
              defaultValue='Beijing'
              style={{ marginBottom: 20 }}
              onChange={(value) => {
                setEChartData(sectionList?.[value]);
              }}
            />
          </Form.Item>
        </Form>
      </div>
      <div style={{ width: '100%', height: '600px' }}>
        <ReactECharts style={{ width: '100%', height: '100%' }} option={option} />
      </div>
    </div>
  );
}

export default Home;
