import { createSlice } from "@reduxjs/toolkit";
import { stadiumReducer } from "./slice/StadiumSlice";

const initialState = {
    selectedBlock: '',
    rows: '',
    col: '',
}

const stadiumSlice = createSlice({
    name: 'stadium',
    initialState,
    reducers: {
        selectedBlock: (state, action) => {
            const block = action.payload;
            let row = 0;
            let col = 0;
            switch (block) {
                case 'EAST STAND GROUND FLOOR':
                    row = 24; col = 24; break;
                case 'EAST STAND FIRST FLOOR':
                    row = 16; col = 28; break;
                case 'EAST STAND SECOND FLOOR':
                    row = 20; col = 26; break;
                case 'HILL A SUPER HOSPITALITY':
                    row = 22; col = 14; break;
                case 'HILL A PREMIUM':
                    row = 12; col = 8; break;
                case 'GMR LOUNGE':
                    row = 6; col = 8; break;
                case 'JSW LOUNGE':
                    row = 6;col = 8;break;
                case 'NORTH CENTRAL THIRD FLOOR':
                    row = 12;col = 14;break;
                case 'NORTH CENTRAL SECOND FLOOR':
                    row = 12;col = 14;break;
                case 'WS GROUND FLOOR PREMIUM':
                    row = 8;col = 8;break;
                case 'DC LOUNGE':
                    row = 24;col = 8;break;
                case 'WEST SIDE CORPORATE BOXES':
                    row = 24;col = 24;break;
                case 'WEST STAND THIRD FLOOR':
                    row = 24;col = 16;break;
                case 'NORTH WEST THIRD FLOOR':
                    row = 20;col = 22;break;
                case 'NORTH WEST SECOND FLOOR':
                    row = 18;col = 20;break;
                case 'NORTH WEST FIRST FLOOR':
                    row = 16;col = 18;break;
                case 'NW GROUND PREMIUM':
                    row = 8;col = 9;break;
                case 'OLD CLUB HOUSE FIRST FLOOR':
                    row = 36;col = 20; break;
                case 'OLD CLUB HOUSE CORPORATE BOXES':
                    row = 24;col = 20;
                    break;
                case 'HILL B SOUTH WEST':
                    row = 48;col = 20;
                    break;
                case 'NORTH EAST THIRD FLOOR':
                    row = 18;
                    col = 24;
                    break;
                case 'NORTH EAST SECOND FLOOR':
                    row = 16;
                    col = 20;
                    break;
                case 'NORTH EAST FIRST FLOOR PREMIUM':
                    row = 16;
                    col = 16;
                    break;
                case 'NE GROUND PREMIUM':
                    row = 12;
                    col = 8;
                    break;
                default:
                    row = 5;
                    col = 5;
            }
            state.selectedBlock = block;
            state.rows = row;
            state.col = col;
        },
    }
});


export const { selectedBlock } = stadiumSlice.actions;
export default stadiumSlice.reducer;