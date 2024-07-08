import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const HomeIcon: React.FC<IconProps> = ({
  width = 24,
  height = 23,
  color = '#F7A833',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 23" fill="none">
      <Path
        d="M23.5033 10.8198L12.5988 0.240933C12.5203 0.164557 12.427 0.103965 12.3244 0.0626224C12.2217 0.0212801 12.1116 0 12.0005 0C11.8893 0 11.7793 0.0212801 11.6766 0.0626224C11.574 0.103965 11.4807 0.164557 11.4022 0.240933L0.497704 10.8198C0.180021 11.1282 0 11.5471 0 11.984C0 12.8913 0.759793 13.629 1.69431 13.629H2.84327V21.1775C2.84327 21.6325 3.22184 22 3.69042 22H10.3062V16.2428H13.2712V22H20.3106C20.7792 22 21.1577 21.6325 21.1577 21.1775V13.629H22.3067C22.7567 13.629 23.1883 13.4568 23.5059 13.1458C24.1651 12.5032 24.1651 11.4623 23.5033 10.8198Z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;
