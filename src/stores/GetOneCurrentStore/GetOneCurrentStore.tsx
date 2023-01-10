import { makeAutoObservable, runInAction } from 'mobx';
import GetCurrentService from 'services/GetCurrentService';

interface IGetOneCurrentStore {
  getCurrentService: GetCurrentService;
  current: any;
}

class GetOneCurrentStore implements IGetOneCurrentStore {
  getCurrentService;
  current;

  constructor() {
    this.current = {};

    makeAutoObservable(this);
    this.getCurrentService = new GetCurrentService();
  }

  async CurrentCity(city) {
    try {
      const response = await this.getCurrentService.getOneCurrent(city);
      runInAction(() => {
        this.current = response.current;
      });
    } catch (e) {
      runInAction(() => {
        console.log(e);
      });
    }
  }

  async CurrentIp() {
    try {
      const response = await this.getCurrentService.getIpCurrent();
      runInAction(() => {
        this.current = response.current;
      });
    } catch (e) {
      runInAction(() => {
        console.log(e);
      });
    }
  }
}

export default GetOneCurrentStore;
