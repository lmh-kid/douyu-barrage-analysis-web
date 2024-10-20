import React, { useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  Slider,
} from '@arco-design/web-react';
import ReactECharts from 'echarts-for-react';
import { getDouYuBarrageAnalyze } from '@/api/douyu';

const RadioGroup = Radio.Group;

function Home() {
  const [form] = Form.useForm();
  const [sectionList, setSectionList] = React.useState<any>([]);
  const [eChartData, setEChartData] = React.useState<any>({});
  const [formData, setFormData] = React.useState<any>({
    upId: '8bLA6mVnbdMa',
    requestUrl: '',
    sectionIndex: 0,
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  const zhuboList = [
    {
      label: '衣锦夜行',
      value: '8bLA6mVnbdMa',
    },
    {
      label: 'AMS、AMS',
      value: '8PAbV5x38AO1',
    },
  ];

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
        trigger: 'axis',
        formatter: (params) => {
          const index = params[0].dataIndex;
          const tooltipContent = params[0].value;
          const tooltipArray = [
            `时间: ${params[0].axisValueLabel}`,
            `弹幕总数: ${tooltipContent}`,
            `————————————弹幕详情————————————`,
            `${eChartData?.list?.tooltip?.[index]
              ?.map((i) => {
                return (
                  '<span style="width: 410px;display: inline-block;overflow: hidden;">' +
                  i.content +
                  '(' +
                  i.count +
                  ')' +
                  '</span>'
                );
              })
              ?.join('<br/>')}`,
          ];
          return tooltipArray?.join('<br/>');
        },
      },
      animation: false,
      series: [
        {
          data: eChartData?.list?.data,
          type: 'line',
        },
      ],
    };
  }, [
    eChartData?.list?.data,
    eChartData?.list?.tooltip,
    eChartData?.list?.xAxis,
  ]);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await getDouYuBarrageAnalyze({
        upId: formData.upId,
        requestUrl: formData.requestUrl,
        timeStep: formData.timeStep,
      });
      setLoading(false);
      setSectionList(res);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setEChartData(sectionList[formData.sectionIndex]);
  }, [sectionList, formData.sectionIndex]);

  return (
    <div className="base-page">
      <div className="top-card-bg-box">
        <Form
          form={form}
          initialValues={formData}
          onValuesChange={(value, values) => {
            setFormData(values);
          }}
        >
          {/* 主播Id */}
          <Form.Item
            field="upId"
            required
            rules={[{ required: true, message: '请输入主播Uid' }]}
            label="主播"
          >
            <Select
              className="w400"
              allowCreate={true}
              options={zhuboList}
            ></Select>
          </Form.Item>
          {/* 弹幕统计间隔 */}
          <Form.Item field="timeStep" required label="弹幕统计间隔(秒)">
            <Slider
              defaultValue={6}
              showInput
              className="w400"
              min={1}
              max={30}
            />
          </Form.Item>
          {/* 回放地址 */}
          <Form.Item
            required
            rules={[{ required: true, message: '请输入回放地址' }]}
            field="requestUrl"
            label="回放地址"
          >
            <Input className="w400" />
          </Form.Item>
          {/* 请求数据 */}
          <Form.Item label=" ">
            <Button
              type="primary"
              loading={loading}
              className="w400 mb20"
              onClick={() => {
                form.validate((res: any) => {
                  if (!res) {
                    getData();
                  }
                });
              }}
            >
              请求数据
            </Button>
          </Form.Item>
          <Form.Item field="sectionIndex" label="场次">
            <RadioGroup
              options={sectionList.map(
                (i: { show_remark: any }, index: any) => {
                  return {
                    label: i.show_remark,
                    value: index,
                  };
                }
              )}
              size="default"
              type="button"
              style={{ marginBottom: 20 }}
            />
          </Form.Item>
        </Form>
      </div>
      <div style={{ width: '100%', height: '600px' }}>
        <ReactECharts
          style={{ width: '100%', height: '100%' }}
          option={option}
        />
      </div>
    </div>
  );
}

export default Home;
