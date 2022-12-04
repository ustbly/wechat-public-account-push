/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx42c85191605adef8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '625717b0a56ffb4bc2721dc988315339',

  PROVINCE: '山东',
  CITY: '青岛',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9g255uyJbyb-vikk1HiE2X7HsfU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mpayLGlRU4uehcdeZZpoPmFQgc-pc8BtVz17ftGNhTI',
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
      id: 'o9g255rQtpDCY8e1lsqToFSPP8vI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mpayLGlRU4uehcdeZZpoPmFQgc-pc8BtVz17ftGNhTI',
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
  //CALLBACK_TEMPLATE_ID: 'aWKQ5GsZj5h96PLKYJwhytX1k45L6XDLml7oyEGegOk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9g255rQtpDCY8e1lsqToFSPP8vI',
    }
  ],

}

module.exports = USER_CONFIG

