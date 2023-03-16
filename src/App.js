import logo from './logo.svg';
import board from './images/board.png';
import './App.css';
import { Space, Select, Input, Form, Row, Col, Typography, Button } from 'antd';

function App() {
  const options = [
    {
      value: 0x00,
      label: '普通键',
    },
    {
      value: 0x01,
      label: '功能键',
    },
    {
      value: 0x02,
      label: '多媒体',
    },
    {
      value: 0x03,
      label: '组合键',
    },
    {
      value: 0x04,
      label: '字符串',
    },
  ];
  const keys = [
    {
      type: 0x00,
      code: '',
      extendCode: '',
      label: 'key1'
    },
    {
      type: 0x00,
      code: '',
      extendCode: '',
      label: 'key2'
    },
    {
      type: 0x00,
      code: '',
      extendCode: '',
      label: 'key3'
    },
    {
      type: 0x00,
      code: '',
      extendCode: '',
      label: 's1'
    },
    {
      type: 0x00,
      code: '',
      extendCode: '',
      label: 's2'
    },
    {
      type: 0x00,
      code: '',
      extendCode: '',
      label: 's3'
    },
    {
      type: 0x00,
      code: '',
      extendCode: '',
      label: 's4'
    },
    {
      type: 0x00,
      code: '',
      extendCode: '',
      label: 's5'
    },
    {
      type: 0x00,
      code: '',
      extendCode: '',
      label: 's6'
    },
  ];
  const [form] = Form.useForm();
  const ItemKey = ({ field }) => {
    const { name: index} = field;
    const { label } = keys[index];
    return (
      <Form.Item style={{ display: 'flex', flexDirection: 'column' }} noStyle key={index}>
        <span>{label}</span>
        <Space.Compact style={{ margin: '20px 10px' }}>
          <Form.Item
            {...field}
            noStyle
            name={[field.name, 'type']}
            key={index + 'type'}
          >
            <Select options={options} style={{ width: 84 }} />
          </Form.Item>
          <Form.Item
            {...field}
            noStyle
            name={[field.name, 'code']}
            key={index + 'code'}
          >
            <Input placeholder='按键' style={{ width: 70 }} maxLength={1} showCount/>
          </Form.Item>
          <Form.Item
            {...field}
            noStyle
            name={[field.name, 'extendCode']}
            key={index + 'extendCode'}
          >
            <Input placeholder='按键2' style={{ width: 70 }} />
          </Form.Item>
        </Space.Compact>
      </Form.Item>
    )
  }

  const finish = () => {
    const values = form.getFieldsValue();
    console.log(values, '1');
  }
  return (
    <div className="App">
      <div className='header'>
        <Space >
          <Button type='primary' size='small' onClick={finish}>Finish</Button>
          <Button size='small'>Connect</Button>
        </Space>
      </div>
      <Form className="content" form={form}>
        <Form.List initialValue={keys} name='list'>
          {(fields) => {
            return <>
              <Row className='row' justify='space-around'>
                <Col>
                  <ItemKey field={fields[5]} />
                </Col>
                <Col>
                <ItemKey field={fields[7]} />
                </Col>
              </Row>
              <img src={board} className='App-logo' />
              <Row className='row' justify='space-around'>
                <Col>
                <ItemKey field={fields[6]} />
                </Col>
                <Col>
                <ItemKey field={fields[8]} />
                </Col>
              </Row>
              <div className='leftSide'>
                <Row className='row'>
                  <Col>
                  <ItemKey field={fields[3]} />
                  </Col>
                  <Col>
                  <ItemKey field={fields[4]} />
                  </Col>
                </Row>
              </div>
              {/* 主键 */}
              <Typography.Title
                level={3}
              >主键</Typography.Title>
              <div>
                <Row className='row' justify='space-evenly'>
                  <Col>
                  <ItemKey field={fields[0]} />
                  </Col>
                  <Col>
                  <ItemKey field={fields[1]} />
                  </Col>
                  <Col>
                  <ItemKey field={fields[2]} />
                  </Col>
                </Row>
              </div>
            </>
          }
          }
        </Form.List>
      </Form>
    </div>
  );
}

export default App;
