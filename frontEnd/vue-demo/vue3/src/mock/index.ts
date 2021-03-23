//引入mock模块
import Mock from 'mockjs';
import institution from './data/institution'; 
Mock.mock('/login', { //输出数据
    'name': '@name', //随机生成姓名
    //还可以自定义其他数据
});
Mock.mock('/list', { //输出数据
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|198': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        // 'lats':'@float(42.99999,36.11111)',
        // "lngs":'@float(117.99999,115.11111)',
        'lats':'@float(42.99999,36.11111)',
        "lngs":'@float(117.99999,115.11111)',
        "lat":Math.random()*(document.body.clientHeight-300),
        "lng": Math.random()*(document.body.clientWidth-390),
        'cameraName|+1': 1+('号杆枪机'),
        //   Math.random()*($(window).height()-300)
        //   ,Math.random()*($(window).width()-390)
        'searchValue': null,
          'createBy': null,
          'createTime': "2020-11-28 09:17:08",
          'updateBy': null,
          'updateTime': "2021-01-13 03:20:00",
          'remark': null,
          'beginTime': null,
          'endTime': null,
          'params': {},
          'cameraCode': "13073320001319000075",
          'ip': "13.145.169.75",
          'port': 80,
          'cameraType': 0,
          'brandType': 1,
          'orderNumber': null,
          'deptId': null,
          'serverId': "12d5244a9465470a9e74cb7ad1d35ff6",
          'status': 1,
    }]
});
export default Mock