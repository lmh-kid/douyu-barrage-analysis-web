import React from 'react';
import { Form, Select, Space } from '@arco-design/web-react';
import ReactECharts from 'echarts-for-react';
import { getDouYuBarrageAnalyze } from '@/api/douyu';

function Dashboard() {
  const [sectionList, setSectionList] = React.useState<any>([]);
  const [eChartData, setEChartData] = React.useState<any>({});

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

  const getData = React.useCallback(async () => {
    const res = await getDouYuBarrageAnalyze({
      upId: '8bLA6mVnbdMa',
      requestUrl: 'https://v.douyu.com/show/Aox276YDRRKvVz8Z',
    });
    setSectionList(res);
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  React.useEffect(() => {
    console.log('sectionList', sectionList);
  }, [sectionList]);

  return (
    <div className="base-page">
      <div className="top-card-bg-box">
        <Form>
          <Form.Item label="场次">
            <Select
              className="w400"
              options={sectionList.map((i, index) => {
                return {
                  label: i.title,
                  value: index,
                };
              })}
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

export default Dashboard;
