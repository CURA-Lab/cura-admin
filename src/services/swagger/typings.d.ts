declare namespace API {
  type AddHouseDto = {
    /** 纬度 */
    latitude: string;
    /** 经度 */
    longitude: string;
    /** 半径，单位公里 */
    radius: number;
    /** 房屋图片地址 */
    avatar: string;
  };

  type AddLocationDto = {
    /** google place id */
    placeId: string;
    /** walk id */
    walkId: string;
    /** 类型：0 公园，1 酒店，2 餐厅 */
    type: number;
    /** 0不友好，1友好 */
    petFriendly: number;
    /** 地点得分 */
    score: string;
    /** 评价 */
    comment: string;
  };

  type AddPetDto = {
    name: string;
    avatar: string;
    type: string;
    breed: string;
    description: string;
    birth: string;
  };

  type BraceletAlarmDto = {
    /** 硬件标识 */
    imei: string;
    /** 时间戳 */
    time: string;
    /** 告警类型：0 低电量，1 关机，2 摘除 */
    type: number;
    /** 告警信息 */
    info: string;
  };

  type BraceletReportDto = {
    /** 硬件标识 */
    imei: string;
    /** 时间戳 */
    time: string;
    /** 今天的总步数 */
    steps: number;
    /** 今天的总卡路里 */
    calories: string;
    /** 今天的总运动距离 */
    distance: string;
  };

  type BraceletStatusReportDto = {
    /** 硬件标识 */
    imei: string;
    /** 时间戳 */
    time: string;
    /** 电量百分比 */
    battery: string;
    /** 纬度 */
    latitude: string;
    /** 经度 */
    longitude: string;
  };

  type DeviceBindPetDto = {
    imei: string;
    petId: string;
  };

  type DirectionsDto = {
    /** 起始经度 */
    originLongitude: string;
    /** 起始纬度 */
    originLatitude: string;
    /** 目标经度 */
    destinationLongitude: string;
    /** 目标纬度 */
    destinationLatitude: string;
  };

  type EndWalkDto = {
    /** walk id */
    walkId: string;
    /** 卡路里 */
    calories: string;
    /** 距离 */
    distance: string;
  };

  type FileUploadDto = {
    file: string;
  };

  type GetNearByDto = {
    /** 经度 */
    longitude: string;
    /** 纬度 */
    latitude: string;
    /** 半径，单位公里 */
    radius: number;
    /** 关键词 */
    keyword: string;
  };

  type House = {
    /** 用户id */
    userId: string;
    /** 经度 */
    longitude: string;
    /** 纬度 */
    latitude: string;
    /** 房子半径，单位米 */
    radius: number;
    /** 头像图片地址 */
    avatar: string;
  };

  type IntroduceResponse = {
    /** 总用户数量 */
    userCount: number;
    /** 总宠物数量 */
    petCount: number;
    /** 未捡宝箱数量 */
    treasureCount: number;
    /** 已捡宝箱数量 */
    treasureHistoryCount: number;
    /** 总奖励 */
    tatalReward: number;
  };

  type LocationCommentListDto = {
    /** 页码 */
    index: number;
    /** 数量 */
    size: number;
    /** google place id */
    placeId: string;
  };

  type LocationControllerMetadataParams = {
    placeId: string;
  };

  type LoginByEmailDto = {
    email: string;
    password: string;
  };

  type LoginByWalletDto = {
    wallet: string;
    signature: string;
    publicKey: string;
  };

  type PageBaseDto = {
    /** 页码 */
    index: number;
    /** 数量 */
    size: number;
  };

  type PetListRequest = {
    /** 页码 */
    index: number;
    /** 数量 */
    size: number;
    /** pet id */
    id: string;
    /** 用户id */
    userId: string;
  };

  type RegisterDto = {
    email: string;
    password: string;
    verifyCode: string;
  };

  type StatBase = {
    /** 日期 */
    days: string;
    /** 数量 */
    count: number;
  };

  type StatBaseDto = {
    /** 统计开始时间 */
    start?: string;
    /** 统计结束时间 */
    end?: string;
  };

  type UpdateUserDto = {
    name: string;
    avatar: string;
  };

  type User = {
    /** 主键 */
    id: string;
    /** 钱包地址 */
    wallet: string;
    /** 邮箱地址 */
    email: string;
    /** 密码，若为空，则不支持密码登陆 */
    password: string;
    /** 昵称 */
    name: string;
    /** 头像图片地址 */
    avatar: string;
    /** 0.普通用户 1.管理员 */
    role: number;
    /** 骨头数量 */
    boneCount: number;
    /** 0.禁用，1.正常 */
    status: number;
    /** 创建时间 */
    createAt: string;
  };

  type UserDetail = {
    /** 主键 */
    id: string;
    /** 钱包地址 */
    wallet: string;
    /** 邮箱地址 */
    email: string;
    /** 密码，若为空，则不支持密码登陆 */
    password: string;
    /** 昵称 */
    name: string;
    /** 头像图片地址 */
    avatar: string;
    /** 0.普通用户 1.管理员 */
    role: number;
    /** 骨头数量 */
    boneCount: number;
    /** 0.禁用，1.正常 */
    status: number;
    /** 创建时间 */
    createAt: string;
    /** 房子 */
    house: House;
    /** 宝箱数量 */
    treasureCount: number;
    /** 总奖励 */
    tatalReward: string;
  };

  type UserListRequest = {
    /** 页码 */
    index: number;
    /** 数量 */
    size: number;
    /** 用户id */
    id: string;
    /** 邮箱 */
    email: string;
    /** 钱包 */
    wallet: string;
  };

  type Walk = {
    /** 用户id */
    userId: string;
    /** 宠物id */
    petId: string;
    /** 卡路里 */
    calories: string;
    /** 距离 */
    distance: string;
  };
}
