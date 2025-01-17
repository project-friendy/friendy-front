import S from './style';

interface DotProps {
  isActive: boolean;
  isLast: boolean;
}

export default function Dot({ isActive, isLast }: DotProps) {
  return <S.Dot isActive={isActive} isLast={isLast}></S.Dot>;
}
