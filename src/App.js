import logo from './logo.svg';
import board from './images/board.png';
import './App.css';
import { Space, Select, Input, Form, Row, Col, Typography } from 'antd';

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
      label: '多媒体键',
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
      label: 'key1'
    },
    {
      type: 0x00,
      code: '',
      label: 'key2'
    },
    {
      type: 0x00,
      code: '',
      label: 'key3'
    },
    {
      type: 0x00,
      code: '',
      label: 's1'
    },
    {
      type: 0x00,
      code: '',
      label: 's2'
    },
    {
      type: 0x00,
      code: '',
      label: 's3'
    },
    {
      type: 0x00,
      code: '',
      label: 's4'
    },
    {
      type: 0x00,
      code: '',
      label: 's5'
    },
    {
      type: 0x00,
      code: '',
      label: 's6'
    },
  ];
  const Item = ({ item }) => {
    const { label } = item;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{label}</span>
        <Space.Compact style={{ margin: '20px 10px' }}>
          <Select defaultValue={0x00} options={options} style={{ width: 84 }} />
          <Input placeholder='按键' style={{ width: 70 }} />
          <Input placeholder='按键2' style={{ width: 70 }} />
        </Space.Compact>
      </div>

    )
  }
  return (
    <div className="App">
      <Form className="content">
        {/* {
          keys.map((item) => <Item item={item}  key={item.label}/>)
        } */}
        <Row className='row' justify='space-around'>
          <Col>
            <Item item={keys[5]} />
          </Col>
          <Col>
            <Item item={keys[7]} />
          </Col>
        </Row>
        <img src={board} className='App-logo' />
        <Row className='row' justify='space-around'>
          <Col>
            <Item item={keys[6]} />
          </Col>
          <Col>
            <Item item={keys[8]} />
          </Col>
        </Row>
        <div className='leftSide'>
          <Row className='row'>
            <Col>
              <Item item={keys[3]} />
            </Col>
            <Col>
              <Item item={keys[4]} />
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
              <Item item={keys[0]} />
            </Col>
            <Col>
              <Item item={keys[1]} />
            </Col>
            <Col>
              <Item item={keys[2]} />
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
}

export default App;
