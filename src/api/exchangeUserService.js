// import qs from 'qs';
import Restful from "./restful";

class ExchangeUserService {
  /*
   * 获取首页轮播图
   * */

  async getAdvertList() {
    return Restful.post(`/hex_exchange_service/index.php/advert/list`);
  }

  /*
   *获取公告列表
   * */
  async getNoticeList() {
    return Restful.post("/hex_exchange_service/index.php/notice/list");
  }
}

export default new ExchangeUserService();
