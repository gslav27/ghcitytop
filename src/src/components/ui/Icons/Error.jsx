import React from 'react';
import { IconsPropTypes } from '../../../utilities/types/interfaces';
import { IconsDefaultProps } from '../../../utilities/types/defaultData';

const Error = props => (
  <svg
    className={props.className}
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
  >
    <path
      d='M0 0h24v24H0z'
      fill='none'
    />
    <path
      d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
      fill={props.nativeColor}
    />
  </svg>
);

Error.propTypes = IconsPropTypes;
Error.defaultProps = IconsDefaultProps;

export default Error;
