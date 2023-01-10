import { makeAutoObservable } from 'mobx';

interface ICurrent {
  _id: string;
  city: string;
  temp: number;
  desc: string;
  min: number;
  max: number;
  humidity: number;

  updateDate: Date;
  creationDate: Date;
}

class Current implements ICurrent {
  _id;
  city;
  temp;
  desc;
  min;
  max;
  humidity;
  updateDate;
  creationDate;

  constructor() {
    this._id = '';
    this.city = '';
    this.temp = '';
    this.desc = '';
    this.min = '';
    this.max = '';
    this.humidity = '';
    this.updateDate = '';
    this.creationDate = '';
    makeAutoObservable(this);
  }

  // =====================================
  //  setters
  // =====================================
  setCity(city) {
    this.city.setValue(city);
  }

  setTemp(temp) {
    this.temp.setValue(temp);
  }
  setDesc(desc) {
    this.desc.setValue(desc);
  }
  setMin(min) {
    this.min.setValue(min);
  }
  setMax(max) {
    this.max.setValue(max);
  }
  setHumidity(humidity) {
    this.humidity.setValue(humidity);
  }

  // =====================================
  //  getters
  // =====================================
  getCity() {
    return this.city.value;
  }
  getTemp() {
    return this.temp.value;
  }
  getDesc() {
    return this.desc.value;
  }
  getMin() {
    return this.min.value;
  }
  getMax() {
    return this.max.value;
  }
  getHumidity() {
    return this.humidity.value;
  }
  getJson(forStorage) {
    if (forStorage) {
      return {
        _id: this._id,
        city: this.city.value,
        temp: this.temp.value,
        desc: this.desc.value,
        min: this.min.value,
        max: this.max.value,
        humidity: this.humidity.value,
      };
    }
    return {
      _id: this._id,
      city: this.city.value,
      temp: this.temp.value,
      desc: this.desc.value,
      min: this.min.value,
      max: this.max.value,
      humidity: this.humidity.value,
    };
  }
  fillJson(current) {
    this._id = current._id;

    this.city.setValue(current.city);
    this.temp.setValue(current.temp);
    this.desc.setValue(current.desc);
    this.min.setValue(current.min);
    this.max.setValue(current.max);
    this.humidity.setValue(current.humidity);
  }
}

export default Current;
