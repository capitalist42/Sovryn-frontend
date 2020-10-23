import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  TradingPairDictionary,
  TradingPairType,
} from 'utils/trading-pair-dictionary';
import { ContainerState } from './types';

// The initial state of the TradingPage container
export const initialState: ContainerState = {
  tradingPair: TradingPairDictionary.pairTypeList()[0], // Set first pair as default selection.
};

const tradingPageSlice = createSlice({
  name: 'tradingPage',
  initialState,
  reducers: {
    changeTradingPair(state, { payload }: PayloadAction<TradingPairType>) {
      state.tradingPair = payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = tradingPageSlice;
