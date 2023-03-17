import logo from './logo.svg';
import board from './images/board.png';
import './App.css';
import { Space, Select, Input, Form, Row, Col, Typography, Button, message } from 'antd';
import { useRef, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { keyTypes, keys, fnOptions, mediaOptions } from './config';



function App() {
  // 连接状态
  const [connected, setConnected] = useState(false);

  const port = useRef();
  const writer = useRef();
  const reader = useRef();


  const [form] = Form.useForm();
  const ItemKey = ({ field }) => {
    const { name: index } = field;
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
            <Select options={keyTypes} style={{ width: 84 }} />
          </Form.Item>
          <Form.Item noStyle shouldUpdate>
            {({ getFieldValue }) => {
              const type = getFieldValue(['list', index, 'type']);
              switch (type) {
                case 0:
                  return <Form.Item
                    {...field}
                    noStyle
                    name={[field.name, 'code']}
                    key={index + 'code'}
                  >
                    <Input placeholder='按键' style={{ width: 70 }} maxLength={1} showCount />
                  </Form.Item>
                case 1:
                  return <Form.Item
                    {...field}
                    noStyle
                    name={[field.name, 'code']}
                    key={index + 'code'}
                  >
                    <Select options={fnOptions} style={{ width: 180 }} />
                  </Form.Item>

                // 多媒体
                case 2:
                  return <Form.Item
                    {...field}
                    noStyle
                    name={[field.name, 'code']}
                    key={index + 'code'}
                  >
                    <Select options={mediaOptions} style={{ width: 180 }} />
                  </Form.Item>
                // 组合
                case 3:
                  return (
                    <Form.Item noStyle>
                      <Form.Item
                        {...field}
                        noStyle
                        name={[field.name, 'code']}
                        key={index + 'code'}
                      >
                        <Input placeholder='按键' style={{ width: 70 }} maxLength={1} showCount />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        noStyle
                        name={[field.name, 'extendCode']}
                        key={index + 'extendCode'}
                      >
                        <Input placeholder='按键2' style={{ width: 70 }} maxLength={1} showCount />
                      </Form.Item>
                    </Form.Item>
                  );
                // 字符串
                case 4:
                  return <Form.Item
                    {...field}
                    noStyle
                    name={[field.name, 'code']}
                    key={index + 'code'}
                  >
                    <Input placeholder='字符串' style={{ width: 270 }} maxLength={30} showCount />
                  </Form.Item>
                default:
                  break;
              }
            }}
          </Form.Item>
        </Space.Compact>
      </Form.Item>
    )
  }

  const sendQuery = async () => {
    const data = new Uint8Array([0x02, 0x03]);
    await writer.current.write(data);
  }
  class LineBreakTransformer {
    constructor() {
      // 保存流数据直到新行出现的容器
      this.container = "";
    }

    transform(chunk, controller) {
      // 将新块追加到现有块。
      this.container += chunk;
      if (this.container == "1") {
        this.container = "";
        controller.enqueue("1");
      }
      else {
        // 对于每一行分段，将解析后的行发送出去。
        const lines = this.container.split("\r\n");
        this.container = lines.pop();
        lines.forEach((line) => controller.enqueue(line));
      }
    }

    flush(controller) {
      // 当流关闭时，清除所有剩余的块。
      controller.enqueue(this.container);
    }
  }

  /**
   * @name: 
   * @msg: 连接串口
   * @author: 王鹏
   * @return {*}
   */
  const connectSerial = async () => {
    const filters = [
      { usbVendorId: 0x1209, usbProductId: 0xC550 }
    ];
    try {
      port.current = await navigator.serial.requestPort({ filters });
      await port.current.open({ baudRate: 115200 });
      writer.current = port.current.writable.getWriter();
      // eslint-disable-next-line
      const decoder = new TextDecoderStream();
      const readableStreamClosed = port.current.readable.pipeTo(decoder.writable);

      const inputStream = decoder.readable;
      // eslint-disable-next-line
      reader.current = decoder.readable.pipeThrough(new TransformStream(new LineBreakTransformer())).getReader();

      await sendQuery();
      setConnected(true);


    } catch (error) {
      if (error.name == 'NotFoundError') {
        return;
      }
      else if (error.name == 'InvalidStateError' || error.name == 'NetworkError') {
        message.warning('端口已占用,连接失败!');
      }
      else {
        message.warning('连接失败,原因:' + error);
      }
    }
  }

  const disconnectSerial = async () => {
    try {
      await reader.current.cancel();
      await reader.current.releaseLock();
      await writer.current.close();
      await writer.current.releaseLock();
      await port.current.close();
      setConnected(false);
    } catch (e) {
      await sendQuery();
      message.warning('断开连接失败!');
      console.log(e);
    }
  }

  const finish = () => {
    const values = form.getFieldsValue();
    console.log(values, '1');
  }
  return (
    <div className="App">
      <div className='header'>
        <Space >
          <Button type='primary' size='small' onClick={finish} disabled={!connected}>Finish</Button>
          {
            connected ? <Button size='small' icon={<CloseOutlined />} onClick={disconnectSerial} /> : <Button size='small' onClick={connectSerial}>Connect</Button>
          }

        </Space>
      </div>
      <Form 
        className="content" 
        form={form}
        onValuesChange={(changedValues, allValues)=>{
          console.log(changedValues,'changedValueschangedValues');
          const { list=[] } = changedValues;
          list.forEach((item, index)=>{
            if (item && item.type) {
              form.setFieldValue(['list', index, 'code'], '')
            }
          });
        }}
      >
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
