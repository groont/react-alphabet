import { Digit0 } from './components/Digit0';
import { Digit1 } from './components/Digit1';
import { Digit2 } from './components/Digit2';
import { Digit3 } from './components/Digit3';
import { Digit4 } from './components/Digit4';
import { Digit5 } from './components/Digit5';
import { Digit6 } from './components/Digit6';
import { Digit7 } from './components/Digit7';
import { Digit8 } from './components/Digit8';
import { Digit9 } from './components/Digit9';
import { LetterLowercaseA } from './components/LetterLowercaseA';
import { LetterLowercaseB } from './components/LetterLowercaseB';
import { LetterLowercaseC } from './components/LetterLowercaseC';
import { LetterLowercaseD } from './components/LetterLowercaseD';
import { LetterLowercaseE } from './components/LetterLowercaseE';
import { LetterLowercaseF } from './components/LetterLowercaseF';
import { LetterLowercaseG } from './components/LetterLowercaseG';
import { LetterLowercaseH } from './components/LetterLowercaseH';
import { LetterLowercaseI } from './components/LetterLowercaseI';
import { LetterLowercaseJ } from './components/LetterLowercaseJ';
import { LetterLowercaseK } from './components/LetterLowercaseK';
import { LetterLowercaseL } from './components/LetterLowercaseL';
import { LetterLowercaseM } from './components/LetterLowercaseM';
import { LetterLowercaseN } from './components/LetterLowercaseN';
import { LetterLowercaseO } from './components/LetterLowercaseO';
import { LetterLowercaseP } from './components/LetterLowercaseP';
import { LetterLowercaseQ } from './components/LetterLowercaseQ';
import { LetterLowercaseR } from './components/LetterLowercaseR';
import { LetterLowercaseS } from './components/LetterLowercaseS';
import { LetterLowercaseT } from './components/LetterLowercaseT';
import { LetterLowercaseU } from './components/LetterLowercaseU';
import { LetterLowercaseV } from './components/LetterLowercaseV';
import { LetterLowercaseW } from './components/LetterLowercaseW';
import { LetterLowercaseX } from './components/LetterLowercaseX';
import { LetterLowercaseY } from './components/LetterLowercaseY';
import { LetterLowercaseZ } from './components/LetterLowercaseZ';
import { LetterUppercaseA } from './components/LetterUppercaseA';
import { LetterUppercaseB } from './components/LetterUppercaseB';
import { LetterUppercaseC } from './components/LetterUppercaseC';
import { LetterUppercaseD } from './components/LetterUppercaseD';
import { LetterUppercaseE } from './components/LetterUppercaseE';
import { LetterUppercaseF } from './components/LetterUppercaseF';
import { LetterUppercaseG } from './components/LetterUppercaseG';
import { LetterUppercaseH } from './components/LetterUppercaseH';
import { LetterUppercaseI } from './components/LetterUppercaseI';
import { LetterUppercaseJ } from './components/LetterUppercaseJ';
import { LetterUppercaseK } from './components/LetterUppercaseK';
import { LetterUppercaseL } from './components/LetterUppercaseL';
import { LetterUppercaseM } from './components/LetterUppercaseM';
import { LetterUppercaseN } from './components/LetterUppercaseN';
import { LetterUppercaseO } from './components/LetterUppercaseO';
import { LetterUppercaseP } from './components/LetterUppercaseP';
import { LetterUppercaseQ } from './components/LetterUppercaseQ';
import { LetterUppercaseR } from './components/LetterUppercaseR';
import { LetterUppercaseS } from './components/LetterUppercaseS';
import { LetterUppercaseT } from './components/LetterUppercaseT';
import { LetterUppercaseU } from './components/LetterUppercaseU';
import { LetterUppercaseV } from './components/LetterUppercaseV';
import { LetterUppercaseW } from './components/LetterUppercaseW';
import { LetterUppercaseX } from './components/LetterUppercaseX';
import { LetterUppercaseY } from './components/LetterUppercaseY';
import { LetterUppercaseZ } from './components/LetterUppercaseZ';
import { SymbolComma } from './components/SymbolComma';
import { SymbolDash } from './components/SymbolDash';
import { SymbolExclamationMark } from './components/SymbolExclamationMark';
import { SymbolLongDash } from './components/SymbolLongDash';
import { SymbolPoint } from './components/SymbolPoint';
import { SymbolQuestionMark } from './components/SymbolQuestionMark';
import { SymbolSpace } from './components/SymbolSpace';

import { LetterName } from './constants';
import { TLetterHandler } from './types';

export const letterHandlerMap: Record<LetterName, TLetterHandler> = {
  [LetterName.UPPERCASE_A]: {
    Component: LetterUppercaseA,
  },

  [LetterName.UPPERCASE_B]: {
    Component: LetterUppercaseB,
  },

  [LetterName.UPPERCASE_C]: {
    Component: LetterUppercaseC,
  },

  [LetterName.UPPERCASE_D]: {
    Component: LetterUppercaseD,
  },

  [LetterName.UPPERCASE_E]: {
    Component: LetterUppercaseE,
  },

  [LetterName.UPPERCASE_F]: {
    Component: LetterUppercaseF,
  },

  [LetterName.UPPERCASE_G]: {
    Component: LetterUppercaseG,
  },

  [LetterName.UPPERCASE_H]: {
    Component: LetterUppercaseH,
  },

  [LetterName.UPPERCASE_I]: {
    Component: LetterUppercaseI,
  },

  [LetterName.UPPERCASE_J]: {
    Component: LetterUppercaseJ,
  },

  [LetterName.UPPERCASE_K]: {
    Component: LetterUppercaseK,
  },

  [LetterName.UPPERCASE_L]: {
    Component: LetterUppercaseL,
  },

  [LetterName.UPPERCASE_M]: {
    Component: LetterUppercaseM,
  },

  [LetterName.UPPERCASE_N]: {
    Component: LetterUppercaseN,
  },

  [LetterName.UPPERCASE_O]: {
    Component: LetterUppercaseO,
  },

  [LetterName.UPPERCASE_P]: {
    Component: LetterUppercaseP,
  },

  [LetterName.UPPERCASE_Q]: {
    Component: LetterUppercaseQ,
  },

  [LetterName.UPPERCASE_R]: {
    Component: LetterUppercaseR,
  },

  [LetterName.UPPERCASE_S]: {
    Component: LetterUppercaseS,
  },

  [LetterName.UPPERCASE_T]: {
    Component: LetterUppercaseT,
  },

  [LetterName.UPPERCASE_U]: {
    Component: LetterUppercaseU,
  },

  [LetterName.UPPERCASE_V]: {
    Component: LetterUppercaseV,
  },

  [LetterName.UPPERCASE_W]: {
    Component: LetterUppercaseW,
  },

  [LetterName.UPPERCASE_X]: {
    Component: LetterUppercaseX,
  },

  [LetterName.UPPERCASE_Y]: {
    Component: LetterUppercaseY,
  },

  [LetterName.UPPERCASE_Z]: {
    Component: LetterUppercaseZ,
  },

  [LetterName.LOWERCASE_A]: {
    Component: LetterLowercaseA,
  },

  [LetterName.LOWERCASE_B]: {
    Component: LetterLowercaseB,
  },

  [LetterName.LOWERCASE_C]: {
    Component: LetterLowercaseC,
  },

  [LetterName.LOWERCASE_D]: {
    Component: LetterLowercaseD,
  },

  [LetterName.LOWERCASE_E]: {
    Component: LetterLowercaseE,
  },

  [LetterName.LOWERCASE_F]: {
    Component: LetterLowercaseF,
  },

  [LetterName.LOWERCASE_G]: {
    Component: LetterLowercaseG,
  },

  [LetterName.LOWERCASE_H]: {
    Component: LetterLowercaseH,
  },

  [LetterName.LOWERCASE_I]: {
    Component: LetterLowercaseI,
  },

  [LetterName.LOWERCASE_J]: {
    Component: LetterLowercaseJ,
  },

  [LetterName.LOWERCASE_K]: {
    Component: LetterLowercaseK,
  },

  [LetterName.LOWERCASE_L]: {
    Component: LetterLowercaseL,
  },

  [LetterName.LOWERCASE_M]: {
    Component: LetterLowercaseM,
  },

  [LetterName.LOWERCASE_N]: {
    Component: LetterLowercaseN,
  },

  [LetterName.LOWERCASE_O]: {
    Component: LetterLowercaseO,
  },

  [LetterName.LOWERCASE_P]: {
    Component: LetterLowercaseP,
  },

  [LetterName.LOWERCASE_Q]: {
    Component: LetterLowercaseQ,
  },

  [LetterName.LOWERCASE_R]: {
    Component: LetterLowercaseR,
  },

  [LetterName.LOWERCASE_S]: {
    Component: LetterLowercaseS,
  },

  [LetterName.LOWERCASE_T]: {
    Component: LetterLowercaseT,
  },

  [LetterName.LOWERCASE_U]: {
    Component: LetterLowercaseU,
  },

  [LetterName.LOWERCASE_V]: {
    Component: LetterLowercaseV,
  },

  [LetterName.LOWERCASE_W]: {
    Component: LetterLowercaseW,
  },

  [LetterName.LOWERCASE_X]: {
    Component: LetterLowercaseX,
  },

  [LetterName.LOWERCASE_Y]: {
    Component: LetterLowercaseY,
  },

  [LetterName.LOWERCASE_Z]: {
    Component: LetterLowercaseZ,
  },

  [LetterName.DIGIT_0]: {
    Component: Digit0,
  },

  [LetterName.DIGIT_1]: {
    Component: Digit1,
  },

  [LetterName.DIGIT_2]: {
    Component: Digit2,
  },

  [LetterName.DIGIT_3]: {
    Component: Digit3,
  },

  [LetterName.DIGIT_4]: {
    Component: Digit4,
  },

  [LetterName.DIGIT_5]: {
    Component: Digit5,
  },

  [LetterName.DIGIT_6]: {
    Component: Digit6,
  },

  [LetterName.DIGIT_7]: {
    Component: Digit7,
  },

  [LetterName.DIGIT_8]: {
    Component: Digit8,
  },

  [LetterName.DIGIT_9]: {
    Component: Digit9,
  },

  [LetterName.SYMBOL_COMMA]: {
    Component: SymbolComma,
  },

  [LetterName.SYMBOL_DASH]: {
    Component: SymbolDash,
  },

  [LetterName.SYMBOL_EXCLAMATION_MARK]: {
    Component: SymbolExclamationMark,
  },

  [LetterName.SYMBOL_LONG_DASH]: {
    Component: SymbolLongDash,
  },

  [LetterName.SYMBOL_POINT]: {
    Component: SymbolPoint,
  },

  [LetterName.SYMBOL_QUESTION_MARK]: {
    Component: SymbolQuestionMark,
  },

  [LetterName.SYMBOL_SPACE]: {
    Component: SymbolSpace,
  },
};
