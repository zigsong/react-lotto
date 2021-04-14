import React, { Component } from 'react';
import { Root, Form, Label, InputWrapper, Input, SubmitButton } from './style';

class PriceInput extends Component {
  render() {
    return (
      <Root>
        <Form>
          <Label htmlFor="price">구입할 금액을 입력해주세요.</Label>
          <InputWrapper>
            <Input type="number" min="1000" id="price" placeholder="구입 금액" />
            <SubmitButton>확인</SubmitButton>
          </InputWrapper>
        </Form>
      </Root>
    );
  }
}

export default PriceInput;
