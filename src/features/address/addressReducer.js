import addressActions from './addressAction';
import * as AppConst from '../../utils/constant';

const initState = {
    list_address: [
        // {id: 1, name: 'Lãm Hà', phone: '0987654321', address: 'Lãm Hà, Kiến An, Hải Phòng', note: 'cuối chợ Lãm Hà', is_default: true},
        // {id: 2, name: 'Hà Tu', phone: '0987654321', address: 'Hà Tu, Hạ Long, Quảng Ninh', note: 'chợ Hà Tu', is_default: false},
        // {id: 3, name: 'Nam Đồng', phone: '0987654321', address: 'Nam Đồng, Đống Đa, Hà Nội', note: 'hồ Nam Đồng', is_default: false},
    ],
    checked_address_id: 1,
    is_loading: false,
};

const addressReducer = (state = initState, action) => {
    let list_address_update = [];
    switch (action.type) {
        case addressActions.types.GET_USER_ADDRESS_TRIGGER:
            console.info('get user address trigger');
            return state;
        case addressActions.types.GET_USER_ADDRESS_SUCCESS:
            console.info('get user address success');
            let checked_address_id = null;
            action.payload.map(address => {
                if (address.is_default) checked_address_id = address.id
            });
            return {
                ...state,
                list_address: action.payload,
                checked_address_id: checked_address_id
            };
        case addressActions.types.ADD_ADDRESS:
            console.info(`add address ${action.payload}`);
            // list_address_update = [...state.list_address];
            // list_address_update.push(action.payload);
            return {
                ...state,
                // list_address: list_address_update
            };
        case addressActions.types.REMOVE_ADDRESS:
            console.info(`remove address ${action.payload}`);
            // list_address_update = [...state.list_address];
            // let address_remove_index = list_address_update.findIndex(address => address.id === action.payload);
            // if (address_remove_index !== -1) {
            //     list_address_update.splice(address_remove_index, 1);
            // }
            return {
                ...state,
                // list_address: list_address_update
            };
        case addressActions.types.UPDATE_ADDRESS:
            console.info(`update address ${action.payload.id}`);
            // list_address_update = [...state.list_address];
            // let address_update_index = list_address_update.findIndex(address => address.id === action.payload.id);
            // if (address_update_index !== -1) {
            //     list_address_update[address_update_index] = action.payload
            // }
            return {
                ...state,
                // list_address: list_address_update
            };
        case addressActions.types.CHANGE_DEFAULT_ADDRESS:
            console.info(`change default address ${action.payload}`);
            // list_address_update = [...state.list_address];
            // list_address_update.map(address => {
            //     address.is_default = address.id === action.payload;
            // });
            return {
                ...state,
                // list_address: list_address_update
            };
        case addressActions.types.UPDATE_LOADING_ADDRESS:
            console.info(`update loading address ${action.payload}`);
            return {
                ...state,
                is_loading: action.payload
            };
        case addressActions.types.CHANGE_CHECKED_ADDRESS:
            console.info(`change checked address ${action.payload}`);
            return {
                ...state,
                checked_address_id: action.payload
            };
        default:
            return state;
    }
};

export default addressReducer;
