import { makeAutoObservable, runInAction } from 'mobx';
import validationSchemas from 'utils/validations/validationSchemas';
import {
  EMAIL,
  REQUIRED,
  PASSWORD,
  CONFIRM_PASSWORD,
  PASSWORD_EDIT,
} from './validationTypes';

interface Props {
  validationSchema: Function;
  type: string;
}

class Validation implements Props {
  type;
  validationSchema: any;

  constructor(type: string) {
    this.validationSchema = null;
    this.type = type;

    makeAutoObservable(this);

    this.setValidateSchema();
  }

  async checkValidation(store: any, password: string | number) {
    if (this.validationSchema) {
      try {
        if (this.type === CONFIRM_PASSWORD) {
          await this.validationSchema.validate({
            confirmPassword: store.value,
            password: password || '',
          });
        } else {
          await this.validationSchema.validate({ value: store.value });
        }

        runInAction(() => {
          return true;
        });
      } catch (e) {
        runInAction(() => {
          store.setError(e.message);
          return false;
        });
      }
    }
  }

  setValidateSchema() {
    this.validationSchema = null;

    switch (this.type) {
      case EMAIL:
        this.validationSchema = validationSchemas.emailValidation;
        break;
      case REQUIRED:
        this.validationSchema = validationSchemas.requiredValidation;
        break;
      case PASSWORD:
        this.validationSchema = validationSchemas.passwordValidation;
        break;
      case CONFIRM_PASSWORD:
        this.validationSchema = validationSchemas.confirmPasswordValidation;
        break;
      case PASSWORD_EDIT:
        this.validationSchema = validationSchemas.confirmPasswordEditValidation;
        break;
      default:
        break;
    }
  }
}

export default Validation;