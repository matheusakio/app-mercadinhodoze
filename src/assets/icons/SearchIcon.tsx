import * as React from 'react';
import Svg, {Path, Defs, ClipPath, Rect} from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const SearchIcon: React.FC<IconProps> = ({
  width = 18,
  height = 18,
  color = '#F7A833',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Defs>
        <ClipPath id="clip0">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
      <Path
        d="M13.1484 10.9688C13.8516 9.8625 14.2641 8.55 14.2641 7.13906C14.2641 3.19688 11.0719 0 7.13437 0C3.19219 0 0 3.19688 0 7.13906C0 11.0813 3.19219 14.2781 7.12969 14.2781C8.55938 14.2781 9.89062 13.8563 11.0062 13.1344L11.3297 12.9094L16.4203 18L18 16.3922L12.9141 11.3016L13.1484 10.9688ZM11.1281 3.15C12.1922 4.21406 12.7781 5.62969 12.7781 7.13437C12.7781 8.63906 12.1922 10.0547 11.1281 11.1188C10.0641 12.1828 8.64844 12.7687 7.14375 12.7687C5.63906 12.7687 4.22344 12.1828 3.15937 11.1188C2.09531 10.0547 1.50937 8.63906 1.50937 7.13437C1.50937 5.62969 2.09531 4.21406 3.15937 3.15C4.22344 2.08594 5.63906 1.5 7.14375 1.5C8.64844 1.5 10.0641 2.08594 11.1281 3.15Z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchIcon;
