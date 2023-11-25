import { LetterName } from './constants';
import { letterHandlerMap } from './handlers';

export const Alphabet = ({
  name,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  color,
}: {
  name: LetterName;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  color?: string;
}) => {
  const letterComponent = letterHandlerMap[name];

  return (
    <span style={{ fontFamily, fontSize, fontWeight, fontStyle, color }}>
      <letterComponent.Component />
    </span>
  );
};
