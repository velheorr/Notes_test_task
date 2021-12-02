import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const StyledInputElement = styled('input')`
  width: 384px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  margin-top: 10px;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
  }
`;



const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
        <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
});



export default function UnstyledInput(props) {
    return <CustomInput  placeholder={props.placeholder} value={props.value} />;
}

