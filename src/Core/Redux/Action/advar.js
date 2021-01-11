import { createAdvar } from '../../services/AdvarServices';
import { successMessage } from '../../utils/message';

//create-new-advar
export const addAdver = (advar) => {
  return async (dispatch, getState) => {
    const { status, data } = await createAdvar(advar);
    console.log(status);
    if (status === 200) {
      successMessage('درخواست آگهی با موفقیت ثبت گردید');
      await dispatch({
        type: 'CREATE_ADVAR',
        payload: [...getState.advars, data.advar],
      });
      console.log(data.advar);
    } else {
      console.log(status.message);
    }
  };
};
