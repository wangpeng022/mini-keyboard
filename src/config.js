/*
 * @Description: 
 * @version: 
 * @Author: 王鹏
 * @Date: 2023-03-17 10:02:04
 * @LastEditors: 王鹏
 * @LastEditTime: 2023-03-17 10:59:41
 */
export const keyTypes = [
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
export const keys = [
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
export const fnOptions = [
  {
    label:'KEY_LEFT_CTRL',
    value: 0x80,
  },
  {
    label:'KEY_LEFT_SHIFT',
    value: 0x81,
  },
  {
    label:'KEY_LEFT_ALT',
    value: 0x82,
  },
  {
    label:'KEY_LEFT_WIN/COMMAND',
    value: 0x83,
  },
  {
    label:'KEY_RIGHT_CTRL',
    value: 0x84,
  },
  {
    label:'KEY_RIGHT_SHIFT',
    value: 0x85,
  },
  {
    label:'KEY_RIGHT_ALT',
    value: 0x86,
  },
  {
    label:'KEY_RIGHT_WIN/COMMAND',
    value: 0x87,
  },
  {
    label:'KEY_UP_ARROW',
    value: 0xDA,
  },
  {
    label:'KEY_DOWN_ARROW',
    value: 0xD9,
  },
  {
    label:'KEY_LEFT_ARROW',
    value: 0xD8,
  },
  {
    label:'KEY_RIGHT_ARROW',
    value: 0xD7,
  },
  {
    label:'KEY_BACKSPACE',
    value: 0xB2,
  },
  {
    label:'KEY_TAB',
    value: 0xB3,
  },
  {
    label:'KEY_RETURN',
    value: 0xB0,
  },
  {
    label:'KEY_ESC',
    value: 0xB1,
  },
  {
    label:'KEY_INSERT',
    value: 0xD1,
  },
  {
    label:'KEY_DELETE',
    value: 0xD4,
  },
  {
    label:'KEY_PAGE_UP',
    value: 0xD3,
  },
  {
    label:'KEY_PAGE_DOWN',
    value: 0xD6,
  },
  {
    label:'KEY_HOME',
    value: 0xD2,
  },
  {
    label:'KEY_END',
    value: 0xD5,
  },
  {
    label:'KEY_CAPS_LOCK',
    value: 0xC1,
  },
  {
    label:'KEY_F1',
    value: 0xC2,
  },
  {
    label:'KEY_F2',
    value: 0xC3,
  },
  {
    label:'KEY_F3',
    value: 0xC4,
  },
  {
    label:'KEY_F4',
    value: 0xC5,
  },
  {
    label:'KEY_F5',
    value: 0xC6,
  },
  {
    label:'KEY_F6',
    value: 0xC7,
  },
  {
    label:'KEY_F7',
    value: 0xC8,
  },
  {
    label:'KEY_F8',
    value: 0xC9,
  },
  {
    label:'KEY_F9',
    value: 0xCA,
  },
  {
    label:'KEY_F10',
    value: 0xCB,
  },
  {
    label:'KEY_F11',
    value: 0xCC,
  },
  {
    label:'KEY_F12',
    value: 0xCD,
  },
  {
    label:'KEY_F13',
    value: 0xF0,
  },
  {
    label:'KEY_F14',
    value: 0xF1,
  },
  {
    label:'KEY_F15',
    value: 0xF2,
  },
  {
    label:'KEY_F16',
    value: 0xF3,
  },
  {
    label:'KEY_F17',
    value: 0xF4,
  },
  {
    label:'KEY_F18',
    value: 0xF5,
  },
  {
    label:'KEY_F19',
    value: 0xF6,
  },
  {
    label:'KEY_F20',
    value: 0xF7,
  },
  {
    label:'KEY_F21',
    value: 0xF8,
  },
  {
    label:'KEY_F22',
    value: 0xF9,
  },
  {
    label:'KEY_F23',
    value: 0xFA,
  },
  {
    label:'KEY_F24',
    value: 0xFB,
  }
];
export const mediaOptions = [
  {
    label:'CONSUMER_POWER',
    value: 0x30,
  },
  {
    label:'CONSUMER_SLEEP',
    value: 0x32,
  },
  {
    label:'MEDIA_RECORD',
    value: 0xB2,
  },
  {
    label:'MEDIA_FAST_FORWARD',
    value: 0xB3,
  },
  {
    label:'MEDIA_REWIND',
    value: 0xB4,
  },
  {
    label:'MEDIA_NEXT',
    value: 0xB5,
  },
  {
    label:'MEDIA_PREVIOUS',
    value: 0xB6,
  },
  {
    label:'MEDIA_STOP',
    value: 0xB7,
  },
  {
    label:'MEDIA_PLAY_PAUSE',
    value: 0xCD,
  },
  {
    label:'MEDIA_PAUSE',
    value: 0xB0,
  },
  {
    label:'MEDIA_VOLUME_MUTE',
    value: 0xE2,
  },
  {
    label:'MEDIA_VOLUME_UP',
    value: 0xE9,
  },
  {
    label:'MEDIA_VOLUME_DOWN',
    value: 0xEA,
  },
  {
    label:'CONSUMER_BRIGHTNESS_UP',
    value: 0x06F,
  },
  {
    label:'CONSUMER_BRIGHTNESS_DOWN',
    value: 0x70F,
  },
  {
    label:'CONSUMER_SCREENSAVER',
    value: 0x19e,
  },
  {
    label:'CONSUMER_PROGRAMMABLE_BUTTON_CONFIGURATION',
    value: 0x182,
  },
  {
    label:'CONSUMER_CONTROL_CONFIGURATION',
    value: 0x183,
  },
  {
    label:'CONSUMER_EMAIL_READER',
    value: 0x18A,
  },
  {
    label:'CONSUMER_CALCULATOR',
    value: 0x192,
  },
  {
    label:'CONSUMER_EXPLORER',
    value: 0x194,
  },
  {
    label:'CONSUMER_BROWSER_HOME',
    value: 0x223,
  },
  {
    label:'CONSUMER_BROWSER_BACK',
    value: 0x224,
  },
  {
    label:'CONSUMER_BROWSER_FORWARD',
    value: 0x225,
  },
  {
    label:'CONSUMER_BROWSER_REFRESH',
    value: 0x227,
  },
  {
    label:'CONSUMER_BROWSER_BOOKMARKS',
    value: 0x22A,
  },

];