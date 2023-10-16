/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx50477d779fcf8a5a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e16800d148a05b849a99f06a3bed04a9',

  PROVINCE: '山东',
  CITY: '青岛',
  BIRTHDAY1: 'r1998-09-29',
  BIRTHDAY2: 'r1997-12-21',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNL8H6R3DqiA0M2ipc1EBYzlM9s4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'dRjMf85cn6OBObbZeRCN-0S_ek8h4cSd6nTj1uFxIuQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '胖虎', year: '1998', date: '09-29',
        },
        {
          type: '*生日', name: 'Vayne', year: '1997', date: '12-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        //{
          //type: '生日', name: 'Vayne', year: '1998', date: '01-19',
        //},
        //{
          //type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        //},
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-12-01' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNL8H6djv1jv0_nkOj9DkGgMi2TQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'dRjMf85cn6OBObbZeRCN-0S_ek8h4cSd6nTj1uFxIuQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'Vayne', year: '1997', date: '12-21',
        },
        {
          type: '*生日', name: '胖虎', year: '1998', date: '09-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-12-01' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '83KqcNikt4h3tZdHX1sDobS2el0xWvRrgVYK88teArc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNL8H6djv1jv0_nkOj9DkGgMi2TQ',
    }
  ],

}

module.exports = USER_CONFIG

